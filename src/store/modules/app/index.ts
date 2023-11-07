import { defineStore } from 'pinia';
import { FormItem, Notification } from '@arco-design/web-vue';
import type { NotificationReturn } from '@arco-design/web-vue/es/notification/interface';
import type { RouteRecord, RouteRecordNormalized } from 'vue-router';
import defaultSettings from '@/config/settings.json';
import { getMenuList } from '@/api/user';
import { AppState } from './types';

const useAppStore = defineStore('app', {
  state: (): AppState => ({ ...defaultSettings }),

  getters: {
    appCurrentSetting(state: AppState): AppState {
      return { ...state };
    },
    appDevice(state: AppState) {
      return state.device;
    },
    appAsyncMenus(state: AppState): RouteRecordNormalized[] {
      return state.serverMenu as unknown as RouteRecordNormalized[];
    },
  },

  actions: {
    // Update app settings
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial);
    },

    // Change theme color
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark';
        document.body.setAttribute('arco-theme', 'dark');
      } else {
        this.theme = 'light';
        document.body.removeAttribute('arco-theme');
      }
    },
    toggleDevice(device: string) {
      this.device = device;
    },
    toggleMenu(value: boolean) {
      this.hideMenu = value;
    },
    async fetchServerMenuConfig() {
      let notifyInstance: NotificationReturn | null = null;
      try {
        notifyInstance = Notification.info({
          id: 'menuNotice', // Keep the instance id the same
          content: 'loading',
          closable: true,
        });
        const { data } = await getMenuList();
        
        // console.log(typeof(data));
        // console.log(data);

        // const menus:RouteRecordNormalized[] = [];

        // (Object.keys(data) as (keyof typeof data)[]).forEach((key, index) => {
        //   // 👇️ name Bobby Hadz 0, country Chile 1
        //   console.log(key, data[key], index);
        //   menus[0]['path'] = data[key]['path']
        //   menus[0]['name'] = data[key]['title']
        // });
        const menus:RouteRecordNormalized[] = [];
        data.forEach((val, idx, array) => {
          console.log("menu data foreach");
          console.log(val, idx, array);
          const menuchildren:RouteRecordNormalized[] = [];
          val.children.forEach((cval, cidx, carray) => {
             menuchildren.push({name: cval.menuName, path: cval.path, meta: {order: cval.sort, locale: cval.menuName, icon: cval.icon, requiresAuth: true}})
          })
          if(val.menuName.length > 0)  {
            menus.push({name: val.menuName, path: val.path, meta: {order: val.sort, locale: val.menuName, icon: val.icon, requiresAuth: true}, children: menuchildren})
          }
          
        });
        

        
        this.serverMenu = menus;
        console.log("online menu");
        console.log(this.serverMenu);
        notifyInstance = Notification.success({
          id: 'menuNotice',
          content: 'success',
          closable: true,
        });
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        notifyInstance = Notification.error({
          id: 'menuNotice',
          content: 'error',
          closable: true,
        });
      }
    },
    clearServerMenu() {
      this.serverMenu = [];
    },
  },
});

export default useAppStore;
