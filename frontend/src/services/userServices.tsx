import axios from 'axios';
import { AllUser, userLoginResponse } from '../utils/types';

export const userLogin = async (email: string, password: string) => {
  const response = await axios.post<userLoginResponse>(
    'http://localhost:8080/login',
    { email, password },
  );
  return response.data;
};
export const getAllUsers = async (inputId: string | number) => {
  const response = await axios.get<AllUser>(
    `http://localhost:8080/admin/getUsers?id=${inputId}`,
  );
  return response;
};
