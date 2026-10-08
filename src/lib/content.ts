/** All site copy, links and images live here. */

import type { StaticImageData } from "next/image";
import awardCiic from "@/assets/award-ciic.jpg";
import awardKaggle from "@/assets/award-kaggle.jpg";
import awardSeaCicsic from "@/assets/award-sea-cicsic.jpg";
import careerMemoryShot from "@/assets/career-memory.png";
import mangroveShot from "@/assets/mangrove-guardian.png";
import studyhubShot from "@/assets/studyhub.png";

export const site = {
  name: "El Mouataz Benmanssour",
  title: "Full Stack Software Engineer / AI & Agentic Systems",
  description:
    "El Mouataz Benmanssour — Full Stack Software Engineer focused on AI & agentic systems. React and Next.js interfaces, Django and Laravel APIs, background workers, and LLM pipelines that return structured, dependable output.",
  // Set SITE_URL in the deployment environment (e.g. https://yourdomain.com).
  url:
    process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  location: "Based in Indonesia · Open to relocation",
};

export const links = {
  github: "https://github.com/moatazbenma",
  linkedin: "https://www.linkedin.com/in/el-mouataz-benmanssour/",
  // Served from public/cv.pdf; set to null to hide the download.
  cv: "/cv.pdf" as string | null,
  email: "el.mouataz_ti24@nusaputra.ac.id" as string | null,
};

export const navItems = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#awards", label: "Awards" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
] as const;

export const hero = {
  status: "OPEN TO SWE INTERNSHIPS",
  role: "Full Stack Software Engineer",
  focus: "AI & Agentic Systems",
  intro:
    "I build full-stack products and AI-powered systems — React and Next.js interfaces, Django and Laravel APIs, background workers, and LLM pipelines that return structured, dependable output.",
  photo: {
    alt: "El Mouataz Benmanssour receiving the Bronze Award at SEA-CICSIC 2026, Malaysia",
    caption: "Bronze Award — SEA-CICSIC 2026, Malaysia",
  },
  stats: [
    { href: "#experience", label: "NOW", value: "AI Agentic Engineer Intern, School.how" },
    { href: "#awards", label: "1ST PLACE", value: "CIIC 2026 · ASEAN-Indonesia" },
    { href: "#awards", label: "BRONZE AWARD", value: "SEA-CICSIC 2026 · Malaysia" },
    { href: "#education", label: "INFORMATICS ENG. · 2028", value: "GPA 3.80 / 4.00" },
  ],
};

export type DetailRow = { label: string; text: string; placeholder?: boolean };

export type ProjectLink = { label: string; href: string | null; placeholder?: string };

export type Project = {
  id: string;
  meta: string;
  title: string;
  summary: string;
  details: DetailRow[];
  tags: string[];
  links: ProjectLink[];
  /** Import an image from src/assets as `src` to replace the placeholder; it is shown uncropped. */
  screenshot: { caption: string; src?: StaticImageData; alt?: string };
};

export const architecture = [
  { name: "Client", lines: ["React 19 · TS", "Tailwind · Leaflet"] },
  { name: "API", lines: ["Django REST", "JWT · rate limits"] },
  { name: "Workers", lines: ["Celery", "Redis broker/cache"] },
  { name: "AI layer", lines: ["Gemma 3 12B", "Pydantic schemas"], accent: true },
  { name: "Storage", lines: ["PostgreSQL", "Cloudinary"] },
];

export const featuredProject: Project = {
  id: "mangrove-guardian",
  meta: "Environmental monitoring · Full stack · Multimodal AI",
  title: "Mangrove Guardian AI",
  summary:
    "A platform for mangrove monitoring and environmental reporting — field images go in, structured health assessments come out.",
  details: [
    {
      label: "PROBLEM",
      text: "Mangrove assessment and reporting is manual and slow to turn into usable data.",
    },
    {
      label: "BUILT",
      text: "Map-based platform where community members report mangrove damage with photos and locations, and organizations track restoration projects. An async multimodal pipeline (Gemma 3 12B) returns a health score, damage detection and risk level per report.",
    },
    {
      label: "DEPTH",
      text: "Schema-validated LLM output with retry/fallback · Celery background jobs · Redis caching and rate limiting · JWT auth with role-based access control · Excel export · Docker Compose with Nginx",
    },
  ],
  tags: ["React 19", "TypeScript", "Django REST", "PostgreSQL", "Celery", "Redis", "Docker", "Gemma 3", "Cloudinary"],
  links: [
    { label: "GitHub", href: "https://github.com/moatazbenma/Mangrove-Guardian-AI" },
    { label: "Live demo", href: "https://mangrove-guardian-ai.vercel.app" },
    { label: "Demo video", href: "https://youtu.be/aZBV_R53PRY" },
  ],
  screenshot: {
    caption: "landing page",
    src: mangroveShot,
    alt: "Mangrove Guardian AI landing page with the headline \u201cProtecting Mangroves with AI\u201d",
  },
};

/** Projects shown below the featured one, in order. */
export const projects: Project[] = [
  {
    id: "career-memory",
    meta: "PROJECT 02 · Career data · Full stack · ML / Local LLM",
    title: "AI Career Memory Assistant",
    summary:
      "Imports your GitHub repositories and analyzes them against target job descriptions to generate STAR-format resume bullets, interview questions and project summaries.",
    details: [
      { label: "AUTH", text: "GitHub OAuth, JWT sessions, provider tokens encrypted at rest with Fernet" },
      {
        label: "ASYNC",
        text: "Celery + Redis repository analysis off the request path, with task-status polling to keep the UI responsive",
      },
      {
        label: "AI",
        text: "scikit-learn career-path prediction from skills, experience and academic profile · local LLM integration",
      },
      {
        label: "CLIENT",
        text: "React 19, TypeScript, Vite and Tailwind CSS, with automatic JWT refresh via Axios interceptors",
      },
    ],
    tags: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Django REST", "PostgreSQL", "Celery", "Redis", "scikit-learn"],
    links: [{ label: "GitHub", href: "https://github.com/moatazbenma/AI-Career-Memory-Assistant" }],
    screenshot: {
      caption: "landing page",
      src: careerMemoryShot,
      alt: "AI Career Memory Assistant (CareerMatch AI) landing page with the headline “Land Your Dream Job with AI-Powered Analysis”",
    },
  },
  {
    id: "studyhub",
    meta: "PROJECT 03 · Education · Full stack",
    title: "StudyHub",
    summary:
      "An English learning platform with study materials, flashcards, learning goals, progress tracking and class booking.",
    details: [
      {
        label: "LEARN",
        text: "Grammar lessons by level (A1–C2), spaced-repetition flashcards, learning goals and progress tracking",
      },
      {
        label: "PRACTICE",
        text: "Grammar, spelling and punctuation correction via the LanguageTool API, plus an English practice chat",
      },
      { label: "ROLES", text: "Separate student and administrator workflows to manage learning content and class bookings" },
      { label: "API", text: "Django REST Framework with JWT authentication, PostgreSQL, served with Gunicorn" },
    ],
    tags: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Django REST", "PostgreSQL", "JWT", "LanguageTool API"],
    links: [
      { label: "GitHub", href: "https://github.com/moatazbenma/studyhub-full" },
      { label: "Live demo", href: "https://studyhub-full.vercel.app" },
    ],
    screenshot: {
      caption: "landing page",
      src: studyhubShot,
      alt: "StudyHub landing page with the headline “Master Your Learning Journey”",
    },
  },
];

export type Job = {
  period: string;
  company: string;
  role: string;
  location: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    period: "Jul 2026 — Present",
    company: "School.how",
    role: "Full Stack AI Agentic Engineer Intern",
    location: "Remote · United Kingdom",
    summary:
      "AI-powered education technology company building learning, tutoring and course-generation products. Full-stack engineering on production systems in an AI-assisted, multi-agent development workflow.",
    points: [
      "Develop full-stack features across a Next.js / React / TypeScript frontend and a Laravel API.",
      "Contribute to an agentic course-production pipeline: source analysis, course generation, automated validation, QA and export.",
      "Test and validate AI-generated content, tutor behavior, retrieval accuracy and safety guardrails.",
      "Develop with Claude Code and Codex, running parallel agents across Git worktrees.",
      "Ship through a Jira- and Git-based team process with code review and structured QA.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Laravel", "Claude Code", "Codex", "Jira"],
  },
  {
    period: "Oct 2025 — Feb 2026",
    company: "Joki Proyek",
    role: "Full Stack Software Engineer Intern",
    location: "Jakarta, Indonesia",
    summary: "Software development company providing digital solutions and custom web applications.",
    points: [
      "Developed and maintained a multi-service platform with Docker, PHP (Laravel) and modern JavaScript frameworks.",
      "Implemented features and fixed bugs with cross-functional teams, working with CI/CD pipelines, containers and REST APIs.",
      "Designed UI/UX for project requirements and wrote technical documentation and reports.",
    ],
    tags: ["Laravel", "PHP", "JavaScript", "Docker", "CI/CD", "REST APIs"],
  },
  {
    period: "Jan 2024 — Oct 2024",
    company: "Newzar",
    role: "Full Stack Developer Intern",
    location: "Tangier, Morocco",
    summary: "Coffee business providing coffee products and related customer services.",
    points: [
      "Developed and maintained full-stack applications with Django/Flask, React/Node.js and SQL/NoSQL databases.",
      "Designed responsive user interfaces and improved user experience.",
      "Worked with the team to align technical solutions with business needs.",
    ],
    tags: ["Django", "Flask", "React", "Node.js", "SQL", "NoSQL"],
  },
];

export type Award = {
  rank: string;
  suffix: string;
  badge: string;
  tone: "gold" | "bronze" | "accent";
  event: string;
  title: string;
  text: string;
  /** `position` is a CSS object-position that keeps the subject in frame. */
  photo: { src: StaticImageData; alt: string; position: string };
};

export const awards: Award[] = [
  {
    rank: "1",
    suffix: "st",
    badge: "01",
    tone: "gold",
    event: "CIIC 2026 · ASEAN-Indonesia Preliminary Round",
    title: "1st Place Winner",
    text: "Led the team to first place, qualifying for the Southeast Asia division.",
    photo: {
      src: awardCiic,
      alt: "El Mouataz Benmanssour on stage with other first-prize winners at the CIIC 2026 First Prize Award Ceremony",
      position: "50% 50%",
    },
  },
  {
    rank: "3",
    suffix: "rd",
    badge: "03",
    tone: "bronze",
    event: "SEA-CICSIC 2026 · Southeast Asia Division · Malaysia",
    title: "Bronze Award · RM 3,000",
    text: "Team lead on an AI-powered smart rehabilitation solution for hand recovery.",
    photo: {
      src: awardSeaCicsic,
      alt: "El Mouataz Benmanssour receiving the RM 3,000 Bronze Award at SEA-CICSIC 2026, Malaysia",
      position: "50% 45%",
    },
  },
  {
    rank: "Host",
    suffix: "",
    badge: "KG",
    tone: "accent",
    event: "Kaggle · Jul 2026",
    title: "Community Competition Host Award",
    text: "For organizing and hosting the Build with Gemma AI Hackathon 2026 through Kaggle Community Hackathons: planning, judging and participant engagement, with the Gemma Community Team, HMTI and Nusa Putra University.",
    photo: {
      src: awardKaggle,
      alt: "El Mouataz Benmanssour speaking at the podium during the Build with Gemma AI Hackathon 2026 at Nusa Putra University",
      position: "50% 25%",
    },
  },
];

export type SkillGroup = { label: string; items: string[]; accent?: boolean };

export const skillGroups: SkillGroup[] = [
  {
    label: "AI",
    accent: true,
    items: [
      "LLM applications",
      "Generative & multimodal AI",
      "Agents & agentic workflows",
      "Local LLMs",
      "AI-assisted development",
      "n8n automation",
    ],
  },
  { label: "BACKEND", items: ["Django", "Django REST Framework", "Laravel", "REST API design"] },
  { label: "FRONTEND", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "DATA & INFRA", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Celery", "Docker"] },
  { label: "LANGUAGES", items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL", "C"] },
  { label: "TOOLING", items: ["Git & GitHub", "Linux", "CI/CD", "Claude Code", "Codex", "Jira"] },
];

export const education = [
  {
    period: "2024 — 2028 (expected)",
    school: "Universitas Nusa Putra",
    degree: "B.Eng. Informatics Engineering · Sukabumi, Indonesia",
    gpa: "3.80 / 4.00",
    primary: true,
  },
  {
    period: "2022 — 2024",
    school: "Université Abdelmalek Essaâdi",
    degree: "Economics · Morocco",
  },
];

export const contact = {
  heading: "Looking for software engineering internships in Europe and Asia.",
};
