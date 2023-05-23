import axios from 'axios';

type userLoginResponse = {
  errCode: number;
  errMessage: string;
  data?: any;
};

export const userLogin = async (email: string, password: string) => {
  const response = await axios.post<userLoginResponse>('http://localhost:8080/login', { email, password });
  return response.data;
};
