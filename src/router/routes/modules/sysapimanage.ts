import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const SysApiManage: AppRouteRecordRaw = {
  path: '/admin',
  name: 'admin',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.admin',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'sys-api',
      name: 'SysApiManage',
      component: () => import('@/views/admin/sys-api/index.vue'),
      meta: {
        locale: 'menu.admin.sys-api',
        requiresAuth: true,
        roles: ['*'],
      },
    },

    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/dashboard/monitor/index.vue'),
      meta: {
        locale: 'menu.dashboard.monitor',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default SysApiManage;