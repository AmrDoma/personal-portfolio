"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import type { SkillCategory } from "@/types/portfolio-types"

interface SkillsSectionProps {
  skills: SkillCategory[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
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
    <SectionWrapper id="skills">
      <h2 className="text-3xl font-bold mb-10 text-center relative inline-block mx-auto">
        My Skills
        <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary"></span>
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((category) => (
          <SkillCard key={category.title} category={category} item={item} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

function SkillCard({ category, item }: { category: SkillCategory; item: any }) {
  return (
    <motion.div variants={item}>
      <Card className="h-full border-t-4 border-t-primary/70 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>{category.title}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <Badge key={skill} className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
              {skill}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
