"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <AboutImage />
        <AboutContent />
      </div>
    </SectionWrapper>
  )
}

function AboutImage() {
  return (
    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="/placeholder.svg?height=400&width=600"
        alt="About John Doe"
        className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-[1.02]"
      />
    </motion.div>
  )
}

function AboutContent() {
  return (
    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 relative">
        About Me
        <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary"></span>
      </h2>
      <p className="text-muted-foreground mb-4">
        I'm a passionate Full Stack Developer with 5+ years of experience building web applications using modern
        technologies. I specialize in JavaScript, TypeScript, React, Node.js, and Next.js.
      </p>
      <p className="text-muted-foreground mb-4">
        My journey in software development began during college where I built my first web application. Since then, I've
        worked with startups and established companies to create scalable and user-friendly applications.
      </p>
      <p className="text-muted-foreground mb-6">
        When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects. I'm
        always eager to learn new technologies and improve my skills.
      </p>
      <Button asChild className="relative overflow-hidden group">
        <Link href="#contact">
          <span className="relative z-10">Let's work together</span>
          <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </Link>
      </Button>
    </motion.div>
  )
}
