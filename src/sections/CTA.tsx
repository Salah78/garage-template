"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/Button"
import { PhoneCall, Calendar } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_rgba(234,88,12,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_rgba(234,88,12,0.1),_transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-surface border border-border rounded-3xl p-8 md:p-16 text-center shadow-2xl overflow-hidden relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Prêt à confier votre véhicule à des <span className="text-primary">experts</span> ?
            </h2>
            <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour un diagnostic complet ou pour planifier votre prochain entretien. Une équipe à votre écoute.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 group">
                <PhoneCall className="mr-2 h-5 w-5" />
                Appeler le 01 23 45 67 89
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 bg-background">
                <Calendar className="mr-2 h-5 w-5" />
                Réserver un créneau
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
