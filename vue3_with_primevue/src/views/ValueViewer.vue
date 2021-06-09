<template>
  <div class="p-grid">
    <div class="p-col-2">volume:</div>
    <div class="p-col-3">
      {{ volume }}
    </div>
  </div>
  <div class="p-grid">
    <div class="p-col-2">count:</div>
    <div class="p-col-3">
      {{ count }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";

export default defineComponent({
  setup() {
    const volume = store.state.volume;
    const count = store.state.count;
    return {
      volume,
      count,
    };
  },
});
</script>
