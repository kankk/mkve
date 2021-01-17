import { createApp } from 'vue';
import App from './App.vue';

import router from './routers';

// Vue App 实例化
const app = createApp(App);

// 注册路由
app.use(router);

// 渲染模板
app.mount('#app');
