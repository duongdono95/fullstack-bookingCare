import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 5000,
});

export const apiRequest = async <T,>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await api(config);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
