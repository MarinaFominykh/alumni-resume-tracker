export interface IApplicant {
id: 0,
first_name: string,
last_name: string,
city: string,
country: string,
about_me: string,
phone: string,
email: string,
telegram: string,
specialization: {
name: string,
position: string
},
experience: number,
activity: number,
photo: string,
skills: [
string
],
resume_pdf: string,
resume_url: string,
portfolio_url: string,
is_liked: boolean
resume_domain: string
}

// {
//   id: string ;
//   photo: string ;
//   first_name: string;
//   last_name: string;
//   is_Liked: boolean;
//   specialization: { name?: string };
//   city: string;
//   country: string;
//   phone?: string;
//   email?: string;
//   telegram?: string;
//   resume_pdf?: string;
//   resume_url?: string;
//   resume_domain?: string;
//   pageName?: string;
//   portfolio_url?: string;
//   experience: number;
//   activity: number;
//   about_me: string;
//   skills: string[];
// }

