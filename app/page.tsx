"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Product Analyst & Data Strategist</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Nikitha Nayana S
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I specialize in using data to enhance product performance, drive operational efficiency, and support
              business growth at CommerceIQ through strategic analysis and cross-functional collaboration.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                onClick={() => {
                  const target = document.querySelector("#projects")
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 bg-transparent"
                onClick={() => {
                  const target = document.querySelector("#contact")
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/NikithaNayanaS" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/connect-with-nikitha-nayana-s/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:nikithanayana651@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:+919945986651">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/images/nikitha-profile.jpeg"
                  alt="Nikitha Nayana S"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm an analytical and detail-oriented professional with hands-on expertise in data reporting,
                  automation, and analytics across SaaS and enterprise environments. I specialize in leveraging SQL,
                  Python, BigQuery, and advanced analytics to build reliable data models, streamline reporting
                  workflows, and improve data accuracy across cross-functional teams.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Proficient in advanced Excel (formulas, pivot tables, dashboards) and VBA, I automate complex
                  reporting tasks and enhance operational efficiency. I'm skilled at integrating AI SaaS tools like
                  ChatGPT and Gemini through prompt engineering to optimize analytical operations and accelerate
                  insights. My strength lies in translating data into actionable strategies that support informed
                  decision-making while collaborating closely with product and business teams.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I quickly adapt to new tools and systems with a focus on continuous learning and delivering
                  operational excellence. Driven by a passion for process optimization and data-driven growth, I
                  consistently transform complex datasets into strategic insights that drive measurable business impact.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Nikitha Nayana S</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">nikithanayana651@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Bengaluru, Karnataka, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Current Role</div>
                    <div className="font-medium text-green-500">Product Analyst L2 at CommerceIQ</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white border-0 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/api/generate-resume"
                      link.download = "Nikitha-Nayana-S-Resume.txt"
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                  >
                    Download Resume
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="SQL, BigQuery" />
            <SkillBadge name="Power BI" />
            <SkillBadge name="Python" />
            <SkillBadge name="Advanced Excel & Google Sheets (Formulas, Pivots, Dashboards)" />
            <SkillBadge name="Data Modeling & Analysis" />
            <SkillBadge name="JIRA" />
            <SkillBadge name="Data Analysis" />
            <SkillBadge name="Data Scrubbing & Automation (ETL)" />
            <SkillBadge name="Prompt Engineering & SaaS-based AI Automation" />
            <SkillBadge name="Business Analytics & Cross-Functional Collaboration" />
            <SkillBadge name="Software Troubleshooting" />
            <SkillBadge name="Data Management" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my data analysis projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="COVID-19 Dataset Exploration and Analysis"
              description="In-depth analysis of COVID-19 data using structured SQL queries. Extracted data from 'Covid Deaths' and 'Covid Vaccinations' tables to calculate death percentages, infection rates, and vaccination impact. Used advanced SQL techniques like CTEs, temporary tables, and created views for data visualization."
              tags={["SQL", "Data Analysis", "CTEs", "Data Visualization"]}
              image="/images/covid-analysis.jpeg"
              demoUrl="https://github.com/NikithaNayanaS/Portfolio-Project/blob/main/covid%20%2019%20SQL%20Data%20Exploration.sql"
              repoUrl="https://github.com/NikithaNayanaS/Portfolio-Project/blob/main/covid%20%2019%20SQL%20Data%20Exploration.sql"
            />
            <ProjectCard
              title="Bike Sales Dashboard"
              description="Analyzed bike sales dataset with comprehensive data cleaning and preparation. Created Pivot Tables and Charts to summarize key insights, then built a dynamic dashboard using slicers for interactive data exploration and filtering."
              tags={["MS Excel", "VBA", "Pivot Tables", "Dashboard"]}
              image="/images/bike-sales-dashboard.png"
              demoUrl="https://github.com/NikithaNayanaS/Portfolio-Project/blob/main/Bike%20Sales%20Dashboard.xlsx"
              repoUrl="https://github.com/NikithaNayanaS/Portfolio-Project/blob/main/Bike%20Sales%20Dashboard.xlsx"
            />
            <ProjectCard
              title="Data Cleaning in SQL"
              description="Focused on cleaning and transforming Nashville Housing dataset to enhance quality and usability. Standardized date formats, filled missing addresses, broke down address fields, converted binary values, and removed duplicates to improve data consistency."
              tags={["SQL", "Data Cleaning", "Data Standardization", "ETL"]}
              image="/images/data-cleaning-sql.png"
              demoUrl="https://github.com/NikithaNayanaS/Portfolio-Project/blob/main/Nashville%20Housing%20%20Data%20Cleaning.sql"
              repoUrl="https://github.com/NikithaNayanaS/Portfolio-Project/blob/main/Nashville%20Housing%20%20Data%20Cleaning.sql"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Career Milestones" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">nikithanayana651@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">+91 9945986651</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/connect-with-nikitha-nayana-s</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/NikithaNayanaS</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Product Analyst L2 at CommerceIQ - Open to new opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Nikitha
              </span>
              <span className="text-white">NS</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Nikitha Nayana S. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/NikithaNayanaS" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/connect-with-nikitha-nayana-s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:nikithanayana651@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="tel:+919945986651">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
