<div align="center">
  ## Adams
</div>

<h1 align=center>Heatmap filter component</h1>
<p align=center>A filter component to be used only by heatmap.com devs <a href="https://dev.to/matijanovosel/making-and-distributing-a-ui-component-with-vue-3-and-vite-12lk"> component export tutorial</a>.</p>

## 🚀 Installation

Install using your package manager of choice:

```bash
pnpm add heatmap-filter
```

## 📺 Demo

https://matija-components.vercel.app/tri-state-checkbox

## ⚙️ Usage

Import the component locally or define it globally and include the css file:

```vue
<template>
  <!-- create a reset button that dispatched  "reset-all-filters-event"-->
  <button @click="resetAll">reset</button> 
  <!-- call the HeatmapFilter -->
  <HeatmapFilter @on-filter-values-change="filterValueChanged" />
  
</template>

<script lang="ts" setup>
import { HeatmapFilter } from "heatmap-filter";

const filterValueChanged = (value: ReturnData[]) => {
  console.log(value);
  // do your stuff here
};

// when ever reset button is clicked, dispatch this event
const resetAll = () => {
  const resetAllEvent = new CustomEvent("reset-all-filters-event");
  document.dispatchEvent(resetAllEvent);
};


</script>
```

## 📃 Emitters

| Name       | Type               | Default | Description                        |
| ---------- | ------------------ | ------- | ---------------------------------- |
| `on-filter-values-change`  | `func`     |         | get the selected filters by listening to this event             |

## 📃 Custom Events

| Name       | Type               | Default | Description                        |
| ---------- | ------------------ | ------- | ---------------------------------- |
| `reset-all-filters-event`  | `func`     |         | for resetting all filters            |

