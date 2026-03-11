"use client"

import { motion } from "framer-motion"
import { Cpu, Settings2, Car, Wrench } from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "Diagnostic & Électronique",
    description: "Recherche de pannes complexes, reprogrammation, analyse des capteurs et calculateurs avec des outils de pointe.",
  },
  {
    icon: Settings2,
    title: "Révision & Entretien",
    description: "Vidange, filtres, courroies. Respect strict des préconisations constructeur pour préserver la garantie de votre véhicule.",
  },
  {
    icon: Car,
    title: "Liaison au Sol",
    description: "Pneumatiques premium, freinage haute performance, amortisseurs et réglage géométrie 3D.",
  },
  {
    icon: Wrench,
    title: "Mécanique Lourde",
    description: "Interventions complexes : embrayage, boîte de vitesses, culasse, turbo. Un savoir-faire maîtrisé.",
  }
]

export function Services() {
  return (
    <section className="py-24 bg-background relative" id="expertises">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
            >
              Nos Expertises
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold mb-4"
            >
              Domaines d'Intervention
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted text-lg"
            >
              De l'entretien régulier aux diagnostics électroniques complexes, nous maîtrisons chaque aspect de votre véhicule.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-surface border border-border p-8 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* Abstract decorative shape */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-background border border-border flex items-center justify-center mb-6 text-foreground group-hover:text-primary transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
