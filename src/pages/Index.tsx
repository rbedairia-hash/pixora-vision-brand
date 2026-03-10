import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveCarousel from "@/components/InteractiveCarousel";
import Hero from "@/components/Hero";
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

const stats = [
  { value: "150+", label: "Projets réalisés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "8+", label: "Années d'expertise" },
  { value: "50+", label: "Entreprises accompagnées" },
];

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Pixora — Studio Image & Digital | Haute-Loire</title>
      <meta name="description" content="Pixora, studio image et digital en Haute-Loire. Identité visuelle, photographie professionnelle, création de site internet. Transformez votre image en levier de croissance." />

      {/* HERO - Premium Cinematic */}
      <Hero />

      {/* STATS */}
      <section className="section-padding py-20 border-y border-border/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-padding py-32">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-widest">Expertises</span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3">
                Nos services<span className="text-primary">.</span>
              </h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              Tous les services <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
              <div className="card-glass p-8 group hover:border-primary/30 transition-all duration-500">
                <div className="w-2 h-2 rounded-full bg-primary mb-6 group-hover:shadow-[var(--shadow-glow)] transition-shadow" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SHOWCASE GRID */}
      <section className="section-padding py-32">
        <ScrollReveal>
          <span className="text-xs font-medium text-primary uppercase tracking-widest">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-16">
            Projets récents<span className="text-primary">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal direction="left">
            <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img src={cosmetic01} alt="Packshot cosmétique premium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs text-primary uppercase tracking-widest">Photographie</span>
                <h3 className="font-heading text-2xl font-bold text-foreground">Packshot Premium</h3>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img src={imprimerie} alt="Reportage photo imprimerie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs text-primary uppercase tracking-widest">Reportage</span>
                <h3 className="font-heading text-2xl font-bold text-foreground">Imprimerie Industrielle</h3>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" className="md:col-span-2">
            <div className="group relative overflow-hidden rounded-lg aspect-[21/9]">
              <img src={abstract01} alt="Direction artistique branding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs text-primary uppercase tracking-widest">Branding</span>
                <h3 className="font-heading text-2xl font-bold text-foreground">Identité Visuelle</h3>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CAROUSEL */}
      <InteractiveCarousel />

      {/* CTA */}
      <section className="section-padding py-32">
        <ScrollReveal>
          <div className="relative card-glass p-16 md:p-24 text-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
            <div className="relative">
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
                Prêt à transformer
                <br />
                <span className="text-gradient-accent">votre image ?</span>
              </h2>
              <p className="text-muted-foreground mt-6 max-w-lg mx-auto">
                Discutons de votre projet et trouvons ensemble la meilleure stratégie
                pour valoriser votre image.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:shadow-[var(--shadow-glow-strong)] transition-all duration-300"
              >
                Démarrer mon projet <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Index;
