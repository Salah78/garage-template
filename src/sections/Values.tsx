"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Crosshair, Users } from "lucide-react"

const values = [
  {
    icon: ShieldCheck,
    title: "Transparence Absolue",
    description: "Aucune intervention sans votre accord. Des devis clairs, détaillés et expliqués pas à pas."
  },
  {
    icon: Crosshair,
    title: "Précision Technique",
    description: "Équipements de diagnostic de pointe et outillage de haute qualité, pour toutes les marques."
  },
  {
    icon: Users,
    title: "Engagement Local",
    description: "Votre garage de proximité. Nous connaissons votre véhicule et nous valorisons la relation humaine."
  }
]

export function Values() {
  return (
    <section className="py-24 bg-surface border-y border-border" id="valeurs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Au-delà de la réparation, <span className="text-primary">la tranquillité d'esprit.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted"
          >
            Nous avons repensé l'expérience au garage pour éliminer le stress et l'incertitude.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="h-12 w-12 rounded-xl bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
              <p className="text-muted leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
