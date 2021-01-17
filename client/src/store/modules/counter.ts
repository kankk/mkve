const store = {
  namespaced: true,
  state: () => ({
    count: 0,
  }),
  mutations: {
    // 增
    increment(state) {
      state.count += 1;
    },
    // 减
    reduction(state) {
      state.count -= 1;
    },
  },
  actions: {},
  getters: {},
};

export default store;
