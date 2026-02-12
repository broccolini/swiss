"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const socials = [
  { name: "GitHub", href: "https://github.com/nehabalamurugan", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/neha-balamurugan-8455981b1/", icon: Linkedin },
  { name: "Email", href: "mailto:nbalamuru@gmail.com", icon: Mail },
]

export function Sidebar() {

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Neha Balamurugan</h1>
        
        {/* Social Media Icons */}
        <ul className="ml-1 mt-4 flex items-center gap-6" aria-label="Social media">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                className="block text-primary hover:text-primary/80 transition-colors"
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${social.name} (opens in a new tab)`}
              >
                <social.icon className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
        
        {/* Profile Image */}
        <div className="mt-6">
          <Image
            src="/images/IMG_0637.JPG"
            alt="Neha Balamurugan"
            width={500}
            height={300}
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* Bio and Pronunciation */}
        <div className="mt-6 space-y-4 max-w-[500px]">
          <p className="leading-relaxed text-muted-foreground">
            Hi, I&apos;m Neha 👋🏾 [NAY-ha] (she/her/hers)
          </p>
          <p className="leading-relaxed text-muted-foreground">
          I build and study intelligent systems that help people equitably reason, learn, and create. Here, I share the work and ideas that keep me curious!
          </p>
      
          
          {/* Tags for things I care about */}
          <div className="pt-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Things I care about:
            </p>
            <ul className="flex flex-wrap gap-2">
            <li>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Human AI Alignment
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Educational Equity
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Femtech
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Science Integrity
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
