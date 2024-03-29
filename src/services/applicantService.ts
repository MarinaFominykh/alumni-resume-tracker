import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
// import { ITestApplicant } from '../models/ITestApplicant';
import { IApplicant } from '../models/IApplicant';
export const applicantAPI = createApi({
  reducerPath: 'applicantAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://51.250.12.63/api/v1' }),
 
  endpoints: build => ({
    fetchAllApplicant: build.query<IApplicant[], string>({
      query: () => ({
        url: '/applicants',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }),
    fetchApplicantById: build.query<IApplicant, string>({
      query: id => ({ url: `/applicants/${id}` })
    })
  })
});
