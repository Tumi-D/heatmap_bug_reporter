<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="toggle-container">
      <button @click="viewMode = 'phone'">Phone View</button>
      <button @click="viewMode = 'tablet'">Tablet View</button>
      <!-- Use the BugReportButton, which includes the modal -->
      <BugReportButton />
    </div>
    <div class="browser-frame">
      <div class="browser-header">
        <div class="circles">
          <span class="circle red"></span>
          <span class="circle yellow"></span>
          <span class="circle green"></span>
        </div>
        <div class="address-bar">https://www.jellybelly.com</div>
      </div>
      <div v-if="loading" class="loading-spinner">Loading...</div>
      <div v-else class="device-frame" :class="viewMode">
        <iframe src="https://www.jellybelly.com/" @load="loading = false" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BugReportButton from './BugReportButton.vue'; // Only import the button

export default defineComponent({
  name: "BugReportWidget",
  components: {
    BugReportButton,
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      viewMode: 'phone' as 'phone' | 'tablet', // Type the view mode
      loading: true, // Default loading state
    };
  },
  mounted() {
    this.loading = false;

  },
});
</script>

<style scoped>
@media (max-width: 768px) {
  .device-frame.phone {
    width: 150px;
    height: 300px;
  }

  .device-frame.tablet {
    width: 300px;
    height: 500px;
  }
}

.hello {
  text-align: center;
  padding: 10px;
}

.toggle-container {
  margin-bottom: 10px;
}

.toggle-container button {
  padding: 5px 10px;
  margin: 0 3px;
  cursor: pointer;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  font-size: 0.9em;
}

.browser-frame {
  width: fit-content;
  margin: 0 auto;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
}

.browser-header {
  display: flex;
  align-items: center;
  padding: 6px;
  background-color: #e0e0e0;
  border-bottom: 1px solid #ccc;
}

.circles {
  display: flex;
  align-items: center;
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 5px;
}

.red {
  background-color: #ff5f56;
}

.yellow {
  background-color: #ffbd2e;
}

.green {
  background-color: #27c93f;
}

.address-bar {
  flex: 1;
  height: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 5px;
  margin-left: 10px;
  line-height: 16px;
  font-size: 0.8em;
  color: #888;
}

.device-frame {
  background-color: #000;
  overflow: hidden;
  position: relative;
}

.device-frame.iframe {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.device-frame.phone {
  width: 200px;
  height: 400px;
  border: 12px solid #333;
  border-radius: 24px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.device-frame.tablet {
  width: 400px;
  height: 600px;
  border: 12px solid #333;
  border-radius: 12px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
}
</style>
