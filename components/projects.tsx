"use client"

import { ArrowUpRight, FileText, Presentation } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Publication = {
  title: string
  link?: string
  venue?: string // e.g., "NeurIPS 2024", "ICML 2025"
}

type Presentation = {
  title: string
  link?: string
  venue?: string // e.g., "Stanford AI Lab", "HLF 2025"
}

type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  category: "hackathon" | "courses" | "personal" | "research"
  award?: string // e.g., "1st Place", "Best Design", "Winner"
  hackathon?: string // e.g., "CalHacks", "TreeHacks '23", "HackMIT '23"
  class?: string // e.g., "CS 161", "CS 229"
  quarter?: string // e.g., "Fall", "Winter", "Spring", "Summer"
  year?: string // e.g., "2024", "2023"
  publications?: Publication[]
  presentations?: Presentation[]
}

type CategoryFilter = "all" | "hackathon" | "research" | "courses" | "personal"

const categoryLabels: Record<CategoryFilter, string> = {
  all: "All",
  hackathon: "Hackathons",
  research: "Research",
  courses: "Courses",
  personal: "Personal",
}

const projects: Project[] = [

  {
    title: "Spot The Ball",
    description:
      "Under Prof. Tobias Gerstenberg, developed a benchmark to measure how humans and AI infer hidden information in sports scenes. Designed large-scale experiments and evaluated frontier vision-language models to study human–AI reasoning gaps.",
    tags: ["Vision-Language Models", "Cognitive Science", "Python", "Stable Diffusion"],
    category: "research",
    link: "https://nehabalamurugan.com/spot-the-ball-benchmark/",
    publications: [
      {
        title: "ArXiv",
        link: "https://arxiv.org/abs/2511.00261",
      },
    ],
    presentations: [
      {
        title: "CogSci 2026 Poster",
        link: "https://drive.google.com/file/d/1vnmOLn-HNpfKhXf_9jSW9i9Hmk8HKEwo/view?usp=sharing",
      },
    ],
  },
  {
    title: "buff: AI Assistant for Scientific Research",
    description:
      "Undergraduate thesis project developing an AI framework to accelerate scientific discovery by combining large language models, citation graph analysis, and modular retrieval pipelines. Designed to support literature synthesis, knowledge grounding, and experiment planning for researchers across domains.",
    tags: ["LLMs", "Knowledge Retrieval", "Research Automation", "Python"],
    category: "research",
    // link: "#",
    presentations: [
      {
        title: "Barrett Thesis Symposium 2024",
      },
    ],
  },
  {
    title: "Dreamscape Learn VR Education",
    description:
      "Led a 10-member team under the $500M Dreamscape Learn initiative to create multiplayer VR classrooms. Built interactive visualizations for math and climate data, deployed to 1,500+ students across ASU.",
    tags: ["Unity", "C#", "VR", "Data Visualization"],
    category: "research",
    link: "https://www.dreamscapelearn.com/",
    publications: [
      {
        title: "ILRN 2024 Conference",
        link: "https://doi.org/10.1007/978-3-031-80475-5_14",
      },
    ],
    presentations: [
      {
        title: "ASU Fulton Forge Conference Posters 2022, 2023, 2024",
      },
    ],
    award: "GCSP Research Award 5x",
  },
  {
    title: "AR Driver Safety System",
    description:
      "Under the DAAD RISE Fellowship, designed AR heads-up display systems to reduce driver distraction, integrating CARLA simulations, eye-tracking, and real-world HoloLens experiments. Worked with Prof. Thomas Kosch at Humboldt University of Berlin.",
    tags: ["AR", "HoloLens", "Python", "CARLA Simulator"],
    category: "research",
    // link: "#",
    award: "Barrett Hall of Fame Award",
    presentations: [
      {
        title: "DAAD RISE Conference Talk 2023",
      },
    ],
  },
  {
    title: "Fluid Dynamics Visualization in VR",
    description:
      "Supported by the NSF Research Experience for Undergraduates program to build interactive VR systems for exploring large-scale fluid simulations, improving real-time rendering speed by 45%.",
    tags: ["VR", "Unity", "VFX Graph", "GPU Optimization"],
    category: "research",
    // link: "#",
  },
  {
    title: "Recall: Wearable Conversation Recorder",
    description:
      "A wearable built on Raspberry Pi that auto-detects conversations via voice cues, generates FaceNet embeddings, and records local audio. Transcripts are summarized with Gemini and stored in Supabase for natural-language search in a Next.js app.",
    tags: ["Raspberry Pi", "FaceNet", "Gemini", "Next.js", "Supabase"],
    category: "hackathon",
    hackathon: "CalHacks '25",
    link: "https://devpost.com/software/sd-32s1zj",
  },
  {
    title: "YouCare: Health App For Women's Wellness Forecasting",
    description:
      "Web application to enhance women's health awareness through personalized symptom analysis, incorporating Apple HealthKit API and period tracking apps like Flo. Built with Swift in XCode and integrated with the You.com AI search platform.",
    tags: ["Swift", "XCode", "Apple HealthKit", "You.com AI"],
    category: "hackathon",
    hackathon: "TreeHacks '23",
    award: "Best Use of Open Platform Award",
    link: "https://devpost.com/software/youcare-sjaovm",
  },
  {
    title: "SusProduce: AI Vision For Post-Expiry Food Usability Assessment",
    description:
      "ML image detection and analysis tool utilizing the Keras library to discern the usability of food past its expiration date. Developed an Angular front-end application aimed at minimizing food waste through intelligent classification.",
    tags: ["Keras", "ML", "Angular", "Image Classification"],
    category: "hackathon",
    hackathon: "HackMIT '23",
    award: "Best Solution for CPG",
    // link: "#",
  },
  {
    title: "CareUp: Disability Caretaker Assistant",
    description:
      "Created an AI-powered app that simplifies caregiving by finding, compiling, and ranking resources and programs for elderly or disordered family members, and assists caretakers in completing necessary forms.",
    tags: ["AI", "Web App", "Healthcare"],
    category: "hackathon",
    hackathon: "Hacks for Humanity '23",
    award: "1st Place",
    // link: "#",
  },
  {
    title: "Althea: AI Research Agent",
    description:
      "An AI-powered research assistant that helps researchers conduct literature reviews and identify research gaps. Fine-tuned on ~500 biochemistry papers with citation network integration and semantic chunking for efficient information retrieval.",
    tags: ["Python", "Reflex", "LangChain", "OpenAI", "MongoDB", "Pinecone", "LLMs"],
    category: "hackathon",
    hackathon: "TreeHacks '24",
    link: "https://devpost.com/software/athena-eq5ba8",
  },


// COURSE PROJECTS ------------------------------------------------------------------------------
  {
    title: "Navigating the Lunar Surface under Low Visibility Conditions",
  description:
    "Developed a grid-world simulation to model lunar rover navigation under uncertainty, comparing QMDP-based decision-making with fully observable and random agents. Demonstrated that QMDP effectively balances exploration and planning under partial observability, achieving up to 100% success in dense environments.",
  tags: ["RL", "POMDP", "Autonomous Navigation", "Robotics"],
    category: "courses",
    class: "Decision Making Under Uncertainty",
    quarter: "Fall",
    year: "2024",
    // link: "#",
  },
  // {
  //   title: "x",
  //   description:
  //     "something something",
  //   tags: ["something something"],
  //   category: "courses",
  //   class: "Robot Autonomy",
  //   quarter: "Fall",
  //   year: "2024",
  //   // link: "#",
  // },

  {
    title: "Investigating the Temporal Sense of Large Language Models",
  description:
    "Studied how large language models represent and reason about time by modifying the TOT-Semantic benchmark to include natural language and linguistic noise. Evaluated Gemini, Mistral, and LLaMA on diverse graph structures, revealing that models rely more on pattern recognition than true temporal reasoning.",
  tags: ["LLMs", "Temporal Reasoning", "Benchmarking", "Natural Language Understanding"],
    category: "courses",
    class: "NLP",
    quarter: "Winter",
    year: "2025",
    // link: "#",
  },
  {
    title: "Volumetric Rendering and Visualization in a Custom Ray Tracer",
    description:
    "Implemented volumetric rendering in a physically based ray tracer, simulating absorption, in-scattering, and phase function effects to visualize light transport in fog, smoke, and translucent media. Built interactive UI controls for density and scattering parameters, added Perlin-noise–based procedural volumes, and designed visualizations of ray marching to make rendering concepts intuitive.",
    tags: ["Computer Graphics", "Ray Tracing", "Volumetric Rendering", "Visualization"],
    category: "courses",
    class: "Computer Graphics",
    quarter: "Winter",
    year: "2025",
    // link: "#",
  },
  {
    title: "Improving Small Language Models via Test-Time Prompt Compression and Retrieval",
    description:
    "Investigated how retrieval and compression strategies affect small language models at inference time. Proposed a hierarchical framework using Gemma 12B for prompt planning and Qwen2.5-0.5B for generation, showing that concise prompt compression improves reasoning quality without additional training.",
  tags: ["LLMs", "RAG", "Prompt Compression", "RL"],
    category: "courses",
    class: "Deep RL",
    quarter: "Spring",
    year: "2025",
    // link: "#",
  },
  {
    title: "DSPy: ContextSeeker",
  description:
    "Developed a new DSPy module enabling language models to ask clarifying follow-up questions when user prompts lack key context. The ContextSeeker framework introduces trainable components for question generation, stopping criteria, and human-in-the-loop optimization, improving reasoning accuracy on underspecified tasks like Fermi problems.",
  tags: ["LLMs", "Human-in-the-Loop", "DSPy", "Interactive AI", "Prompt Optimization"],
    category: "courses",
    class: "Visual Computing Systems",
    quarter: "Spring",
    year: "2025",
    // link: "#",
  },
  {
    title: "Estimating Fuel Efficiency of Aircrafts using GNNs",
    description:
    "Built a Graph Neural Network to predict aircraft fuel consumption using real-world trajectory data from the 2025 Performance Review Commission (PRC) Data Challenge. Modeled flights as spatiotemporal graphs capturing dependencies between consecutive flight segments and airports, improving fuel burn estimation over traditional independent models.",
    tags: ["GNN", "Spatiotemporal Modeling", "Aviation"],
    category: "courses",
    class: "ML with graphs",
    quarter: "Fall",
    year: "2025",
    // link: "#",
  },
  {
    title: "Learning Primal Heuristics for Neural Network Verification",
  description:
    "Extends differentiable integer linear optimization (DiffILO) to train heuristic policies for neural network verification (NNV) without supervision. Introduces a differentiable, unsupervised framework that learns MILP heuristics using probabilistic relaxations and CVaR-based feasibility measures, enabling gradient-based optimization of verification problems.",
  tags: ["Neural Network Verification", "MILP", "Optimization", "Differentiable Programming"],
    category: "courses",
    class: "AI for Alg/Optimization",
    quarter: "Fall",
    year: "2025",
    // link: "#",
  },
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all")

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const categories: CategoryFilter[] = ["all", "hackathon", "research", "courses", "personal"]

  return (
    <section id="projects" className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24" aria-label="Projects">
      <div className="mx-auto max-w-screen-xl px-6 py-6 md:px-12 md:py-8 lg:px-24">
        <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-foreground">Projects</h2>
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">What I Have Built</h3>

        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                selectedCategory === category
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="-mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-6 lg:px-6">
          <ul className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/40 items-stretch">
            {filteredProjects.map((project) => (
              <li key={project.title} className="flex-shrink-0">
                <div className="group relative w-72 rounded-lg bg-card p-6 transition-all hover:bg-card/80 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg sm:w-80 h-[550px] flex flex-col">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="absolute inset-0 rounded-lg"
                      aria-label={`View ${project.title} project`}
                    />
                  ) : null}
                  <div className="flex flex-col gap-3 flex-1">
                    <div>
                      <h4 className="font-medium leading-snug text-foreground">
                        <span className="inline-flex items-center gap-1">
                          {project.title}
                          {project.link && (
                            <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                          )}
                        </span>
                      </h4>
                      {project.hackathon && (
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {project.hackathon}
                        </p>
                      )}
                      {project.class && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {project.class}
                          {project.quarter && project.year && ` · ${project.quarter} ${project.year}`}
                          {project.quarter && !project.year && ` · ${project.quarter}`}
                          {!project.quarter && project.year && ` · ${project.year}`}
                        </p>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                      {project.description}
                    </p>
                    {project.award && (
                      <div>
                        <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-300 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700/50">
                          🏆 {project.award}
                        </Badge>
                      </div>
                    )}
                    {(project.publications && project.publications.length > 0) || (project.presentations && project.presentations.length > 0) ? (
                      <div className="flex flex-col gap-2 pt-1">
                        {project.publications?.map((pub, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <FileText className="h-3.5 w-3.5 shrink-0 mt-0.5 text-muted-foreground" />
                            <div className="flex-1 min-w-0">
                              {pub.link ? (
                                <a
                                  href={pub.link}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-primary hover:underline font-medium"
                                >
                                  {pub.title}
                                </a>
                              ) : (
                                <span className="font-medium text-foreground">{pub.title}</span>
                              )}
                              {pub.venue && (
                                <span className="text-muted-foreground ml-1">· {pub.venue}</span>
                              )}
                            </div>
                          </div>
                        ))}
                        {project.presentations?.map((pres, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <Presentation className="h-3.5 w-3.5 shrink-0 mt-0.5 text-muted-foreground" />
                            <div className="flex-1 min-w-0">
                              {pres.link ? (
                                <a
                                  href={pres.link}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-primary hover:underline font-medium"
                                >
                                  {pres.title}
                                </a>
                              ) : (
                                <span className="font-medium text-foreground">{pres.title}</span>
                              )}
                              {pres.venue && (
                                <span className="text-muted-foreground ml-1">· {pres.venue}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {tag}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
