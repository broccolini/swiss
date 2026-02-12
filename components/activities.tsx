"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

type ImageConfig = {
  src: string
  position?: string // e.g., "center top", "left center", "20% 30%", etc.
}

type Activity = {
  title: string
  role: string
  description: string
  period: string
  image?: string | string[] | ImageConfig[]
  link?: string
}

// Helper function to parse markdown-style bold text
function parseBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldText = part.slice(2, -2)
      return (
        <strong key={index} className="font-semibold text-foreground">
          {boldText}
        </strong>
      )
    }
    return part
  })
}

// Image Carousel Component
function ImageCarousel({ images, alt }: { images: string[] | ImageConfig[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Normalize images to ImageConfig format
  const normalizedImages: ImageConfig[] = images.map((img) =>
    typeof img === "string" ? { src: img } : img
  )

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % normalizedImages.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length)
  }

  const currentImage = normalizedImages[currentIndex]

  return (
    <div className="relative h-40 w-full overflow-hidden rounded-lg group/carousel">
      <Image
        src={currentImage.src}
        alt={`${alt} - Image ${currentIndex + 1} of ${normalizedImages.length}`}
        fill
        className="object-cover"
        style={{
          objectPosition: currentImage.position || "center center",
        }}
      />
      {normalizedImages.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 opacity-0 transition-opacity hover:bg-background group-hover/carousel:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 opacity-0 transition-opacity hover:bg-background group-hover/carousel:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {normalizedImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(index)
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-background/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const activities: Activity[] = [
  {
    title: "CS238",
    role: "Graduate TA",
    description:
    "Supported Stanford’s graduate course Decision Making Under Uncertainty with Professor Mykel Kochenderfer, helping students navigate topics such as Markov Decision Processes, reinforcement learning, and POMDPs through lectures, office hours, and project mentorship.",
    period: "Sep-Dec 2025",
    link: "https://aa228.stanford.edu/",
  },
  {
    title: "Heidelberg Laureate Forum",
    role: "Scholar",
    description:
      "One of 200 researchers in CS/Math selected to attend the conference. Met laureates like **Vint Cerf**, **Richard Sutton**, and **David Silver**.",
    period: "September 2025",
    image: [
      { src: "/images/vint.jpeg", position: "center top" }, // Adjust position: "center top", "left center", "20% 30%", etc.
      { src: "/images/sutton.jpeg", position: "center 20%" },
      { src: "/images/scene.jpeg", position: "center 80%" },
    ],
    link: "https://www.heidelberg-laureate-forum.org/",
  },
  {
    title: "Second Order Podcast",
    role: "Co-host",
    description: "A podcast unpacking the mental models behind impactful entrepreneurship and leadership with conversations featuring guests like **Elad Gil.**",
    period: "2025 — Present",
    image: "/images/second_order.png",
    link: "https://podcasts.apple.com/us/podcast/second-order/id1817706712", // Add your link here
  },
  {
    title: "Accel Leadership Program",
    role: "Fellow",
    description: "1 of 16 students selected to participate in Stanford's flagship entrepreneurship leadership program. And now TAing ALP 2026!",
    period: "2025",
    image: "/images/ALP.jpg",
    link: "https://stvp.stanford.edu/alp/",
  },
  // {
  //   title: "Guadalupe STEM Initiatives",
  //   role: "Organizer",
  //   description: "Helping career changers learn to code through 1-on-1 mentorship and code reviews.",
  //   period: "2020",
  // },
  // {
  //   title: "Break Digital Divide",
  //   role: "Co-founder",
  //   description: "Helping career changers learn to code through 1-on-1 mentorship and code reviews.",
  //   period: "2020",
  // },
  
]

export function Activities() {
  return (
    <section id="activities" className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24" aria-label="Activities">
      <div className="mx-auto max-w-screen-xl px-6 py-6 md:px-12 md:py-8 lg:px-24">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">Activities</h2>
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">What I&apos;m Involved In</h3>

        <div className="-mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-6 lg:px-6">
          <ul className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/40 items-stretch">
            {activities.map((activity) => (
              <li key={activity.title} className="flex-shrink-0">
                <div className="group relative w-72 rounded-lg bg-card p-6 transition-all hover:bg-card/80 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg sm:w-80 h-[400px] flex flex-col">
                  {activity.link ? (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="absolute inset-0 rounded-lg"
                      aria-label={`View ${activity.title}`}
                    />
                  ) : null}
                  <div className="flex flex-col gap-5 flex-1">
                    {activity.image && (
                      <>
                        {Array.isArray(activity.image) ? (
                          <ImageCarousel images={activity.image} alt={activity.title} />
                        ) : (
                          <div className="relative h-40 w-full overflow-hidden rounded-lg">
                            <Image
                              src={activity.image}
                              alt={activity.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </>
                    )}
                    <div className="flex flex-col gap-3 flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {activity.period}
                      </span>
                      <h4 className="font-medium leading-snug text-foreground">
                        <span className="inline-flex items-center gap-1">
                          {activity.title}
                          {activity.link && (
                            <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                          )}
                        </span>
                        <span className="ml-2 text-primary">· {activity.role}</span>
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground flex-1">{parseBold(activity.description)}</p>
                    </div>
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
