"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Accueil & Écoute",
    description: "Vous nous confiez votre véhicule. Nous prenons le temps d'écouter vos ressentis et de comprendre le contexte."
  },
  {
    number: "02",
    title: "Diagnostic Précis",
    description: "Nous identifions la source exacte du problème à l'aide de notre équipement de diagnostic électronique et mécanique."
  },
  {
    number: "03",
    title: "Devis Transparent",
    description: "Explication claire des solutions. Aucune intervention n'est réalisée sans votre accord écrit préalable."
  },
  {
    number: "04",
    title: "Intervention Maîtrisée",
    description: "Réparation experte selon les normes en vigueur, avec des pièces d'origine ou de qualité équivalente."
  },
  {
    number: "05",
    title: "Restitution Sereine",
    description: "Nous vous expliquons les travaux réalisés et vous reprenez la route en toute sécurité."
  }
]

export function Process() {
  return (
    <section className="py-24 bg-background border-b border-border" id="process">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            Un Processus <span className="text-primary">Sans Faille.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg"
          >
            Nous avons éliminé l'incertitude. Voici comment nous prenons soin de vous et de votre véhicule.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className={`flex-1 md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-surface border border-border p-6 rounded-2xl hover:border-primary/30 transition-colors">
                    <span className="text-primary font-heading font-bold text-xl mb-2 block">{step.number}.</span>
                    <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted">{step.description}</p>
                  </div>
                </div>

                {/* Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-background border-4 border-surface flex items-center justify-center shrink-0 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>

                {/* Empty Side for layout */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
