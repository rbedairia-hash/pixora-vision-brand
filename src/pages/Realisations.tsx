import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveCarousel from "@/components/InteractiveCarousel";

import cosmetic01 from "@/assets/images/packshots/cosmetic-01.jpg";
import cosmetic02 from "@/assets/images/packshots/cosmetic-02.jpg";
import imprimerie from "@/assets/images/imprimerie/imprimerie-01.jpg";
import abstract01 from "@/assets/images/branding/abstract-01.jpg";
import abstract02 from "@/assets/images/branding/abstract-02.jpg";
import entreprise from "@/assets/images/studio/entreprise-01.jpg";

const projects = [
  {
    image: cosmetic01,
    title: "Gamme Cosmétique Premium",
    category: "Photographie produit",
    context: "Une marque de cosmétiques souhaitait repositionner sa gamme sur le segment premium.",
    solution: "Packshots studio avec éclairage dramatique et post-production haut de gamme.",
  },
  {
    image: imprimerie,
    title: "Imprimerie Régionale",
    category: "Reportage & Identité",
    context: "Un imprimeur centenaire avait besoin de moderniser son image sans perdre son héritage.",
    solution: "Reportage immersif en atelier et refonte complète de l'identité visuelle.",
  },
  {
    image: abstract01,
    title: "Start-up Technologique",
    category: "Branding complet",
    context: "Une jeune entreprise tech cherchait à se positionner comme leader de son marché.",
    solution: "Création d'un univers de marque distinctif avec direction artistique complète.",
  },
  {
    image: entreprise,
    title: "Groupe Industriel B2B",
    category: "Communication corporate",
    context: "Un groupe industriel souhaitait renforcer sa crédibilité auprès de grands comptes.",
    solution: "Portraits dirigeants, reportage sites de production et supports corporate premium.",
  },
  {
    image: cosmetic02,
    title: "Maison de Parfum",
    category: "Photographie & Direction Artistique",
    context: "Lancement d'une nouvelle fragrance nécessitant un positionnement ultra-premium.",
    solution: "Direction artistique complète du shooting produit et campagne visuelle.",
  },
  {
    image: abstract02,
    title: "Agence Immobilière",
    category: "Identité & Web",
    context: "Repositionnement d'une agence immobilière sur le marché du prestige.",
    solution: "Nouvelle identité visuelle et site web immersif avec galeries interactives.",
  },
];

const Realisations = () => (
  <Layout>
    <title>Réalisations — Pixora Studio Image & Digital</title>
    <meta name="description" content="Découvrez les projets réalisés par Pixora : photographie professionnelle, identité visuelle, branding, sites internet pour PME et entreprises en Haute-Loire." />

    <section className="section-padding pt-32 pb-20">
      <ScrollReveal>
        <span className="text-xs font-medium text-primary uppercase tracking-widest">Portfolio</span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mt-4">
          Nos<br />
          <span className="text-gradient-accent">réalisations</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          Chaque projet est une collaboration unique. Découvrez comment nous avons aidé nos clients
          à transformer leur image.
        </p>
      </ScrollReveal>
    </section>

    <section className="section-padding pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-xs font-medium text-primary uppercase tracking-widest">{project.category}</span>
              <h2 className="font-heading text-2xl font-bold text-foreground mt-2 mb-3">{project.title}</h2>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground"><span className="text-text-secondary font-medium">Contexte :</span> {project.context}</p>
                <p className="text-sm text-muted-foreground"><span className="text-text-secondary font-medium">Solution :</span> {project.solution}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <InteractiveCarousel />
  </Layout>
);

export default Realisations;
