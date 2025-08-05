"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "SIWADI - Warehouse Information System",
    description:
      "System Analyst for PT Pundi Mitra Mandiri - Developed an information system for paint distributor warehouse with 22 PBIs and 13 main features, designed to increase business process efficiency by more than 20%",
    technologies: ["System Analysis", "Business Process", "Requirements Engineering"],
    image: "Warehouse Management System",
  },
  {
    title: "Phantom Striker - Game Development",
    description:
      "Game Developer for Team Bunglon - Designed and implemented core game mechanics including character movement, strike actions, diverse platform types, achieving 83% satisfaction rate at public exhibition",
    technologies: ["Godot", "GDScript", "Game Design", "UI/UX"],
    image: "Game Development Project",
  },
  {
    title: "AI Agent Optimization",
    description:
      "Enhanced Telkomsel's AI agents through stress testing and responsive behavior mechanisms, contributing to 40% performance improvement and company-wide adoption of prompting guidelines",
    technologies: ["AI/ML", "Python", "Testing", "Performance Optimization"],
    image: "AI Agent Development",
  },
  {
    title: "ClickUp Migration Application",
    description:
      "Co-developed application migrating ClickUp to Mekari Officeless with 9+ core features, contributing to projected 50%+ budget reduction through process automation",
    technologies: ["System Integration", "Process Automation", "Technical Documentation"],
    image: "Migration Application",
  },
]

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="projects-section" className="space-y-8">
      <h3 className="text-3xl font-bold text-center text-slate-800">Featured Projects</h3>

      <div className="relative">
        {/* Main Project Display */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="group hover:shadow-lg transition-shadow mx-2">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription className="text-left">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                        <span className="text-slate-500">{project.image}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 backdrop-blur-sm"
          onClick={prevProject}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 backdrop-blur-sm"
          onClick={nextProject}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-slate-300"
              }`}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
