<template>
  <div class="file-uploader">
    <input
      type="file"
      ref="fileInput"
      @change="handleFileUpload"
      multiple
      class="file-input"
      :accept="allowedFileTypes"
    />
    <button @click="triggerFileInput" class="upload-button">Upload Files</button>

    <div class="file-preview" v-if="files.length">
      <div
        v-for="(file, index) in files"
        :key="index"
        class="file-item"
      >
        <div class="file-info">
          <span>{{ file.name }} ({{ formatFileSize(file.size) }})</span>
          <button @click="removeFile(index)" class="remove-button">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FileUploader',
  props: {
    allowedFileTypes: {
      type: String,
      default: 'image/*, application/pdf, text/plain', // Example: only images, PDFs, and plain text files
    },
  },
  setup(_, { emit }) {
    const files = ref<File[]>([]);

    const triggerFileInput = () => {
      (document.querySelector('input[type="file"]') as HTMLInputElement)?.click();
    };

    const handleFileUpload = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target?.files) {
        const selectedFiles = Array.from(target.files);
        files.value.push(...selectedFiles);
        emit('files-selected', files.value); // Emit the updated files to the parent component
      }
    };

    const removeFile = (index: number) => {
      files.value.splice(index, 1);
      emit('files-selected', files.value); // Emit the updated file list to the parent component
    };

    const formatFileSize = (size: number): string => {
      if (size < 1024) return size + ' bytes';
      if (size < 1048576) return (size / 1024).toFixed(1) + ' KB';
      if (size < 1073741824) return (size / 1048576).toFixed(1) + ' MB';
      return (size / 1073741824).toFixed(1) + ' GB';
    };

    return {
      files,
      triggerFileInput,
      handleFileUpload,
      removeFile,
      formatFileSize,
    };
  },
});
</script>

<style scoped>
.file-uploader {
  margin: 20px 0;
}

.file-input {
  display: none; /* Hide default input */
}

.upload-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.file-preview {
  margin-top: 10px;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.file-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.remove-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
