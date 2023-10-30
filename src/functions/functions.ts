import { IApplicant } from '../models/IApplicant';
export const filteredForCityApplicants = (array: IApplicant[], value: string,) => {
  if (value === '') {
    return array;
  } else return array?.filter((item) => item.city.includes(value));
};

export const filteredForLevelApplicants = (array: IApplicant[], value: string, ) => {

  if (value === 'Junior') {
    return array?.filter((item) => item.experience < 2);
  }

  else if(value === 'Middle') {
    return array?.filter((item) => item.experience >= 2 && item.experience <= 3)
  }
  else if(value === 'Senior') {
    return array?.filter((item) => item.experience > 3)
  }
  else return array;
};
