import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import studio01 from "@/assets/images/studio/studio-01.jpg";
import heroBg from "@/assets/images/hero/hero-bg.jpg";

const steps = [
  { num: "01", title: "Écoute & Diagnostic", desc: "Nous analysons votre situation, vos objectifs et votre marché pour identifier les leviers visuels les plus pertinents." },
  { num: "02", title: "Stratégie & Conception", desc: "Nous définissons une direction artistique claire et un plan d'action adapté à vos enjeux business." },
  { num: "03", title: "Production & Création", desc: "Nos experts conçoivent et produisent vos supports avec un niveau d'exigence premium." },
  { num: "04", title: "Livraison & Suivi", desc: "Nous vous accompagnons dans le déploiement et mesurons l'impact de nos interventions." },
];

const values = [
  { title: "Exigence", desc: "Chaque détail compte. Nous ne livrons que des projets dont nous sommes fiers." },
  { title: "Stratégie", desc: "L'image au service du business. Chaque choix créatif est guidé par vos objectifs." },
  { title: "Proximité", desc: "Un interlocuteur dédié, une relation de confiance et un suivi personnalisé." },
];

const StudioPage = () => (
  <Layout>
    <title>Studio — Pixora, Studio Image & Digital en Haute-Loire</title>
    <meta name="description" content="Découvrez Pixora, studio image et digital en Haute-Loire. Notre vision, notre approche créative et notre méthode de travail pour transformer votre image." />

    <section className="section-padding pt-32 pb-20">
      <ScrollReveal>
        <span className="text-xs font-medium text-primary uppercase tracking-widest">Le studio</span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mt-4">
          L'image comme<br />
          <span className="text-gradient-accent">outil stratégique</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          Pixora est un studio image et digital basé en Haute-Loire. Nous croyons que l'image
          de marque est le premier levier de crédibilité et de croissance pour les PME.
        </p>
      </ScrollReveal>
    </section>

    {/* Vision */}
    <section className="section-padding pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
            <img src={studio01} alt="Studio Pixora" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Notre vision<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Trop d'entreprises sous-estiment l'impact de leur image. Un visuel médiocre,
            un site vieillissant ou une identité incohérente envoient le mauvais message
            à vos clients et prospects.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Chez Pixora, nous croyons que chaque entreprise mérite une image à la hauteur
            de son savoir-faire. C'est pourquoi nous combinons direction artistique,
            expertise technique et compréhension business.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Notre mission : faire de votre image un véritable avantage concurrentiel.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding py-32 border-y border-border/20">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-16">
          Nos valeurs<span className="text-primary">.</span>
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <ScrollReveal key={i} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 0.1}>
            <div className="card-glass p-8">
              <div className="glow-dot mb-6" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Method */}
    <section className="section-padding py-32">
      <ScrollReveal>
        <span className="text-xs font-medium text-primary uppercase tracking-widest">Méthodologie</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-16">
          Notre méthode<span className="text-primary">.</span>
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, i) => (
          <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
            <div className="card-glass p-8 group hover:border-primary/30 transition-all duration-500">
              <span className="font-heading text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{step.num}</span>
              <h3 className="font-heading text-xl font-semibold text-foreground mt-4 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding pb-32">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-lg">
          <img src={heroBg} alt="Studio Pixora" className="w-full h-64 md:h-80 object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70 flex items-center">
            <div className="section-padding">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Envie de travailler ensemble ?
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:shadow-[var(--shadow-glow-strong)] transition-all duration-300"
              >
                Nous contacter <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </Layout>
);

export default StudioPage;
