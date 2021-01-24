import * as VueRouter from 'vue-router';
import { getVueRoutes } from './routes';

const routes = getVueRoutes();

// 创建 vue-router 实例
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(), // history 模式
  routes,
});

export default router;
