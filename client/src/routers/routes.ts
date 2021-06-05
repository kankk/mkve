import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import Button from '@pages/button/index.vue';
import Input from '@pages/input/index.vue';
import Grid from '@pages/grid/index.vue';

/**
 * 定义一级路由对象类型
 *
 * @interface FirstRoute
 */
interface FirstRoute {
  id: string;
  name: string;
  path: string;
  children: SecondRoute[];
  component?: Component;
}

/**
 * 定义二级路由对象类型
 *
 * @interface SecondRoute
 */
interface SecondRoute {
  id: string;
  name: string;
  path: string;
  component?: Component;
}

const routes: FirstRoute[] = [
  {
    id: 'components',
    name: '组件',
    path: '/components',
    children: [
      {
        id: 'button',
        name: '按钮',
        path: '/button',
        component: Button,
      },
      {
        id: 'input',
        name: '输入框',
        path: '/input',
        component: Input,
      },
    ],
  },
  {
    id: 'layout',
    name: '布局',
    path: '/layout',
    children: [
      {
        id: 'grid',
        name: 'Grid 布局',
        path: '/grid',
        component: Grid,
      },
    ],
  },
];

export function getVueRoutes(): RouteRecordRaw[] {
  const firstRoutes: RouteRecordRaw[] = [];
  routes.forEach((first) => {
    if (first.component) {
      firstRoutes.push({
        path: first.path,
        name: first.name,
        component: first.component,
        children: first.children.map((second: any): RouteRecordRaw => ({
          name: second.name,
          path: `${first.path === '/' ? '' : first.path}${second.path}`,
          component: second.component,
        })),
      });
    } else {
      firstRoutes.push(...first.children.map((second: any): RouteRecordRaw => ({
        name: second.name,
        path: `${first.path === '/' ? '' : first.path}${second.path}`,
        component: second.component,
      })));
    }
  });
  return firstRoutes;
}

export function getAsideMenu() {
  return routes.map((first) => ({
    ...first,
    children: first.children.map((second) => ({
      id: `${first.id}.${second.id}`,
      name: second.name,
      path: `${first.path === '/' ? '' : first.path}${second.path}`,
    })),
  }));
}
