import axios from '../axios';

export const handleUserLogin = (email: string, password: string) => {
  console.log(handleUserLogin);
  return axios.post('/login', { email, password });
};
