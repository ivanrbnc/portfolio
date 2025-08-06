import { ExperienceItem } from "./experience-item";

export function ExperienceSection() {
  return (
    <section className="space-y-8">
      <h3 className="text-3xl font-bold text-center text-slate-800">Work Experience</h3>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-300" />
        <div className="space-y-8">
          <ExperienceItem
            position="Solution Engineer Intern"
            company="PT Mid Solusi Nusantara (Mekari)"
            date="Mar 2025 - Apr 2025"
            description={[
              "Co-developed an application that migrates ClickUp to Mekari Officeless, enabling automation of key processes and contributing to a projected 50%+ budget reduction",
              "Originated the idea to redevelop 9+ core features of the ClickUp migration application by identifying structural inefficiencies and crafting foundational technical documentation"
            ]}
          />
          <ExperienceItem
            position="Artificial Intelligence Exploration Intern"
            company="PT Telekomunikasi Selular (Telkomsel)"
            date="Sep 2024 - Dec 2024"
            description={[
              "Explored Telkomsel AI agents' capabilities using stress testing up to 500 consecutive prompts and contributed to a 10-section prompting guideline adopted 100% by Telkomsel",
              "Discovered and implemented a responsive behavior mechanism in an AI agent, adopted across other Telkomsel AI agents to enhance performance consistency by up to 40%",
              "Conducted comprehensive testing on the MyEnterprise platform using Selenium, executing 50 test cases and identifying 10 bugs"
            ]}
          />
          <ExperienceItem
            position="IT Enterprise Assisted In-Sales Intern"
            company="PT Telekomunikasi Selular (Telkomsel)"
            date="Jun 2024 - Jul 2024"
            description={[
              "Optimized a generative B2B AI chatbot, Ted, for account managers by automating test flows using Selenium and NLP models, achieving 15% accuracy improvement",
              "Deployed automation workflows to enhance lead verification process using Selenium and sentiment polarity, reducing manual effort and boosting productivity by over 25%",
              "Developed an automation program leveraging data-driven insights to elevate Telkomsel's market visibility among key stakeholders by over 10%"
            ]}
          />
          <ExperienceItem
            position="Teaching Assistant of Platform-Based Programming"
            company="Faculty of Computer Science, University of Indonesia"
            date="Aug 2023 - Dec 2023"
            description={[
              "Delivered support for platform-based programming assignments, driving a 10% improvement in student performance metrics",
              "Played a key role in the development and refinement of 2 foundational assignments and grading rubrics, ensuring 100% alignment with learning outcomes",
              "Mentored 17 students individually while collaborating with over 20 teaching assistants to maintain a high-quality learning environment"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
