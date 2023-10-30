export interface IApplicant {
  id: string ;
  photo: string ;
  first_name: string;
  last_name: string;
  is_Liked: boolean;
  specialization: { name?: string };
  city: string;
  country: string;
  phone?: string;
  email?: string;
  telegram?: string;
  resume_pdf?: string;
  resume_url?: string;
  resume_domain?: string;
  pageName?: string;
  portfolio_url?: string;
  experience: number;
  activity: number;
  about_me: string;
  skills: string[];
}
