"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import ProjectCard from "@/components/ui/project-card"
import type { Project } from "@/types/portfolio-types"

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center relative inline-block mx-auto">
        Featured Projects
        <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary"></span>
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
      <GithubLink />
    </SectionWrapper>
  )
}

function GithubLink() {
  return (
    <motion.div
      className="text-center mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Button variant="outline" asChild className="relative overflow-hidden group">
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
          <span className="relative z-10">
            <Github className="mr-2 h-4 w-4" />
            View more on GitHub
          </span>
          <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </Link>
      </Button>
    </motion.div>
  )
}
