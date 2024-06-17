<template>
  <div class="loader"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: [],
  components: {},
  data(): {} {
    return {};
  },
  methods: {},
});
</script>

<style scoped>
.loader {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #D1FAE691;
  border-right: 8px solid #00946f91;
  border-bottom: 8px solid #ff634791;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
