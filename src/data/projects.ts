export type Project = {
  name: string;
  description: string;
  tech: string[];
  url: string;
};

export const projects: Project[] = [
  {
    name: "Portfolio Blog on AWS",
    description:
      "CloudFront + S3 + Route53 기반의 정적 배포. GitHub Actions로 CI/CD 구성.",
    tech: ["AWS", "CloudFront", "S3", "Route53", "GitHub Actions"],
    url: "https://github.com/dev-LeoKang/leolinked-blog",
  },
  {
    name: "Schedule Management SaaS (Concept)",
    description:
      "현장 스케줄/배차/알림을 통합 관리하는 SaaS 기획 및 아키텍처 설계.",
    tech: ["Spring", "PostgreSQL", "Redis", "AWS"],
    url: "https://github.com/dev-LeoKang",
  },
];