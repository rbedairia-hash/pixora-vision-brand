import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Identité Visuelle",
    problem: "Votre entreprise n'a pas d'image de marque cohérente et professionnelle.",
    solution: "Nous créons votre logo, votre charte graphique et votre univers visuel complet.",
    benefit: "Une identité forte qui inspire confiance et vous distingue de la concurrence.",
    icon: "◆",
  },
  {
    title: "Photographie Professionnelle",
    problem: "Vos visuels ne reflètent pas la qualité de vos produits ou services.",
    solution: "Packshots, reportages et portraits corporate avec un éclairage et un cadrage premium.",
    benefit: "Des images impactantes qui valorisent votre activité à chaque point de contact.",
    icon: "◉",
  },
  {
    title: "Création de Site Internet",
    problem: "Votre site web est vieillissant, lent ou ne convertit pas.",
    solution: "Conception et développement de sites vitrines et e-commerce modernes, rapides et optimisés SEO.",
    benefit: "Un site qui travaille pour vous 24/7 et génère des demandes qualifiées.",
    icon: "⬡",
  },
  {
    title: "Direction Artistique",
    problem: "Vos supports de communication manquent de cohérence et d'impact.",
    solution: "Nous pilotons l'ensemble de votre communication visuelle avec une vision globale.",
    benefit: "Une image de marque maîtrisée qui renforce votre crédibilité à chaque interaction.",
    icon: "△",
  },
  {
    title: "Supports de Communication",
    problem: "Vos brochures, catalogues et documents ne valorisent pas votre offre.",
    solution: "Conception de supports print et digitaux alignés sur votre identité de marque.",
    benefit: "Des outils de vente professionnels qui soutiennent votre argumentaire commercial.",
    icon: "□",
  },
];

const Services = () => (
  <Layout>
    <title>Services — Pixora Studio Image & Digital</title>
    <meta name="description" content="Identité visuelle, photographie professionnelle, création de site internet, direction artistique. Pixora, studio créatif en Haute-Loire." />

    <section className="section-padding pt-32 pb-20">
      <ScrollReveal>
        <span className="text-xs font-medium text-primary uppercase tracking-widest">Nos expertises</span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mt-4">
          Des solutions<br />
          <span className="text-gradient-accent">sur mesure</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          Chaque service est pensé pour répondre à un besoin précis et générer un impact mesurable sur votre activité.
        </p>
      </ScrollReveal>
    </section>

    <section className="section-padding pb-32">
      <div className="space-y-8">
        {services.map((service, i) => (
          <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
            <div className="card-glass p-8 md:p-12 group hover:border-primary/30 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="text-4xl text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">{service.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xs font-medium text-primary uppercase tracking-widest mb-2">Le problème</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-primary uppercase tracking-widest mb-2">Notre solution</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-primary uppercase tracking-widest mb-2">Le bénéfice</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-16 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:shadow-[var(--shadow-glow-strong)] transition-all duration-300"
        >
          Discuter de votre projet <ArrowRight size={18} />
        </Link>
      </ScrollReveal>
    </section>
  </Layout>
);

export default Services;
