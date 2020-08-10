import { ISummaryData, IHeaderData, ISkillsData } from "./data";

export interface ISummaryProps extends ISummaryData{
}

export interface IHeaderProps extends IHeaderData{
}

export interface ISkillsProps {
  skillGroup: ISkillsData[]
}