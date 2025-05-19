"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/layout/layout"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import ExperienceSection from "@/components/sections/experience-section"
import ContactSection from "@/components/sections/contact-section"
import ParticleBackground from "@/components/animations/particle-background"
import { skillsData, projectsData, experienceData, socialLinks } from "@/data/portfolio-data"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  // Ensure theme is only accessed client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <ParticleBackground />
        <Layout socialLinks={socialLinks}>
          <HeroSection socialLinks={socialLinks} />
          <AboutSection />
          <SkillsSection skills={skillsData} />
          <ProjectsSection projects={projectsData} />
          <ExperienceSection jobs={experienceData} />
          <ContactSection socialLinks={socialLinks} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}
