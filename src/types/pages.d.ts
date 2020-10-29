import {
  ISummaryData,
  IHeaderData,
  ISkillsData,
  IWorkExperience,
} from "./data";

export interface ISummaryProps extends ISummaryData {}

export interface IHeaderProps extends IHeaderData {}

export interface ISkillsProps {
  skillGroup: ISkillsData[];
}

export interface IWorkExperienceProps {
  label: string;
  workExperiences: IWorkExperience[];
}
