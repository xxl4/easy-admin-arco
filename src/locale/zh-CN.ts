import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';

import localeMonitor from '@/views/dashboard/monitor/locale/zh-CN';

import localeSearchTable from '@/views/list/search-table/locale/zh-CN';
import localeCardList from '@/views/list/card/locale/zh-CN';

import localeStepForm from '@/views/form/step/locale/zh-CN';
import localeGroupForm from '@/views/form/group/locale/zh-CN';

import localeBasicProfile from '@/views/profile/basic/locale/zh-CN';

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/zh-CN';
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/zh-CN';

import localeSuccess from '@/views/result/success/locale/zh-CN';
import localeError from '@/views/result/error/locale/zh-CN';

import locale403 from '@/views/exception/403/locale/zh-CN';
import locale404 from '@/views/exception/404/locale/zh-CN';
import locale500 from '@/views/exception/500/locale/zh-CN';

import localeUserInfo from '@/views/user/info/locale/zh-CN';
import localeUserSetting from '@/views/user/setting/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',

  'menu.admin': '仪表盘',
  'menu.admin.workplace': '工作台-服务端',

  'job:sysJob:list': '队列列表',
  'job:sysJob:query': '队列',
  'job:sysJob:add': '队列添加',
  'job:sysJob:edit': '队列编辑',
  'job:sysJob:remove': '队列删除',
  'sysTools:serverMonitor:list': '监控列表',
  'admin:sysApi:list': 'API列表',
  'admin:sysConfigSet:list': 'Config Set List',
  'admin:sysUser:list': '用户列表',
  'admin:sysRole:list': '角色列表',
  'admin:sysMenu:list': '菜单列表',
  'admin:sysDept:list': 'Dept List',
  'admin:sysPost:list': 'Post List',
  'admin:sysDictType:list': 'Dict List',
  'admin:sysConfig:list': 'Config List',
  'admin:sysDictData:list': 'Dict Data List',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  'Admin': '系统管理',
  'Schedule': '定时任务',
  'SysTools': '系统工具',
  'Tools': '工具',
  'SysUserManage':'用户',
  'SysMenuManage':'菜单',
  'SysRoleManage':'角色',
  'SysDeptManage':'SysDeptManage',
  'SysPostManage':'SysPostManage',
  'Dict':'Dict',
  'SysDictDataManage':'SysDictDataManage',
  'Swagger':'Swagger',
  'SysConfigManage':'SysConfigManage',
  'Log':'日志',
  'SysLoginLogManage':'系统登录日志',
  'OperLog':'操作日志',
  'Gen':'Gen',
  'EditTable':'EditTable',
  'Build':'Build',
  'ServerMonitor':'ServerMonitor',
  'ScheduleManage':'ScheduleManage',
  'sys_job':'系统JOB',
  'JobLog':'JobLog',
  'SysApiManage':'SysApiManage',
  'SysConigSeft':'SysConfigSet',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,

  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  ...localeStepForm,
  ...localeGroupForm,
  ...localeBasicProfile,
  ...localeDataAnalysis,
  ...localeMultiDAnalysis,
  ...localeSuccess,
  ...localeError,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
};
