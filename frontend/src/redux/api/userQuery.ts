import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User, AllUser } from "../../utils/types"
// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User | AllUser, string>({
      query: (id) => `/admin/getUsers?id=${id}`,
    }),
  }),
})

export const { useGetAllUsersQuery } = adminApi