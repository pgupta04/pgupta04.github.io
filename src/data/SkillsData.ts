import { ISkillsData } from "../types/data";

export const skillsData: ISkillsData[] = [
  {
    type: "Technical",
    skills: [
      "Java",
      "Typescript",
      "Javascript",
      "Spring",
      "NodeJS",
      "React",
      "Tomcat",
      "Jenkins",
      "Jira",
      "Azure Devops",
      "Azure Pipelines",
      "GitLabs",
      "Oracle",
      "Postgres",
      "CI/CD",
      "Docker"
    ],
  },
  {
    type: "Cloud",
    skills: [
      "AWS Cognito", 
      "Lambda", 
      "API Gateway", 
      "Amplify", 
      "AppSync (GraphQL)", 
      "DynamoDB", 
      "ElasticSearch", 
      "IAM", 
      "Cloud Formation", 
      "SQS", 
      "SNS"],
  },
  {
    type: "Leadership",
    skills: ["Listener", "Communicator", "Mentor", "Leader"],
  },
  {
    type: "Management",
    skills: ["Autonomy", "Team Motivation", "Delegation", "Coaching", "Team Building"],
  },
];

export default skillsData;
