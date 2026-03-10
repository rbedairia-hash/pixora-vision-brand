import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { MotionSection, ScrollRevealWrapper } from "@/components/MotionSection";
import { 
  eyebrowVariants, 
  headingVariants, 
  textVariants, 
  staggeredContainer, 
  staggeredCard, 
  ctaVariants 
} from "@/utils/motion";

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

    <MotionSection className="section-padding pt-32 pb-24">
      <ScrollRevealWrapper variants={eyebrowVariants}>
        <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Nos expertises</span>
      </ScrollRevealWrapper>
      <ScrollRevealWrapper variants={headingVariants}>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mt-5 tracking-tight">
          Des solutions<br />
          <span className="text-gradient-accent">sur mesure</span>
        </h1>
      </ScrollRevealWrapper>
      <ScrollRevealWrapper variants={textVariants}>
        <p className="text-lg md:text-xl text-[hsl(0,0%,55%)] mt-8 max-w-2xl leading-relaxed">
          Chaque service est pensé pour répondre à un besoin précis et générer un impact mesurable sur votre activité.
        </p>
      </ScrollRevealWrapper>
    </MotionSection>

    <MotionSection className="section-padding pb-36 md:pb-44">
      <motion.div 
        className="space-y-10"
        variants={staggeredContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
      >
        {services.map((service, i) => (
          <motion.div key={i} variants={staggeredCard}>
            <div className="card-glass p-10 md:p-14 lg:p-16 group hover:border-primary/40 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-10 items-start">
                <div className="text-5xl md:text-6xl text-primary opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  {service.icon}
                </div>
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight">{service.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-3">Le problème</h3>
                      <p className="text-base text-[hsl(0,0%,55%)] leading-relaxed">{service.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-3">Notre solution</h3>
                      <p className="text-base text-[hsl(0,0%,55%)] leading-relaxed">{service.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-3">Le bénéfice</h3>
                      <p className="text-base text-[hsl(0,0%,55%)] leading-relaxed">{service.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <ScrollRevealWrapper variants={ctaVariants}>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-sm hover:shadow-[0_0_50px_hsl(75,100%,50%,0.3)] transition-all duration-300"
        >
          Discuter de votre projet <ArrowRight size={20} />
        </Link>
      </ScrollRevealWrapper>
    </MotionSection>
  </Layout>
);

export default Services;
