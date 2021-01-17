import { createApp } from 'vue';
import App from './App.vue';

import router from './routers';
import store from './store';

// Vue App 实例化
const app = createApp(App);

// 注册 vue-router
app.use(router);

// 注册 vuex
app.use(store);

// 渲染模板
app.mount('#app');
