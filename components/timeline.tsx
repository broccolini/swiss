import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Experience = {
  period: string
  title: string
  description?: string
}

type TimelineItem = {
  year: string
  title: string
  organization: string
  description?: string
  type: "work" | "education" | "award" | "milestone"
  award?: string
  experiences?: Experience[]
}

const timelineItems: TimelineItem[] = [
  {
    year: "2024-2026",
    title: "Master's in Computer Science (AI)",
    organization: "Stanford University",
    type: "education",
    experiences: [
      {
        period: "2024-2026",
        title: "Causality and Cognition Lab",
        description: "Developing benchmarks to study visual social reasoning in humans and AI",
      },
      {
        period: "2025",
        title: "Accel Leadership Program",
        description: "1 of 16 students selected for Stanford's flagship entrepreneurship program",
      },
      {
        period: "2024-2025",
        title: "Emerson Collective Venture",
        description: "Exploring the software for hardware market",
      },
  
    ],
  },
  {
    year: "2021-2024",
    title: "Bachelor's in Computer Science",
    organization: "Arizona State University",
    type: "education",
    award: "CS Rank #1",
    experiences: [
      {
        period: "2022-2024",
        title: "Dreamscape Learn VR Education",
        description: "Led 10-member team under $500M immersive learning initiative, built multiplayer VR classrooms",
      },
      {
        period: "2023",
        title: "HCI Studio Berlin",
        description: "Designed AR heads-up displays with HoloLens and CARLA simulations to improve driver safety",
      },
      {
        period: "2021-2024",
        title: "Hackathons",
        description: "Won multiple hackathons across education, fintech, and health tech",
      },
    ],
  },
  // {
  //   year: "2017-2021",
  //   title: "High School",
  //   organization: "Mountain Ridge High School",
  //   award: "Valedictorian",
  //   type: "education",
  //   experiences: [
  //     {
  //       period: "2020",
  //       title: "Break Digital Divide",
  //       description: "Co-founder - Helped 250 families afford WiFi for remote learning during COVID",
  //     },
  //     {
  //       period: "2017-2021",
  //       title: "Varsity Tennis",
  //       description: "Team member",
  //     },
  //   ],
  // },
]

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  award: Award,
  milestone: Rocket,
}

export function Timeline() {
  return (
    <section id="timeline" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Timeline</h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-border" />

        <ul className="space-y-8">
          {timelineItems.map((item, index) => {
            const Icon = iconMap[item.type as keyof typeof iconMap]
            return (
              <li key={index} className="group relative pl-12">
                {/* Icon circle */}
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card transition-colors group-hover:border-primary group-hover:bg-primary/10">
                  <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                {/* Content */}
                <div className="rounded-lg border border-transparent p-4 transition-all hover:border-border hover:bg-card/50">
                  <span className="text-xs font-semibold text-primary">{item.year}</span>
                  <h3 className="mt-1 font-medium leading-snug text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.organization}</p>
                  {item.award && (
                    <div className="mt-2">
                      <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-300 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700/50">
                        🏆 {item.award}
                      </Badge>
                    </div>
                  )}
                  {item.experiences && item.experiences.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {item.experiences.map((exp, expIndex) => (
                        <div key={expIndex} className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-foreground">{exp.title}</span>
                          {exp.description && (
                            <p className="text-xs leading-relaxed text-muted-foreground">{exp.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {item.description && !item.experiences && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.description }} />
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
