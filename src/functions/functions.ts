import { IApplicant } from '../models/IApplicant';
export const filteredForTextApplicants = (
  array: IApplicant[],
  value: string
) => {
  if (!value) {
    return array;
  } else return array?.filter((item) => item.city.includes(value));
};
