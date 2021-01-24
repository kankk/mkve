import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import '@styles/preset.scss';
import 'element-plus/lib/theme-chalk/index.css';

import router from './routers';
import store from './store';

// Vue App 实例化
const app = createApp(App);

// 注册 vue-router
app.use(router);

// 注册 vuex
app.use(store);

// 注册 Element-Plus
app.use(ElementPlus);

// 渲染模板
app.mount('#app');
