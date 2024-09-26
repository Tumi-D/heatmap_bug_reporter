<template>
  <transition name="slide-in-left">
    <div v-if="isVisible" class="bug-report-modal">
      <div class="modal-header">
        <h2>Report a Bug</h2>
        <button class="close-button" @click="closeModal">X</button>
      </div>
      <div class="modal-content">
        <form @submit.prevent="submitBugReport">
          <label for="title">Title:</label>
          <input v-model="form.title" type="text" id="title" placeholder="Enter the bug title" required />

          <label for="description">Description:</label>
          <textarea v-model="form.description" id="description" placeholder="Describe the bug in detail" required></textarea>

          <!-- <label for="priority">Priority:</label>
          <select v-model="form.priority" id="priority" required>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select> -->

          <ElementSelector @elements-selected="handleElementSelection" />
          <ScreenshotUploader @screenshots-uploaded="handleScreenshots" />

          <button type="submit" class="submit-button">Submit Bug Report</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ElementSelector from './ElementSelector.vue';
import ScreenshotUploader from './ScreenshotUploader.vue';

interface BugForm {
  title: string;
  description: string;
  selectedElements: string[];
  screenshots: string[];
  metadata?: {
    siteUrl: string;
    idsite: string | null;
  };
}

export default defineComponent({
  components: { ElementSelector, ScreenshotUploader },
  setup() {
    const isVisible = ref<boolean>(false);
    const form = ref<BugForm>({
      title: '',
      description: '',
      selectedElements: [],
      screenshots: [],
    });

    const closeModal = () => {
      isVisible.value = false;
    };

    const openModal = () => {
      isVisible.value = true;
    };

    const handleElementSelection = (elements: string[]) => {
      form.value.selectedElements = elements;
    };

    const handleScreenshots = (screenshots: string[]) => {
      form.value.screenshots = screenshots;
    };

    const getMetadata = () => {
      const url = window.location.href;
      const urlParams = new URLSearchParams(window.location.search);
      const idsite = urlParams.get('idSite');

      form.value.metadata = {
        siteUrl: url,
        idsite: idsite || 'not provided',
      };
    };

    const submitBugReport = async () => {
      getMetadata();

      try {
        const response = await fetch('https://webhook.site/a5c9a10f-95d1-47f9-bd99-836dae687ec5', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.value),
        });

        if (response.ok) {
          alert('Bug report submitted successfully!');
          closeModal();
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        alert('An error occurred while submitting the bug report.');
        console.error('Fetch error:', error);
      }
    };

    return {
      isVisible,
      form,
      closeModal,
      openModal,
      handleElementSelection,
      handleScreenshots,
      submitBugReport,
    };
  },
});
</script>

<style scoped>
.bug-report-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 400px;
  height: 100%;
  background: white;
  padding: 15px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #d4d4d4 #f0f0f0;
  z-index: 1000;
}

.bug-report-modal::-webkit-scrollbar {
  width: 0 !important;
}

.bug-report-modal::-webkit-scrollbar-track {
  background: #f0f0f0;
}

.bug-report-modal::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
  border-radius: 0px !important;
  border: 0px solid #f0f0f0 !important;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.3em;
}

.close-button {
  background: none;
  border: none;
  font-size: 1em;
  cursor: pointer;
  color: #333;
}

.modal-content {
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea,
select {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9em;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.submit-button {
  padding: 8px;
  background-color: #42b983;
  margin-bottom: 30px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
}

.submit-button:hover {
  background-color: #36a076;
}

.slide-in-left-enter-active,
.slide-in-left-leave-active {
  transition: transform 0.5s;
}

.slide-in-left-enter,
.slide-in-left-leave-to {
  transform: translateX(-100%);
}
</style>
