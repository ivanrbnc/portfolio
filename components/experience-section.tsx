import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section className="space-y-8">
      <h3 className="text-3xl font-bold text-center text-slate-800">Work Experience</h3>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Solution Engineer Intern</CardTitle>
                <CardDescription className="text-base">PT Mid Solusi Nusantara (Mekari)</CardDescription>
              </div>
              <Badge variant="outline">Mar 2025 - Apr 2025</Badge>
            </div>
            <div className="border-b border-slate-200 mt-3"></div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-600">
              <li>
                • Co-developed an application that migrates ClickUp to Mekari Officeless, enabling automation of key
                processes and contributing to a projected 50%+ budget reduction
              </li>
              <li>
                • Originated the idea to redevelop 9+ core features of the ClickUp migration application by identifying
                structural inefficiencies and crafting foundational technical documentation
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Artificial Intelligence Exploration Intern</CardTitle>
                <CardDescription className="text-base">PT Telekomunikasi Selular (Telkomsel)</CardDescription>
              </div>
              <Badge variant="outline">Sep 2024 - Dec 2024</Badge>
            </div>
            <div className="border-b border-slate-200 mt-3"></div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-600">
              <li>
                • Explored Telkomsel AI agents' capabilities using stress testing up to 500 consecutive prompts and
                contributed to a 10-section prompting guideline adopted 100% by Telkomsel
              </li>
              <li>
                • Discovered and implemented a responsive behavior mechanism in an AI agent, adopted across other
                Telkomsel AI agents to enhance performance consistency by up to 40%
              </li>
              <li>
                • Conducted comprehensive testing on the MyEnterprise platform using Selenium, executing 50 test cases
                and identifying 10 bugs
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>IT Enterprise Assisted In-Sales Intern</CardTitle>
                <CardDescription className="text-base">PT Telekomunikasi Selular (Telkomsel)</CardDescription>
              </div>
              <Badge variant="outline">Jun 2024 - Jul 2024</Badge>
            </div>
            <div className="border-b border-slate-200 mt-3"></div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-600">
              <li>
                • Optimized a generative B2B AI chatbot, Ted, for account managers by automating test flows using
                Selenium and NLP models, achieving 15% accuracy improvement
              </li>
              <li>
                • Deployed automation workflows to enhance lead verification process using Selenium and sentiment
                polarity, reducing manual effort and boosting productivity by over 25%
              </li>
              <li>
                • Developed an automation program leveraging data-driven insights to elevate Telkomsel's market
                visibility among key stakeholders by over 10%
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Teaching Assistant of Platform-Based Programming</CardTitle>
                <CardDescription className="text-base">
                  Faculty of Computer Science, University of Indonesia
                </CardDescription>
              </div>
              <Badge variant="outline">Aug 2023 - Dec 2023</Badge>
            </div>
            <div className="border-b border-slate-200 mt-3"></div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-600">
              <li>
                • Delivered support for platform-based programming assignments, driving a 10% improvement in student
                performance metrics
              </li>
              <li>
                • Played a key role in the development and refinement of 2 foundational assignments and grading rubrics,
                ensuring 100% alignment with learning outcomes
              </li>
              <li>
                • Mentored 17 students individually while collaborating with over 20 teaching assistants to maintain a
                high-quality learning environment
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
