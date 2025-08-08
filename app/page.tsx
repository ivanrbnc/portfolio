import { Header } from "@/components/header"
import { HeroAboutSection } from "@/components/hero-about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsGrid } from "@/components/projects-section"
import { PersonalSection } from "@/components/personal-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      <main className="space-y-16 pb-10">
        <HeroAboutSection />
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <SkillsSection />
          <ExperienceSection />
          <ProjectsGrid />
          <PersonalSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}
