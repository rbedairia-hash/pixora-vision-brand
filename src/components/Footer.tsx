import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/30 bg-background">
    <div className="section-padding py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            PIXORA<span className="text-primary">.</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Studio image et digital. Nous transformons votre image en levier de croissance.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">Navigation</h4>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Accueil" },
              { to: "/services", label: "Services" },
              { to: "/realisations", label: "Réalisations" },
              { to: "/studio", label: "Studio" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">Contact</h4>
          <p className="text-sm text-muted-foreground">Haute-Loire, France</p>
          <p className="text-sm text-muted-foreground mt-1">contact@pixora.fr</p>
          <Link
            to="/contact"
            className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:shadow-[var(--shadow-glow)] transition-shadow"
          >
            Démarrer un projet
          </Link>
        </div>
      </div>
      <div className="glow-line mt-16 mb-6" />
      <p className="text-xs text-text-tertiary text-center">
        © {new Date().getFullYear()} Pixora. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
