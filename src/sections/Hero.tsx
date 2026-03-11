"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/Button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with image and dark/metallic vibe */}
      <div className="absolute inset-0 z-0 bg-background">
        <Image 
          src="https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&q=80&w=2000"
          alt="Atelier automobile premium"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(234,88,12,0.05),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_#09090b_100%)] opacity-90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted tracking-wider uppercase">Atelier Premium</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-foreground mb-6"
          >
            L'Exigence Mécanique.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">La Confiance en Plus.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl mb-10"
          >
            Entretien, diagnostic et réparation automobile. Un savoir-faire de précision pour votre sécurité au quotidien, sans compromis.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto group">
              Prendre Rendez-vous
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Découvrir notre expertise
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted uppercase tracking-widest">Défiler</span>
        <ChevronDown className="h-5 w-5 text-muted animate-bounce" />
      </motion.div>
    </section>
  )
}
