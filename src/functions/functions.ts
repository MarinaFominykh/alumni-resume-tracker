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
export const filteredForActivityApplicants =  (array: IApplicant[], value: number, ) => {
 if(value <= 4) {
  return array?.filter((item) => item.activity <= 4)
 } else if(value >= 5 && value <= 9) {
  return array?.filter((item) => item.activity >=5 && item.activity <=9)
 }
 else if(value > 10) {
  return array?.filter((item) => item.activity > 10)
 }
 else return array;
}
