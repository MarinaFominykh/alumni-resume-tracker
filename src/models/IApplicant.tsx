export interface IApplicant {
  id: string;
  photo: string;
  name: string;
  isLike: boolean;
  specialization: string;
  city: string;
  country: string;
  contacts: {
    phone?: string;
    email?: string;
    telegram?: string;
  };
  resume: {
    resume_pdf?: string;
    resume_url?: string;
  };
  portfolio: {
    pageName?: string;
    portfolio_url?: string;
  };
  experience: number;
  activity: number;
  about_me: string;
  skills: string[];
}
