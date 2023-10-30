import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
// import { ITestApplicant } from '../models/ITestApplicant';
import { IApplicant } from '../models/IApplicant';
export const applicantAPI = createApi({
  reducerPath: 'applicantAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://51.250.12.63/api/v1/' }),
  //  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:3000' }),
  endpoints: build => ({
    fetchAllApplicant: build.query<IApplicant[], string>({
      query: () => ({
        url: '/applicants',
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`
        },
      })
    }),
    fetchApplicantById: build.query<IApplicant, string>({
      query: id => ({ url: `/applicants/${id}` })
    })
  })
});
