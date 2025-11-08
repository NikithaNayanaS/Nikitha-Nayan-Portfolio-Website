"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Product Analyst L2",
    company: "CommerceIQ",
    period: "November 2024 - Present",
    description:
      "Analyze complex datasets using SQL, Power BI, and Python to generate insights that drive product enhancements and operational efficiency. Collaborate with cross-functional teams to align on product strategies, streamline client onboarding, and support end-to-end product lifecycle. Create dashboards and reports to enable data-driven decision-making and process optimization across the organization. Identify and implement scalable solutions to improve workflows and reduce operational bottlenecks.",
    isCurrent: true,
  },
  {
    title: "Associate Technical Support Engineer",
    company: "PowerSchool",
    period: "March 2024 - November 2024",
    description:
      "Expertly use SQL commands to generate reports and retrieve client information. Leverage extensive SAAS knowledge to provide high-level support, address complex software challenges for B2B clients, and manage JIRA tickets for streamlined issue resolution. Handle product escalation processes efficiently, ensuring timely resolutions for critical technical issues.",
    isCurrent: false,
  },
  {
    title: "Technical Support Engineer",
    company: "HP Inc.",
    period: "September 2023 – March 2024",
    description:
      "Delivered exceptional support in computer hardware and software troubleshooting, resolving technical issues efficiently to minimize downtime. Fostered strong relationships with US B2B clients, provided network solutions, and maintained comprehensive documentation of technical issues and solutions.",
    isCurrent: false,
  },
  {
    title: "Bachelor of Engineering",
    company: "Dayananda Sagar Academy of Technology and Management",
    period: "2019 - January 2023",
    description:
      "Electronics and Communication Engineering with 6.5 CGPA. Developed strong foundation in technical problem-solving and analytical thinking. Completed various projects in data analysis and software development.",
    isCurrent: false,
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className={`relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border transition-all duration-300 hover:border-purple-500/50 p-6 ${
                experience.isCurrent ? "border-green-500/50" : "border-zinc-700/50"
              }`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className={`w-6 h-6 rounded-full z-10 flex items-center justify-center ${
                  experience.isCurrent
                    ? "bg-gradient-to-r from-green-500 to-green-600"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
