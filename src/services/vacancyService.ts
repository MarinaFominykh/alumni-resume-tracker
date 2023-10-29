import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IVacancy } from '../models/IVacancy';
export const vacancyAPI = createApi({
    reducerPath: 'vacancytAPI',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/'}),
    endpoints: (build) => ({
      fetchAllVacancy: build.query<IVacancy[], string>({
        query: () => ({
            url: '/vacansies',
          
        })
      })
    })
})
