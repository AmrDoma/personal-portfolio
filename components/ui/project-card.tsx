import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/types/portfolio-types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-t-4 border-t-transparent hover:border-t-primary/70">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video rounded-md overflow-hidden mb-4 relative">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <p className="text-muted-foreground mb-4">{project.content}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="transition-colors duration-300 hover:bg-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild className="relative overflow-hidden group">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <span className="relative z-10">
              <Github className="mr-2 h-4 w-4" />
              Code
            </span>
            <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Link>
        </Button>
        <Button size="sm" asChild className="relative overflow-hidden group">
          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
            <span className="relative z-10">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </span>
            <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
