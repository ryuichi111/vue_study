import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    count: 0,
    volume: 10,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    changeVolume(state, value) {
      state.volume = value;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({ key: "vue3_with_primevue" })],
});
