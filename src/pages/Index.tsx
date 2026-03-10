import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveCarousel from "@/components/InteractiveCarousel";
import Hero from "@/components/Hero";
import { MotionSection, ScrollRevealWrapper } from "@/components/MotionSection";
import { useStatsAnimation } from "@/hooks/useStatsAnimation";
import { 
  eyebrowVariants, 
  headingVariants, 
  textVariants, 
  staggeredContainer, 
  staggeredCard, 
  imageVariants, 
  statsVariants, 
  ctaVariants 
} from "@/utils/motion";
import cosmetic01 from "@/assets/images/packshots/cosmetic-01.jpg";
import imprimerie from "@/assets/images/imprimerie/imprimerie-01.jpg";
import abstract01 from "@/assets/images/branding/abstract-01.jpg";

const services = [
  { title: "Identité Visuelle", desc: "Logos, chartes graphiques et univers de marque distinctifs." },
  { title: "Photographie Pro", desc: "Packshots, reportages et portraits corporate premium." },
  { title: "Création Web", desc: "Sites vitrines et e-commerce à fort impact visuel." },
  { title: "Direction Artistique", desc: "Conception globale de votre communication visuelle." },
  { title: "Supports Print", desc: "Brochures, catalogues et supports de communication." },
];

const Index = () => {
  // Stats animation hooks
  const projectsCount = useStatsAnimation({ endValue: 150, suffix: "+" });
  const satisfactionCount = useStatsAnimation({ endValue: 98, suffix: "%" });
  const yearsCount = useStatsAnimation({ endValue: 8, suffix: "+" });
  const companiesCount = useStatsAnimation({ endValue: 50, suffix: "+" });

  return (
    <Layout>
      {/* SEO */}
      <title>Pixora — Studio Image & Digital | Haute-Loire</title>
      <meta name="description" content="Pixora, studio image et digital en Haute-Loire. Identité visuelle, photographie professionnelle, création de site internet. Transformez votre image en levier de croissance." />

      {/* HERO - Premium Cinematic */}
      <Hero />

      {/* STATS */}
      <MotionSection className="section-padding py-24 md:py-32 border-y border-border/30 bg-gradient-to-b from-transparent via-[hsl(240,10%,6%)] to-transparent" parallaxSpeed="slow">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8"
          variants={staggeredContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          <motion.div ref={projectsCount.ref} className="text-center" variants={statsVariants}>
            <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight">{projectsCount.displayValue}</div>
            <div className="text-base md:text-lg text-muted-foreground mt-3 font-medium">Projets réalisés</div>
          </motion.div>
          <motion.div ref={satisfactionCount.ref} className="text-center" variants={statsVariants}>
            <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight">{satisfactionCount.displayValue}</div>
            <div className="text-base md:text-lg text-muted-foreground mt-3 font-medium">Clients satisfaits</div>
          </motion.div>
          <motion.div ref={yearsCount.ref} className="text-center" variants={statsVariants}>
            <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight">{yearsCount.displayValue}</div>
            <div className="text-base md:text-lg text-muted-foreground mt-3 font-medium">Années d'expertise</div>
          </motion.div>
          <motion.div ref={companiesCount.ref} className="text-center" variants={statsVariants}>
            <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight">{companiesCount.displayValue}</div>
            <div className="text-base md:text-lg text-muted-foreground mt-3 font-medium">Entreprises accompagnées</div>
          </motion.div>
        </motion.div>
      </MotionSection>

      {/* SERVICES PREVIEW */}
      <MotionSection className="section-padding py-36 md:py-44">
        <ScrollRevealWrapper variants={eyebrowVariants}>
          <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Expertises</span>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper variants={headingVariants}>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mt-4 tracking-tight">
            Nos services<span className="text-primary">.</span>
          </h2>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper variants={textVariants}>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            Des solutions créatives sur mesure pour renforcer votre image de marque.
          </p>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper variants={ctaVariants}>
          <Link to="/services" className="hidden md:flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors group">
            Tous les services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollRevealWrapper>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={staggeredContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={staggeredCard}>
              <div className="card-glass p-10 md:p-12 min-h-[280px] group hover:border-primary/40 transition-all duration-500 flex flex-col">
                <div className="w-3 h-3 rounded-full bg-primary mb-8 group-hover:shadow-[0_0_20px_hsl(75,100%,50%,0.5)] transition-shadow duration-500" />
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">{service.title}</h3>
                <p className="text-base md:text-lg text-[hsl(0,0%,60%)] leading-relaxed flex-grow">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </MotionSection>

      {/* SHOWCASE GRID */}
      <MotionSection className="section-padding py-36 md:py-44" parallaxSpeed="slow">
        <ScrollRevealWrapper variants={eyebrowVariants}>
          <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Portfolio</span>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper variants={headingVariants}>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mt-4 mb-20 tracking-tight">
            Projets récents<span className="text-primary">.</span>
          </h2>
        </ScrollRevealWrapper>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggeredContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
        >
          <motion.div variants={imageVariants}>
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-2xl shadow-black/50">
              <motion.img 
                src={cosmetic01} 
                alt="Packshot cosmétique premium" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy" 
                variants={imageVariants}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">Photographie</span>
                <h3 className="font-heading text-3xl font-bold text-foreground mt-2 tracking-tight">Packshot Premium</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={imageVariants}>
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-2xl shadow-black/50">
              <motion.img 
                src={imprimerie} 
                alt="Reportage photo imprimerie" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy" 
                variants={imageVariants}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">Reportage</span>
                <h3 className="font-heading text-3xl font-bold text-foreground mt-2 tracking-tight">Imprimerie Industrielle</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={imageVariants} className="md:col-span-2">
            <div className="group relative overflow-hidden rounded-xl aspect-[21/9] shadow-2xl shadow-black/50">
              <motion.img 
                src={abstract01} 
                alt="Direction artistique branding" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy" 
                variants={imageVariants}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">Branding</span>
                <h3 className="font-heading text-3xl font-bold text-foreground mt-2 tracking-tight">Identité Visuelle</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </MotionSection>

      {/* CAROUSEL */}
      <InteractiveCarousel />

      {/* CTA */}
      <MotionSection className="section-padding py-36 md:py-44">
        <ScrollRevealWrapper variants={headingVariants}>
          <div className="relative card-glass p-16 md:p-24 lg:p-32 text-center overflow-hidden rounded-2xl border border-border/60">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
            <div className="relative max-w-3xl mx-auto">
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Prêt à transformer
                <br />
                <span className="text-gradient-accent">votre image ?</span>
              </h2>
              <p className="text-lg md:text-xl text-[hsl(0,0%,55%)] mt-8 max-w-xl mx-auto leading-relaxed">
                Discutons de votre projet et trouvons ensemble la meilleure stratégie
                pour valoriser votre image.
              </p>
              <ScrollRevealWrapper variants={ctaVariants}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 mt-10 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-sm hover:shadow-[0_0_50px_hsl(75,100%,50%,0.3)] transition-all duration-300"
                >
                  Démarrer mon projet <ArrowRight size={20} />
                </Link>
              </ScrollRevealWrapper>
            </div>
          </div>
        </ScrollRevealWrapper>
      </MotionSection>
    </Layout>
  );
};

export default Index;
