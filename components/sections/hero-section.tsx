"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import TypewriterComponent from "typewriter-effect"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import type { SocialLink } from "@/types/portfolio-types"

interface HeroSectionProps {
  socialLinks: SocialLink[]
}

export default function HeroSection({ socialLinks }: HeroSectionProps) {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <ProfileImage />
      <Name />
      <JobTitle />
      <Description />
      <CTAButtons />
      <SocialButtons socialLinks={socialLinks} />
      <ScrollIndicator />
    </section>
  )
}

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-primary/20 group"
    >
      <img
        src="/placeholder.svg?height=128&width=128"
        alt="John Doe"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  )
}

function Name() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
    >
      John Doe
    </motion.h1>
  )
}

function JobTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-xl md:text-2xl text-muted-foreground mb-6 h-12"
    >
      <TypewriterComponent
        options={{
          strings: ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Innovator"],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
        }}
      />
    </motion.div>
  )
}

function Description() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="max-w-[42rem] text-muted-foreground mb-8 leading-normal"
    >
      I build accessible, responsive, and performant web applications with modern technologies. Passionate about
      creating intuitive user experiences and clean, maintainable code.
    </motion.p>
  )
}

function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex gap-4"
    >
      <Button asChild className="relative overflow-hidden group">
        <Link href="#contact">
          <span className="relative z-10">Get in touch</span>
          <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </Link>
      </Button>
      <Button variant="outline" asChild className="relative overflow-hidden group">
        <Link href="#projects">
          <span className="relative z-10">View my work</span>
          <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </Link>
      </Button>
    </motion.div>
  )
}

function SocialButtons({ socialLinks }: { socialLinks: SocialLink[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex mt-8 gap-4"
    >
      {socialLinks.map((social) => (
        <Button key={social.name} variant="ghost" size="icon" asChild className="relative overflow-hidden group">
          <Link href={social.href} target="_blank" rel="noopener noreferrer">
            <span className="relative z-10">{social.icon}</span>
            <span className="absolute inset-0 bg-primary/10 transform scale-0 rounded-full group-hover:scale-100 transition-transform duration-300"></span>
            <span className="sr-only">{social.name}</span>
          </Link>
        </Button>
      ))}
    </motion.div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block"
    >
      <Link href="#about">
        <Button variant="ghost" size="icon">
          <ArrowDown className="h-5 w-5" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </Link>
    </motion.div>
  )
}
