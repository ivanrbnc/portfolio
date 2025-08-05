import { Header } from "@/components/header"
import { HeroAboutSection } from "@/components/hero-about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      <main className="space-y-16">
        <HeroAboutSection />
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <SkillsSection />
          <ExperienceSection />
          <ProjectsCarousel />
        </div>
      </main>

      <Footer />
    </div>
  )
}
