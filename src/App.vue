<template>
  <!-- create a reset button that dispatched  "reset-all-filters-event"-->
  <button @click="resetAll">reset</button> 
  <!-- call the HeatmapFilter -->
  <HeatmapFilter @on-filter-values-change="filterValueChanged" />
</template>

<script setup lang="ts">
import { ReturnData } from "./components/FilterComponent.vue";
import HeatmapFilter from "./components/HeatmapFilter.vue";

const filterValueChanged = (value: ReturnData[]) => {
  console.log(value);
};

// when ever reset button is clicked, dispatch this event
const resetAll = () => {
  const resetAllEvent = new CustomEvent("reset-all-filters-event");
  document.dispatchEvent(resetAllEvent);
};
</script>
