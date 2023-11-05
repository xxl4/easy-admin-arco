import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
  code:     string;
  uuid:     string;
  rememberMe:boolean;
}

export interface LoginRes {
  token: string;
  code: string;
  currentAuthority: string;
  success: boolean;
  expire: string
}
export function login(data: LoginData) {
  return axios.post<LoginRes>('/api/v1/login', data);
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
