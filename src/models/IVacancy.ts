export interface IVacancy {
  id?: number;
  company_name?: string;
  name?: string;
  wage_min?: number;
  wage_max?: number;
  wage_currency?: string;
  description?: string;
  requirements?: string;
  experience_min?: number;
  experience_max?: number;
  skills?: string[];
  department?: string;
  employment_type?: string;
  responsibilities?: string;
  benefits?: string;
  city?: string;
  level?: string;
  workplace?: string;
  sx?: object;
}

// export interface IVacancy {
//   id: string;
//   vacancy_name: string;
//   place: string;
//   specialization: string;
//   city: string;
//   experience: number;
//   date: string;
//   format?: string
// }

// export interface IVacancy {
//   id: string,
//   city: string,
//   companyName: string,
//   conditions: string,
//   contract: string,
//   currency: string,
// departmentName: string,
// description: string,
// experienceMax:number,
// experienceMin: number,
// format: string,
// level: string,
// requirements: string,
// responsibilities:string,
// salaryMax: number,
// salaryMin: number,
// skills: string[],
// vacName:string,

// }
