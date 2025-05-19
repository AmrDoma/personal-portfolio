import type { ReactNode } from "react"

export interface NavItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: ReactNode
  text?: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  image: string
  content: string
  tech: string[]
  github: string
  demo: string
}

export interface Job {
  title: string
  company: string
  period: string
  responsibilities: string[]
}
