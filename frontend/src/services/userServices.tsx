import axios from 'axios';
import { User, userLoginResponse } from '../utils/types';
import { http } from '../utils/http';
import { responseFetchedUser } from './../utils/types';

export const userLogin = async (email: string, password: string) => {
  const response = http.post<userLoginResponse>('/login', {
    email,
    password,
  });
  return (await response).data;
};
export const getUsers = async (id: string | number) => {
  const response = http.get<responseFetchedUser>('/admin/getUsers', {
    params: { id },
  });
  return (await response).data;
};

export const createUser = async (userData: User) => {
  const response = http.post<responseFetchedUser>('/admin/addNewUser', userData);
  return (await response).data;
};

export const editUser = async (userData: User) => {
  const response = http.post<responseFetchedUser>('/admin/editUser', userData);
  return (await response).data;
};
