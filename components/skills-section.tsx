"use client"

import Image from "next/image"


const skills = [
  // Row 1 - 9 items scrolling left (Backend & Data focused)
  { name: "Python", icon: "python.png" },
  { name: "Java", icon: "java.png" },
  { name: "Django", icon: "django.png" },
  { name: "Spring Boot", icon: "spring-boot.png" },
  { name: "PostgreSQL", icon: "postgresql.png" },
  { name: "Docker", icon: "docker.png" },
  { name: "Postman", icon: "postman.png" },
  { name: "Tableau", icon: "tableau.png" },
  { name: "Go", icon: "go.png" },

  // Row 2 - 8 items scrolling right (Frontend & Tools focused)
  { name: "React", icon: "react.png" },
  { name: "Next.js", icon: "next.png" },
  { name: "Flutter", icon: "flutter.png" },
  { name: "Dart", icon: "dart.png" },
  { name: "Figma", icon: "figma.png" },
  { name: "Jira", icon: "jira.png" },
  { name: "Odoo", icon: "odoo.png" },
  { name: "Godot", icon: "godot.png" },
]

const row1Skills = skills.slice(0, 9)
const row2Skills = skills.slice(9, 17)

export function SkillsSection() {
  return (
    <section className="space-y-8 overflow-hidden">
      <h3 className="text-3xl font-bold text-center text-slate-800">Skills & Technologies</h3>

      <div className="skills-container space-y-8">
        {/* Row 1: Scrolling Left */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set */}
            {row1Skills.map((skill, index) => (
              <div key={`row1-first-${index}`} className="flex-shrink-0 mx-4">
                <div className="skill-item group">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-100">
                    <Image
                      src={`/images/${skill.icon}`}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-center mt-2 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {row1Skills.map((skill, index) => (
              <div key={`row1-second-${index}`} className="flex-shrink-0 mx-4">
                <div className="skill-item group">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-100">
                    <Image
                      src={`/images/${skill.icon}`}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-center mt-2 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {/* First set */}
            {row2Skills.map((skill, index) => (
              <div key={`row2-first-${index}`} className="flex-shrink-0 mx-4">
                <div className="skill-item group">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-100">
                    <Image
                      src={`/images/${skill.icon}`}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-center mt-2 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {row2Skills.map((skill, index) => (
              <div key={`row2-second-${index}`} className="flex-shrink-0 mx-4">
                <div className="skill-item group">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-100">
                    <Image
                      src={`/images/${skill.icon}`}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-center mt-2 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
          width: fit-content;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
          width: fit-content;
        }

        .skills-container:hover .animate-scroll-left,
        .skills-container:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
