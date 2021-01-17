import { createStore } from 'vuex';

import counter from './modules/counter';
import system from './modules/system';

const store = createStore({
  modules: {
    counter,
    system,
  },
});

export default store;
