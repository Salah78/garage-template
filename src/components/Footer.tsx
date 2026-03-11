import { Wrench, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                <Wrench className="h-5 w-5 text-primary" />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                Exigence<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-muted text-sm mt-4 max-w-xs">
              L'excellence mécanique au service de votre sérénité. Un savoir-faire technique pour toutes les marques.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-foreground mb-2">Contact</h4>
            <div className="flex items-start gap-3 text-sm text-muted">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <p>123 Avenue de la Mécanique<br/>75011 Paris, France</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <p>01 23 45 67 89</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <p>contact@exigence-auto.fr</p>
            </div>
          </div>

          {/* Horaires */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-foreground mb-2">Horaires d'Ouverture</h4>
            <div className="flex items-start gap-3 text-sm text-muted">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <ul className="space-y-2">
                <li className="flex justify-between w-48"><span className="text-foreground">Lundi - Vendredi</span> <span>08:00 - 18:00</span></li>
                <li className="flex justify-between w-48"><span className="text-foreground">Samedi</span> <span>09:00 - 12:00</span></li>
                <li className="flex justify-between w-48"><span className="text-foreground">Dimanche</span> <span>Fermé</span></li>
              </ul>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-foreground mb-2">Liens Utiles</h4>
            <ul className="space-y-2 text-sm text-muted flex flex-col items-start">
              <li><a href="#" className="hover:text-primary transition-colors">Prendre un rendez-vous</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Demander un devis</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Exigence Auto. Tous droits réservés.</p>
          <p>Conçu pour l'excellence.</p>
        </div>
      </div>
    </footer>
  )
}
