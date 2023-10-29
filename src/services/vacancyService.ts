import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IVacancy } from '../models/IVacancy';
export const vacancyAPI = createApi({
    reducerPath: 'vacancytAPI',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/'}),
    tagTypes: ['Vacancy'],
    endpoints: (build) => ({
      fetchAllVacancy: build.query<IVacancy[], string>({
        query: () => ({
            url: '/vacansies',
          
        }),
        providesTags: () => ['Vacancy']
      }),
      createVacancy: build.mutation<IVacancy, IVacancy>({
         query: (vacancy) => ({
            url: '/vacansies',
            method: 'POST',
            body: vacancy
          
        }),
        invalidatesTags: ['Vacancy'],
      })
    })
})
