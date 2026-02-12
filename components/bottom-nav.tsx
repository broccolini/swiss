"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Timeline", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Activities", href: "#activities" },
  { name: "Thoughts", href: "#thoughts" },
]

export function BottomNav() {
  const [activeSection, setActiveSection] = useState("timeline")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" },
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <ul className="flex items-center justify-center gap-8 py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                className="group flex flex-col items-center gap-1 py-2"
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
              >
                <span
                  className={cn(
                    "h-1 w-8 bg-muted-foreground transition-all group-hover:w-12 group-hover:bg-foreground",
                    activeSection === item.href.slice(1) && "w-12 bg-foreground",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground",
                    activeSection === item.href.slice(1) && "text-foreground",
                  )}
                >
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

