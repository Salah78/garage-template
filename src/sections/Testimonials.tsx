"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-24 bg-surface" id="temoignages">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6 text-primary"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <Quote className="absolute -top-10 -left-10 h-20 w-20 text-primary/10 rotate-180 -z-10" />
            <blockquote className="text-2xl md:text-4xl font-heading font-medium leading-tight text-foreground mb-8">
              "C'est la première fois que je sors d'un garage en ayant tout compris à la facture. Un professionnalisme rare et un atelier d'une propreté clinique. Ils ont gagné ma confiance."
            </blockquote>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="h-14 w-14 rounded-full bg-background border border-border flex items-center justify-center font-heading font-bold text-lg text-primary">
              MD
            </div>
            <div>
              <p className="font-bold text-foreground">Marc D.</p>
              <p className="text-sm text-muted">Client fidèle depuis 2 ans</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
