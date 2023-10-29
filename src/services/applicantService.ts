import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
// import { ITestApplicant } from '../models/ITestApplicant';
import { IApplicant } from '../models/IApplicant';
export const applicantAPI = createApi({
    reducerPath: 'applicantAPI',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000'}),
    endpoints: (build) => ({
      fetchAllApplicant: build.query<IApplicant[], string>({
        query: () => ({
            url: '/applicant',
            
        })
      })
    })
})
