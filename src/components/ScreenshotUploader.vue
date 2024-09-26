<template>
  <div class="screenshot-uploader">
    <h3>Upload Screenshots</h3>

    <!-- Button to trigger screenshot capture -->
    <button type="button" @click="startSelecting" class="capture-button">Capture Screenshot</button>

    <!-- Drag-and-drop file zone -->
    <div class="drop-zone" @dragover.prevent @dragenter.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false" @drop.prevent="handleDrop">
      <p v-if="!isDragging">Drag and drop files here or</p>
      <p v-if="isDragging">Release to upload files</p>
      <button type="button" @click="triggerFileInput" class="upload-button">Upload Screenshots</button>
    </div>

    <!-- File input for uploading screenshots -->
    <input type="file" ref="fileInput" multiple accept="image/*" @change="handleFileUpload" style="display: none;" />

    <!-- Overlay for dragging to select -->
    <div v-if="isSelecting" class="selection-overlay" @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag">
      <div v-if="dragging" class="selection-box" :style="selectionBoxStyle"></div>
    </div>

    <!-- Display selected screenshots -->
    <div class="screenshot-preview" v-if="screenshots.length">
      <h4>Preview:</h4>
      <div class="screenshots">
        <div v-for="(screenshot, index) in screenshots" :key="index" class="screenshot-item">
          <img :src="screenshot.preview" alt="Screenshot Preview" />
          <button @click="removeScreenshot(index)" class="remove-button">
            <!-- SVG Delete Icon -->
            <svg fill="#ffffff" height="16px" width="16px" version="1.1" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330">
              <g>
                <g>
                  <path
                    d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75S266.355,300,225,300z" />
                </g>
                <g>
                  <path
                    d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z" />
                </g>
                <g>
                  <path
                    d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z" />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

< <script lang="ts">
import { defineComponent, ref, computed } from "vue";
import html2canvas from "html2canvas";

interface Screenshot {
  preview: string;
  file: File | null;
}

export default defineComponent({
  name: "ScreenshotUploader",
  setup() {
    const screenshots = ref<Screenshot[]>([]);
    const isSelecting = ref(false);
    const dragging = ref(false);
    const isDragging = ref(false);
    const startX = ref(0);
    const startY = ref(0);
    const endX = ref(0);
    const endY = ref(0);
    const fileInput = ref<HTMLInputElement | null>(null);

    const selectionBoxStyle = computed(() => ({
      left: `${Math.min(startX.value, endX.value)}px`,
      top: `${Math.min(startY.value, endY.value)}px`,
      width: `${Math.abs(endX.value - startX.value)}px`,
      height: `${Math.abs(endY.value - startY.value)}px`,
    }));

    const startSelecting = () => {
      isSelecting.value = true;
      dragging.value = false; // Ensure dragging starts fresh
      startX.value = 0;
      startY.value = 0;
      endX.value = 0;
      endY.value = 0;
      document.addEventListener("mousedown", startDrag);
    };

    const startDrag = (event: MouseEvent) => {
      if (!isSelecting.value) return;
      dragging.value = true;
      startX.value = event.clientX;
      startY.value = event.clientY;
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", endDrag);
    };

    const onDrag = (event: MouseEvent) => {
      if (dragging.value) {
        endX.value = event.clientX;
        endY.value = event.clientY;
      }
    };

    const endDrag = () => {
      if (!dragging.value) return;
      dragging.value = false;
      isSelecting.value = false;
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", endDrag);

      // Capture the selected area
      captureScreenshot({
        x: Math.min(startX.value, endX.value),
        y: Math.min(startY.value, endY.value),
        width: Math.abs(endX.value - startX.value),
        height: Math.abs(endY.value - startY.value),
      });
    };

    const captureScreenshot = async (selection: { x: number; y: number; width: number; height: number }) => {
      try {
        const element = document.body; // Change this to capture specific elements if needed
        const canvas = await html2canvas(element, {
          x: selection.x,
          y: selection.y,
          width: selection.width,
          height: selection.height,
          useCORS: true,
        });
        const screenshotDataUrl = canvas.toDataURL("image/png"); // Convert the canvas to a base64-encoded PNG
        screenshots.value.push({ preview: screenshotDataUrl, file: null }); // Add the screenshot to the array
        console.log("Screenshot captured successfully.");
      } catch (error) {
        console.error("Error capturing screenshot:", error);
      }
    };

    const triggerFileInput = () => {
      // Open the hidden file input for uploading screenshots
      fileInput.value?.click();
    };

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        handleFiles(input.files);
      }
    };

    const handleDrop = (event: DragEvent) => {
      isDragging.value = false;
      const files = event.dataTransfer?.files;
      if (files) {
        handleFiles(files);
      }
    };

    const handleFiles = (files: FileList) => {
      for (const file of Array.from(files)) {
        // Create a FileReader to generate a preview of the image
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            screenshots.value.push({ preview: e.target.result as string, file });
          }
        };
        reader.readAsDataURL(file);
      }
    };

    const removeScreenshot = (index: number) => {
      // Remove a screenshot from the list
      screenshots.value.splice(index, 1);
    };

    return {
      screenshots,
      isSelecting,
      dragging,
      isDragging,
      selectionBoxStyle,
      startSelecting,
      triggerFileInput,
      handleFileUpload,
      handleDrop,
      removeScreenshot,
      startDrag,
      onDrag,
      endDrag,
    };
  },
});
</script>

      <style scoped>
      .screenshot-uploader {
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f8f8f8;
        margin: 10px;
        width: 100%;
      }

      .drop-zone {
        border: 2px dashed #cccccc;
        padding: 16px;
        margin-top: 16px;
        text-align: center;
        border-radius: 8px;
        transition: background-color 0.2s;
      }

      .drop-zone:hover,
      .drop-zone.dragging {
        background-color: #e8e8e8;
        cursor: pointer;
      }

      .upload-button {
        margin-top: 8px;
      }

      .screenshot-preview {
        margin-top: 16px;
      }

      .screenshots {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .screenshot-item {
        position: relative;
        width: 100px;
        height: 100px;
      }

      .screenshot-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
      }

      .remove-button {
        position: absolute;
        top: 4px;
        right: 4px;
        background-color: red;
        border: none;
        border-radius: 50%;
        padding: 4px;
        cursor: pointer;
      }

      .selection-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        cursor: crosshair;
      }

      .selection-box {
        position: absolute;
        border: 2px dashed #4caf50;
        background-color: rgba(66, 133, 244, 0.1);
      }

      .capture-button {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 16px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .capture-button:hover {
        background-color: #388e3c;
      }
    </style>