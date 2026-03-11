"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "./Button"
import { Wrench, Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center border border-border group-hover:border-primary transition-colors">
              <Wrench className="h-5 w-5 text-primary" />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-foreground">
              Exigence<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#expertises" className="text-sm font-medium text-muted hover:text-primary transition-colors">Expertises</a>
            <a href="#atelier" className="text-sm font-medium text-muted hover:text-primary transition-colors">L'Atelier</a>
            <a href="#process" className="text-sm font-medium text-muted hover:text-primary transition-colors">Méthode</a>
            <a href="#temoignages" className="text-sm font-medium text-muted hover:text-primary transition-colors">Témoignages</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm font-medium text-muted hidden lg:inline-block">01 23 45 67 89</span>
            <Button size="sm">Rendez-vous</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border p-4 flex flex-col gap-4 shadow-xl">
          <a href="#expertises" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMobileMenuOpen(false)}>Expertises</a>
          <a href="#atelier" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMobileMenuOpen(false)}>L'Atelier</a>
          <a href="#process" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMobileMenuOpen(false)}>Méthode</a>
          <a href="#temoignages" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMobileMenuOpen(false)}>Témoignages</a>
          <div className="pt-4 border-t border-border flex flex-col gap-4">
            <span className="text-sm font-medium text-muted text-center">Appeler le 01 23 45 67 89</span>
            <Button className="w-full">Prendre Rendez-vous</Button>
          </div>
        </div>
      )}
    </header>
  )
}
