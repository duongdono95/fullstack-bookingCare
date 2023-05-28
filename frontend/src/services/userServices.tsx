import axios from 'axios';
import { userLoginResponse } from '../utils/types';

export const userLogin = async (email: string, password: string) => {
  const response = await axios.post<userLoginResponse>('http://localhost:8080/login', {
    email,
    password,
  });
  return response.data;
};
