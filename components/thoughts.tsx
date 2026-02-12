import { ArrowUpRight } from "lucide-react"

type Thought = {
  title: string
  preview: string
  date: string
  link?: string
}

const thoughts: Thought[] = [
  {
    title: "Software for Hardware Market",
    preview: "Why software for hardware is the new industrial revolution, and companies to watch in the space.",
    date: "Dec 2025",
    link: "https://nehabalamurugan.substack.com/p/software-for-hardware-the-new-industrial",
  },
]

export function Thoughts() {
  return (
    <section id="thoughts" className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24" aria-label="Thoughts">
      <div className="mx-auto max-w-screen-xl px-6 py-6 md:px-12 md:py-8 lg:px-24">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">Thoughts</h2>
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
          What I&apos;m Thinking About
        </h3>

        <div className="-mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-6 lg:px-6">
          <ul className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/40">
            {thoughts.map((thought) => (
              <li key={thought.title} className="flex-shrink-0">
                <div className="group relative w-72 rounded-lg bg-card p-5 transition-all hover:bg-card/80 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg sm:w-80">
                  {thought.link ? (
                    <a
                      href={thought.link}
                      className="absolute inset-0 rounded-lg"
                      aria-label={`Read ${thought.title}`}
                    />
                  ) : null}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {thought.date}
                    </span>
                    <h4 className="mt-1 font-medium leading-snug text-foreground">
                      <span className="inline-flex items-center gap-1">
                        {thought.title}
                        {thought.link && (
                          <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                        )}
                      </span>
                    </h4>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{thought.preview}</p>
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
