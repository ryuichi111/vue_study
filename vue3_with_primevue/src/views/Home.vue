<template>
  <div class="home">
    <InputComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputComponent from "@/components/InpurComponent.vue";

export default defineComponent({
  name: "Home",
  components: {
    InputComponent,
  },
});
</script>
