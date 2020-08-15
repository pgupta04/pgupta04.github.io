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

type TSkillType = 'Professional' | 'Personnal' | 'Technical';
export interface ISkillsData{
  type: TSkillType;
  skills: string[];
}

export interface IWorkExperience{
  
}