"use client"

import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type ProjectItemProps = {
  project: {
    title: string
    description: string
    technologies: string[]
    image: string
    links: {
      github?: string
      githubWeb?: string
      githubMobile?: string
      demo?: string
    }
  }
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full dark:bg-slate-800 dark:border-slate-700">
      <CardHeader className="flex-shrink-0">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-lg flex-1 min-w-0 dark:text-slate-100">
            {project.title}
          </CardTitle>
          <div className="flex gap-1 flex-shrink-0">
            {project.links.github && (
              <Button variant="ghost" size="sm" asChild className="p-2">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.links.githubWeb && project.links.githubMobile && (
              <>
                <Button variant="ghost" size="sm" asChild className="p-2">
                  <a href={project.links.githubWeb} target="_blank" rel="noopener noreferrer" title="Web Repository">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="p-2">
                  <a href={project.links.githubMobile} target="_blank" rel="noopener noreferrer" title="Mobile Repository">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </>
            )}
            {project.links.demo && (
              <Button variant="ghost" size="sm" asChild className="p-2">
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="border-b border-slate-200 mt-3"></div>
        <CardDescription className="text-left text-sm mt-2 dark:text-slate-300">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          <div className="aspect-video relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
