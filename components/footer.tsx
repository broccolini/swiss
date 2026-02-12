import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full pb-16 pt-12">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Contact</h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="mailto:nbalamuru@gmail.com"
              className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">nbalamuru@gmail.com</span>
            </a>
            <a
              href="https://github.com/nehabalamurugan"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/neha-balamurugan-8455981b1/"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
