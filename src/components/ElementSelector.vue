<template>
  <div class="element-selector">
    <p>Select elements to highlight:</p>
    <div class="buttons">
      <button @click="enableSelectionMode" :disabled="isSelecting">Start Selecting Elements</button>
      <button v-if="isSelecting" class="special" @click="finishSelection">Finish Selection</button>
    </div>

    <!-- Display selected elements with remove option -->
    <div v-if="selectedElements.length" class="selected-elements">
      <h3>Selected Elements:</h3>
      <ul>
        <li v-for="(element, index) in selectedElements" :key="index">
          {{ element.tagName.toLowerCase() }} - {{ element.className }}
          <button @click="removeElement(index)" class="special">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface SelectedElement {
  tagName: string;
  className: string;
}

export default defineComponent({
  data() {
    return {
      isSelecting: false as boolean,
      selectedElements: [] as Element[],
      originalStyles: new Map<Element, string>(), // Store original styles to revert back
      iframeDocuments: [] as HTMLIFrameElement[], // To store iframe documents
    };
  },
  methods: {
    enableSelectionMode() {
      this.isSelecting = true;
      document.addEventListener('click', this.selectElement as EventListener, true);

      // Add iframes in the document to iframeDocuments
      this.iframeDocuments = Array.from(document.querySelectorAll('iframe'));

      // Attach load event listener to iframes to access contentDocument
      this.iframeDocuments.forEach(iframe => {
        iframe.addEventListener('load', () => {
          if (iframe.contentDocument) {
            iframe.contentDocument.addEventListener('click', this.selectElementInIframe as EventListener, true);
          }
        });
      });
    },

    selectElement(event: MouseEvent) {
      if ((event.target as HTMLElement).classList.contains('special')) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const element = event.target as Element;

      // Check if the click is inside the modal or the element selector component itself
      if ((event.target as HTMLElement).closest('.element-selector') || (event.target as HTMLElement).closest('.bug-report-modal')) return;

      // Toggle selection
      if (!this.selectedElements.includes(element)) {
        this.highlightElement(element);
        this.selectedElements.push(element);
      } else {
        this.unhighlightElement(element);
        this.selectedElements = this.selectedElements.filter(el => el !== element);
      }
    },

    selectElementInIframe(event: MouseEvent) {
      event.preventDefault();
      event.stopPropagation();
      const element = event.target as Element;

      // Toggle selection
      if (!this.selectedElements.includes(element)) {
        this.highlightElement(element);
        this.selectedElements.push(element);
      } else {
        this.unhighlightElement(element);
        this.selectedElements = this.selectedElements.filter(el => el !== element);
      }
    },

    highlightElement(element: Element) {
      // Save original styles
      if (!this.originalStyles.has(element)) {
        this.originalStyles.set(element, element.getAttribute('style') || '');
      }
      // Apply highlight style
      element.setAttribute('style', `${element.getAttribute('style') || ''}; outline: 2px solid red`);
    },

    unhighlightElement(element: Element) {
      // Revert to original styles
      if (this.originalStyles.has(element)) {
        element.setAttribute('style', this.originalStyles.get(element) || '');
      }
    },

    finishSelection() {
      this.isSelecting = false;
      document.removeEventListener('click', this.selectElement as EventListener, true);

      // Remove event listeners from iframes
      this.iframeDocuments.forEach(iframe => {
        if (iframe.contentDocument) {
          iframe.contentDocument.removeEventListener('click', this.selectElementInIframe as EventListener, true);
        }
      });

      // Emit the selected elements to the parent component
      this.$emit('elements-selected', this.selectedElements.map((element: Element): SelectedElement => ({
        tagName: element.tagName.toLowerCase(),
        className: element.className || '',
      })));

      // Unhighlight selections
      this.clearSelections();
    },

    clearSelections() {
      // Revert all highlighted elements to their original styles
      this.selectedElements.forEach(element => this.unhighlightElement(element));
      this.originalStyles.clear();
    },

    removeElement(index: number) {
      // Unhighlight and remove the specific element
      const element = this.selectedElements[index];
      this.unhighlightElement(element);
      this.selectedElements.splice(index, 1);
    }
  },
  beforeUnmount() {
    // Clean up event listeners when the component is destroyed
    document.removeEventListener('click', this.selectElement as EventListener, true);
    this.iframeDocuments.forEach(iframe => {
      if (iframe.contentDocument) {
        iframe.contentDocument.removeEventListener('click', this.selectElementInIframe as EventListener, true);
      }
    });
  }
});
</script>

<style scoped>
.element-selector {
  margin-top: 20px;
}

.buttons {
  margin-bottom: 15px;
}

button {
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.selected-elements {
  margin-top: 15px;
  background-color: #f3f3f3;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  max-height: 200px; /* Set maximum height */
  overflow-y: auto; /* Allow scrolling if content exceeds max height */
  position: relative;
}

.selected-elements ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.selected-elements::-webkit-scrollbar {
  width: 0; /* Hide scrollbar in WebKit-based browsers */
}

.selected-elements {
  scrollbar-width: none; /* Hide scrollbar in Firefox */
}

.selected-elements li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.remove-button {
  background: none;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
}

.remove-button:hover {
  text-decoration: underline;
}

</style>
