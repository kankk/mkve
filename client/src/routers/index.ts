import * as VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Detail from '../pages/Detail.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/detail', component: Detail },
];

// 创建 vue-router 实例
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(), // history 模式
  routes,
});

export default router;
