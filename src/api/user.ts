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
  return axios.post<LoginRes>('/api/v1/logout');
}

export function getUserInfo() {
  return axios.get<UserState>('/api/v1/getinfo');
}

export function getMenuList() {
  return axios.get<RouteRecordNormalized[]>('/api/v1/menu');
}
