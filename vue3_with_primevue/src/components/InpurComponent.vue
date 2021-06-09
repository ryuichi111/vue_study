<template>
  <div class="p-grid">
    <div class="p-col">
      <Knob v-model="volume" />
    </div>
    <div class="p-col">
      {{ count }}
      <Button label="increment" @click="increment" class="p-mr-2 p-mb-2" />
      <Button label="decrement" @click="decrement" class="p-mr-2 p-mb-2" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import Knob from "primevue/knob";
import Button from "primevue/button";
import store from "@/store";

export default defineComponent({
  components: {
    Button,
    Knob,
  },
  setup() {
    const volume = ref(store.state.volume);
    watch(volume, (newVal) => {
      store.commit("changeVolume", newVal);
    });
    const count = computed(() => store.state.count);
    const increment = () => store.commit("increment");
    const decrement = () => store.commit("decrement");
    return {
      volume,
      count,
      increment,
      decrement,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
