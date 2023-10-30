import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IApplicant } from '../../models/IApplicant';

export interface filterForVacancyState {
  vacName: string;
 filteredForVacancyApplicants: IApplicant[];
}
const initialState: filterForVacancyState = {
  vacName: '',
 filteredForVacancyApplicants: [],
};

export const filterForVacancySlice = createSlice({
  name: 'filterForVacancy',
  initialState,
  reducers: {
    vacNameValue: (state, action: PayloadAction<string>) => {
      state.vacName = action.payload;
    },
   
    filteredApplicants: (state, action: PayloadAction<IApplicant[]>) => {
      state.filteredForVacancyApplicants = action.payload;
    },
  },
});
export const {vacNameValue} = filterForVacancySlice.actions;
export default filterForVacancySlice.reducer;
