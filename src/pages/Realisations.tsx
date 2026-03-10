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

    <section className="section-padding pt-32 pb-24">
      <ScrollReveal>
        <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Portfolio</span>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mt-5 tracking-tight">
          Nos<br />
          <span className="text-gradient-accent">réalisations</span>
        </h1>
        <p className="text-lg md:text-xl text-[hsl(0,0%,55%)] mt-8 max-w-2xl leading-relaxed">
          Chaque projet est une collaboration unique. Découvrez comment nous avons aidé nos clients
          à transformer leur image.
        </p>
      </ScrollReveal>
    </section>

    <section className="section-padding pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-8 shadow-2xl shadow-black/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">{project.category}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-5 tracking-tight">{project.title}</h2>
              <div className="space-y-3">
                <p className="text-base text-[hsl(0,0%,55%)] leading-relaxed"><span className="text-[hsl(0,0%,70%)] font-medium">Contexte :</span> {project.context}</p>
                <p className="text-base text-[hsl(0,0%,55%)] leading-relaxed"><span className="text-[hsl(0,0%,70%)] font-medium">Solution :</span> {project.solution}</p>
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
