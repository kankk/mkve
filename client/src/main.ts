import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';

import 'ant-design-vue/dist/antd.css';

import router from './routers';
import store from './store';

// Vue App 实例化
const app = createApp(App);

// 注册 vue-router
app.use(router);

// 注册 vuex
app.use(store);

// 注册 Antd-Vue
app.use(Antd);

// 渲染模板
app.mount('#app');
