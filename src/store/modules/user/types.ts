export type RoleType = '' | '*' | 'admin' | 'user';
export type ButtonsType = '' | '*';
export type PermissionsType = '' | '*';
export interface UserState {
  name?: string;
  avatar?: string;
  // job?: string;
  // organization?: string;
  // location?: string;
  // email?: string;
  introduction?: string;
  // personalWebsite?: string;
  // jobName?: string;
  // organizationName?: string;
  // locationName?: string;
  // phone?: string;
  // registrationDate?: string;
  // accountId?: string;
  // certification?: number;
  roles: RoleType;
  permissions: PermissionsType;
  deptId?: number;
  buttons: ButtonsType;
  userName?: string;
}
