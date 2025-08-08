"use client"

import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ContactLinks() {
  return (
    <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-4 pt-4">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="transition-all duration-300 hover:scale-105 text-xs sm:text-sm justify-start"
      >
        <a href="https://github.com/ivanrbnc" target="_blank" rel="noopener noreferrer">
          <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          GitHub
        </a>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="transition-all duration-300 hover:scale-105 text-xs sm:text-sm justify-start"
      >
        <a href="https://linkedin.com/in/ivan-cezeliano" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          LinkedIn
        </a>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="transition-all duration-300 hover:scale-105 text-xs sm:text-sm justify-start"
      >
        <a href="https://www.instagram.com/ivanrbnc/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Instagram
        </a>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="transition-all duration-300 hover:scale-105 text-xs sm:text-sm justify-start"
      >
        <a href="mailto:ivanrbnc@gmail.com">
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Contact
        </a>
      </Button>
    </div>
  )
}
