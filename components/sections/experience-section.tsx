import { SectionWrapper } from "@/components/ui/section-wrapper"
import ExperienceCard from "@/components/ui/experience-card"
import type { Job } from "@/types/portfolio-types"

interface ExperienceSectionProps {
  jobs: Job[]
}

export default function ExperienceSection({ jobs }: ExperienceSectionProps) {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl font-bold mb-10 text-center relative inline-block mx-auto">
        Work Experience
        <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary"></span>
      </h2>
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <ExperienceCard key={job.title} job={job} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
