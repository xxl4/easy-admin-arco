import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ADMIN: AppRouteRecordRaw = {
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
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/admin/workplace/index.vue'),
      meta: {
        locale: 'menu.admin.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },

    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/admin/monitor/index.vue'),
      meta: {
        locale: 'menu.admin.monitor',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default ADMIN;
