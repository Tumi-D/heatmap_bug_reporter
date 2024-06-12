<template>
  <div class="main_filter_wrapper" ref="filterWrapper">
    <filter-button
      :onShowFilterMenu="onToggleShowFilterMenu"
      :filteredValues="filteredValues"
    />
    <filter-component
      v-show="showFilterMenu"
      :onToggleShowFilterMenu="onToggleShowFilterMenu"
      :defaultValues="filteredValues"
      @filter-values="onFilterValuesChange"
      @reset-all-filters="onResetAllFilters"
      ref="filterComponent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import FilterComponent from "./FilterComponent.vue";
import FilterButton from "./FilterButton.vue";
import { ReturnData } from "./FilterComponent.vue";


const filteredValues = ref<ReturnData[]>();
const showFilterMenu = ref(false);
const emit = defineEmits<{
  (e: "on-filter-values-change", values: ReturnData[]): void;
  (e: "on-filter-reset"): void;
}>();

const filterWrapper = ref<HTMLElement | null>(null);

function onFilterValuesChange(values: ReturnData[]) {
  console.log(values);
  filteredValues.value = values;
  emit("on-filter-values-change", values);
}

function onResetAllFilters() {
  filteredValues.value = undefined;
  emit("on-filter-reset");
}

function onToggleShowFilterMenu() {
  showFilterMenu.value = !showFilterMenu.value;
}

function handleClickOutside(event: MouseEvent) {
  if (
    filterWrapper.value &&
    !filterWrapper.value.contains(event.target as Node)
  ) {
    showFilterMenu.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
* {
  font-family: Montserrat;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main_filter_wrapper {
  position: relative;
  width: max-content;
}
</style>
