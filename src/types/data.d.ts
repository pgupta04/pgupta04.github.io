export interface ISummaryData{
  detail: string;
  bullets: string[];
};

export interface IHeaderData{
  name: string;
  designation?: string;
  email: string;
  phone: string;
  linkedInURL?: string;
  githubURL?: string;
};

type TSkillType = 'FrontEnd'| 'Backend' |'Programming'| 'Professional' | 'Personnal' | 'Technical' | 'Cloud' | 'Leadership' | 'Management';
export interface ISkillsData{
  type: TSkillType;
  skills: string[];
}

export interface IWorkExperience{
  company:string;
  title?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  responsibilities?: string[];
}