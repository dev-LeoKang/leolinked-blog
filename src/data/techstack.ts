export type TechItem = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export const techstack: TechItem[] = [
  { name: "Java / Spring", level: 5 },
  { name: "AWS (S3, CloudFront, IAM)", level: 4 },
  { name: "SQL (PostgreSQL, MySQL)", level: 4 },
  { name: "Docker", level: 3 },
];