import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/pages/main';

import Dashboard from '@/pages/dashboard/dashboard';

Vue.use(Router);
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/xq_admin/dashboard',
  },
];
// 实例化vue的时候只挂载constantRouter
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: constantRouterMap,
});

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/xq_admin',
    component: Main,
    children: [{
      name: 'dashboard',
      path: 'dashboard',
      component: Dashboard,
    }],
    // {
    //   name: 'show',
    //   path: 'show',
    //   component: Show,
    //   meta: { noCache: true, privileges: ['5b5eecdcf70218417d2374eb'] }, // 页面需要的权限
    // }]
  },
  { path: '*', redirect: '/404', hidden: true },
];
