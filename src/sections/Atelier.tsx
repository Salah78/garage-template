"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Atelier() {
  return (
    <section className="py-24 bg-surface" id="atelier">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative mt-12 bg-background border border-border flex items-center justify-center"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" 
                  alt="Outils de précision alignés" 
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative bg-background border border-border flex items-center justify-center"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1632823462949-0639e44d32a0?auto=format&fit=crop&q=80&w=800" 
                  alt="Mécanicien concentré" 
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent mix-blend-overlay" />
              </motion.div>
            </div>
            {/* Decorative element */}
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
            >
              Le Savoir-Faire
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold mb-6"
            >
              L'Art du Détail.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-muted text-lg"
            >
              <p>
                Nous croyons que la propreté de l'atelier reflète la qualité du travail sous le capot. 
                Chez Exigence, chaque véhicule est traité avec la plus grande rigueur, dans un environnement pensé pour l'excellence mécanique.
              </p>
              <p>
                Pas de précipitation, pas de diagnostic approximatif. Nous prenons le temps de comprendre, de tester et de réparer selon les normes les plus strictes de l'industrie.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 grid grid-cols-2 gap-6"
            >
              <div>
                <p className="text-4xl font-heading font-bold text-foreground mb-1">15<span className="text-primary">+</span></p>
                <p className="text-sm text-muted">Années d'expertise</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-foreground mb-1">100<span className="text-primary">%</span></p>
                <p className="text-sm text-muted">Pièces garanties</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
