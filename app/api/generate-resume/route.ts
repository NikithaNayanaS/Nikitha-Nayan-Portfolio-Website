import { NextResponse } from "next/server"

export async function GET() {
  const resumeContent = `
November 2024 - Current
Nikitha Nayana S
Bengaluru, KA 560011
nikithanayana651@gmail.com
(91) 9945986651
WWW: https://nikithanayana.vercel.app/

PROFESSIONAL SUMMARY
Analytical and detail-oriented professional with hands-on experience in data reporting, automation, and analytics across SaaS and enterprise environments. Skilled in leveraging SQL, Python, and BigQuery to build reliable data models, streamline reporting workflows, and improve data accuracy across cross-functional teams. Proficient in advanced Excel (formulas, pivots, dashboards) and VBA for automating reporting tasks and enhancing efficiency. Experienced in collaborating with product and business teams to translate analytical findings into actionable insights that support data-driven decision-making. Adept at prompt engineering using AI SaaS tools such as ChatGPT and Gemini to optimize analytical operations and reporting processes. Quick to adapt to new tools and systems, with a focus on continuous learning and operational excellence.

SKILLS
• SQL, BigQuery
• Python
• Data Modeling & Analysis
• Data Scrubbing & Automation (ETL)
• Advanced Excel & Google Sheets (Formulas, Pivots, Dashboards)
• VBA (Excel) and Google Apps Script (Sheets)
• Prompt Engineering and SaaS-based AI Automation
• Business Analytics & Cross-Functional Collaboration
• Attention to Detail & Proactive Attitude
• Strong Written and Verbal Communication

WORK HISTORY

Product Analyst - L2
CommerceIQ, Bengaluru, India
November 2024 - Current

• Led and initiated a key migration project that modernized legacy data crawling systems into a unified internal analytics platform, improving scalability, data reliability, and processing speed while driving measurable cost optimization.
• Designed and optimized scalable data models using advanced SQL and BigQuery, enhancing data accuracy, query performance, and visibility across multi-market datasets.
• Developed Python-based automation workflows in Google Colab and Jupyter using Pandas, NumPy, PySpark, and Statsmodels to streamline data validation, reporting, and analysis—significantly reducing manual effort.
• Collaborated with cross-functional teams across Product, Prompt Engineering, and Business functions to fine-tune SaaS-based AI models, translating analytical insights into actionable initiatives that improved LBA performance and operational efficiency.
• Supported analytical governance and onboarding for enterprise clients including Coca-Cola, Mondelez, PepsiCo, and LEGO, ensuring KPI alignment, accurate data synchronization, and consistent reporting excellence.

Associate Technical Engineer
PowerSchool, Bengaluru, India
March 2024 - November 2024

• Leveraged advanced SQL and large-scale data analysis to validate client data integrity, identify performance trends, and uncover actionable insights that improved operational visibility and reporting accuracy.
• Built and maintained dynamic dashboards and analytical models using Google Sheets and Excel, applying advanced formulas, pivot structures, and data transformations to monitor KPIs and streamline workflows.
• Delivered high-value analytical consulting for U.S. enterprise clients, combining technical problem-solving with data-driven recommendations to enhance accuracy, optimize reporting outcomes, and maintain exceptional service quality.

Technical Support Engineer
HP Inc., Bengaluru, India
September 2023 - March 2024

• Delivered high-impact technical support to U.K. B2B clients by diagnosing and resolving complex hardware, software, and networking issues, ensuring minimal downtime and superior customer satisfaction through clear and confident business communication.
• Managed data-driven reporting and documentation using MS Excel and internal support tools, tracking issue trends, performance metrics, and client interactions to improve service efficiency and strengthen long-term client relationships.

ACCOMPLISHMENTS
• Recognized as Employee of the Quarter twice for successfully leading a large-scale migration project that enhanced system scalability, reliability, and processing efficiency across analytics operations.
• Received company-wide recognition for managing and delivering consistent analytical excellence for enterprise clients including LEGO, Mondelez, Coca-Cola, and PepsiCo, ensuring data accuracy, KPI alignment, and timely performance reporting.
• Selected to train cross-functional teams on prompt engineering and SaaS AI integration, conducting practical sessions on embedding ChatGPT and Gemini APIs into Excel and Google Sheets using VBA to automate analysis, enhance data scrubbing accuracy, and streamline reporting workflows.

EDUCATION
Bachelor of Engineering (B.E.) in Electronics and Communication Engineering
Dayananda Sagar Academy of Technology and Management, Bengaluru, India
Graduated: January 2023

WEBSITES, PORTFOLIOS, PROFILES
LinkedIn: https://www.linkedin.com/in/connect-with-nikitha-nayana-s/
Portfolio: https://nikithanayana.vercel.app/

INTERESTS
• Reading books for self-development
• Trekking and outdoor adventures
• Exploring and learning about new technologies
• Photography and creative visuals
  `

  // Create a simple text-based response
  const blob = new Blob([resumeContent], { type: "text/plain" })

  return new NextResponse(blob, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": 'attachment; filename="Nikitha-Nayana-S-Resume.txt"',
    },
  })
}
