<template>
  <BugReportWidget msg="Bug Reporter Widget" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BugReportWidget from './components/BugReportWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    BugReportWidget,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
