import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Hero } from "@/sections/Hero"
import { Values } from "@/sections/Values"
import { Services } from "@/sections/Services"
import { Atelier } from "@/sections/Atelier"
import { Process } from "@/sections/Process"
import { Testimonials } from "@/sections/Testimonials"
import { CTA } from "@/sections/CTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white flex flex-col">
      <Navbar />
      <Hero />
      <Values />
      <Services />
      <Atelier />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
