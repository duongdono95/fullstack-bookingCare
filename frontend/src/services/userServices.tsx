import { AxiosRequestConfig } from 'axios';
import { apiRequest } from '../axios';

type userLoginResponse = {
  errCode: number;
  errMessage: string;
  data?: any;
};

export const userLogin = async (userEmail: string, userPassword: string): Promise<userLoginResponse> => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/login',
  };
  return await apiRequest<userLoginResponse>(config);
};
