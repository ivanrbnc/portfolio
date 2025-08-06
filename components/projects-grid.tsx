"use client"

import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const allProjects = [
  {
    title: "Apartment Listings Price Prediction",
    description:
      "A machine learning project that predicts apartment prices based on various features such as location, size, and amenities.",
    technologies: ["Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Scipy"],
    image: "/projects/price-prediction.png",
    links: {
      demo: "https://drive.google.com/file/d/1V-7bIGraxySAB-mVBlAiRtxx5SczSr_2/view?usp=drive_link",
    },
  },
  {
    title: "Gender Age Emotion Facial Recognition",
    description:
      "Computer vision project that predicts gender, age, and emotion using deep learning and facial recognition analysis.",
    technologies: ["Computer Vision", "Machine Learning", "Python", "Keras"],
    image: "/projects/emotion-detection.png",
    links: {
      github: "https://github.com/ivanrbnc/gender-age-emotion",
    },
  },
  {
    title: "SIWADI - Warehouse Information System",
    description:
      "Warehouse management system for paint distributors.",
    technologies: ["System Analysis", "Next.js", "React", "Java","Spring Boot", "API", "Tailwind CSS", "Typescript"],
    image: "/projects/siwadi.png",
    links: {
      demo: "https://www.youtube.com/watch?v=Np6-LmrMsLo",
    },
  },
  {
    title: "Ivanrbnc's Portfolio Website",
    description:
      "A modern responsive portfolio website built with Next.js and Tailwind CSS to showcase work and projects.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/projects/portfolio.png",
    links: {
      demo: "https://portfolio-seven-brown-24.vercel.app/",
      github: "https://github.com/ivanrbnc/portfolio",
    },
  },
  {
    title: "RSA-OAEP Algorithm Implementation",
    description:
      "Cryptographic implementation of RSA-OAEP for secure encryption and data transmission.",
    technologies: ["Cryptography", "Python", "RSA-OAEP"],
    image: "/projects/rsa-oaep.png",
    links: {
      github: "https://github.com/ivanrbnc/RSA-OAEP",
    },
  },
  {
    title: "Phantom Striker - Game Development",
    description:
      "2D action game built with Godot featuring platform mechanics and combat systems.",
    technologies: ["Game Design", "Godot", "GDScript"],
    image: "/projects/phantom-striker.png",
    links: {
      demo: "https://team-bunglon.itch.io/phantom-striker",
    },
  },
  {
    title: "Fooody Buddy - Food Tracking App",
    description:
      "Nutrition and food tracking app with web and mobile platforms.",
    technologies: ["Web Development", "Mobile App", "HTML", "CSS", "Flutter"],
    image: "/projects/fooody.png",
    links: {
      githubWeb: "https://github.com/ramyanareswari/TK-A02",
      githubMobile: "https://github.com/ramyanareswari/fooody-mobile-app",
    },
  },
]

export function ProjectsGrid() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, allProjects.length))
  }

  const showLessProjects = () => {
    setVisibleProjects(3)
  }

  return (
    <section id="projects-section" className="space-y-8 mb-8">
      <h3 className="text-3xl font-bold text-center text-slate-800">Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.slice(0, visibleProjects).map((project, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full">
            <CardHeader className="flex-shrink-0">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="group-hover:text-blue-600 transition-colors text-lg flex-1 min-w-0">
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
              <CardDescription className="text-left text-sm mt-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="aspect-video relative rounded-lg overflow-hidden bg-slate-100">
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
        ))}
      </div>

      <div className="flex justify-center gap-4">
        {visibleProjects < allProjects.length && (
          <Button onClick={showMoreProjects} variant="outline" className="transition-all duration-300 hover:scale-105">
            See More Projects
          </Button>
        )}
        {visibleProjects > 3 && (
          <Button
            onClick={showLessProjects}
            variant="ghost"
            className="transition-all duration-300 hover:scale-105"
          >
            Show Less
          </Button>
        )}
      </div>
    </section>
  )
}
