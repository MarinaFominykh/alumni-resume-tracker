import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IVacancy } from '../models/IVacancy';
export const vacancyAPI = createApi({
  reducerPath: 'vacancytAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://51.250.12.63/api/v1/' }),
  tagTypes: ['Vacancy'],
  endpoints: build => ({
    fetchAllVacancy: build.query<IVacancy[], string>({
      query: () => ({
        url: '/vacancies',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      providesTags: () => ['Vacancy']
    }),
    createVacancy: build.mutation<IVacancy, IVacancy>({
      query: vacancy => ({
        url: '/vacancies',
        method: 'POST',
        body: vacancy
      }),
      invalidatesTags: ['Vacancy']
    })
  })
});
