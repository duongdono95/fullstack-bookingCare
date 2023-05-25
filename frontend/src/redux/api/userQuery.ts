import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { responseFetchedUser } from '../../utils/types';
// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<responseFetchedUser, string>({
      query: (id) => `/admin/getUsers?id=${id}`,
      // transformResponse: (response: { data: responseFetchedUser }, meta, arg) =>
      //   response.data,
    }),
  }),
});

export const { useGetAllUsersQuery } = adminApi;
