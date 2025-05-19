import { Github, Linkedin, Mail } from "lucide-react"
import type { NavItem, SocialLink, SkillCategory, Project, Job } from "@/types/portfolio-types"

// Navigation Links
export const navLinks: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <Github className="h-5 w-5" />,
    text: "github.com/johndoe",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="h-5 w-5" />,
    text: "linkedin.com/in/johndoe",
  },
  {
    name: "Email",
    href: "mailto:john@example.com",
    icon: <Mail className="h-5 w-5" />,
    text: "john@example.com",
  },
]

// Skills Data
export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Technologies I use for frontend development",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    title: "Backend",
    description: "Technologies I use for backend development",
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST API", "MongoDB", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    title: "Tools & Others",
    description: "Other technologies and tools I'm familiar with",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Jest", "Cypress", "AWS", "Vercel", "Figma"],
  },
]

// Projects Data
export const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution",
    image: "/placeholder.svg?height=300&width=600",
    content:
      "Built a complete e-commerce platform with product catalog, shopping cart, user authentication, and payment processing using Next.js, Tailwind CSS, and Stripe.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager",
    image: "/placeholder.svg?height=300&width=600",
    content:
      "Developed a task management application with real-time collaboration features, drag-and-drop interface, and team workspaces using React and Firebase.",
    tech: ["React", "Firebase", "Redux", "Styled Components", "DnD Kit"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered writing assistant",
    image: "/placeholder.svg?height=300&width=600",
    content:
      "Created an AI-powered content generation tool that helps users write blog posts, social media content, and marketing copy using OpenAI's GPT models.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Finance Dashboard",
    description: "Data visualization for financial metrics",
    image: "/placeholder.svg?height=300&width=600",
    content:
      "Built an interactive finance dashboard with real-time data visualization, customizable widgets, and comprehensive reporting features using React and D3.js.",
    tech: ["React", "D3.js", "Material UI", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

// Experience Data
export const experienceData: Job[] = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    responsibilities: [
      "Led the frontend development team of 5 engineers, implementing best practices and code standards.",
      "Architected and developed a new customer portal using Next.js, resulting in a 40% increase in user engagement.",
      "Implemented CI/CD pipelines that reduced deployment time by 60%.",
      "Mentored junior developers and conducted regular code reviews to ensure code quality.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "InnovateSoft",
    period: "2018 - 2021",
    responsibilities: [
      "Developed and maintained multiple client projects using React, Node.js, and MongoDB.",
      "Built RESTful APIs and GraphQL endpoints for various web applications.",
      "Collaborated with UX/UI designers to implement responsive and accessible interfaces.",
      "Optimized application performance, reducing load times by 35%.",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "WebSolutions Co.",
    period: "2016 - 2018",
    responsibilities: [
      "Assisted in the development of client websites using HTML, CSS, JavaScript, and jQuery.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Collaborated with the design team to convert mockups into functional web pages.",
      "Participated in code reviews and team meetings to improve development processes.",
    ],
  },
]
