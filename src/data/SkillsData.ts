import { ISkillsData } from "../types/data";

export const skillsData: ISkillsData[] = [
  {
    type: "Backend",
    skills: [
      "Java",
      "Spring",
      "Spring Boot",
      "Typescript",
      "Javascript",
      "NodeJS",
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
    type: "FrontEnd",
    skills: [
      "ReactJS",
      "Typescript",
      "Javascript",
      "NodeJS Mocking",
      "HTML5",
      "CSS3",
      "Micro FrontEnds",
      "Material UI",
      "Jest Testing"
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
