import { Sidebar } from "@/components/sidebar"
import { Timeline } from "@/components/timeline"
import { Projects } from "@/components/projects"
import { Thoughts } from "@/components/thoughts"
import { Activities } from "@/components/activities"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Two-column section: Sidebar + Timeline */}
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <Timeline />
          </main>
        </div>
      </div>

      {/* Full-width sections */}
      <div className="w-full">
        <Projects />
        <Activities />
        <Thoughts />
        <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
          <Footer />
        </div>
      </div>

      {/* Sticky bottom navigation */}
      <BottomNav />
    </div>
  )
}
