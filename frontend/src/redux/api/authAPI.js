import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = process.env.API_BASE_URL;

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: baseUrl, 
//   }),
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: '/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//   }),
// });

// TODO use above call to remove mockdata
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: async () => {
    return {
      data: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNzMyMTMzODQ5fQ.2J3A7syG1CUS_XQt0xRtHG5mGkoSAN4c1fwro78HWvo',
        user: {
          id: 1,
          username: 'admin',
          email: 'admin@yopmail.com',
        },
      },
    };
  },
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        console.log('Mock login with credentials:', credentials);
        return {};
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
