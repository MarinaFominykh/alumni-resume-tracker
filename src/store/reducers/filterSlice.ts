import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IApplicant } from '../../models/IApplicant';

export interface filterState {
  city: string;
  level: string;
  activity: number;
  filteredApplicants: IApplicant[];
}
const initialState: filterState = {
  city: '',
  level: '',
  activity: 0,
  filteredApplicants: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    cityValue: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    levelValue: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
    activityValue: (state, action: PayloadAction<number>) => {
      state.activity = action.payload;
    },
    filteredApplicants: (state, action: PayloadAction<IApplicant[]>) => {
      state.filteredApplicants = action.payload;
    },
  },
});
export const {cityValue, levelValue, activityValue, filteredApplicants} = filterSlice.actions;
export default filterSlice.reducer;
