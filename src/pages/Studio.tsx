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

    <section className="section-padding pt-32 pb-24">
      <ScrollReveal>
        <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Le studio</span>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mt-5 tracking-tight">
          L'image comme<br />
          <span className="text-gradient-accent">outil stratégique</span>
        </h1>
        <p className="text-lg md:text-xl text-[hsl(0,0%,55%)] mt-8 max-w-2xl leading-relaxed">
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
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
            Notre vision<span className="text-primary">.</span>
          </h2>
          <p className="text-lg text-[hsl(0,0%,55%)] leading-relaxed mb-6">
            Trop d'entreprises sous-estiment l'impact de leur image. Un visuel médiocre,
            un site vieillissant ou une identité incohérente envoient le mauvais message
            à vos clients et prospects.
          </p>
          <p className="text-lg text-[hsl(0,0%,55%)] leading-relaxed mb-6">
            Chez Pixora, nous croyons que chaque entreprise mérite une image à la hauteur
            de son savoir-faire. C'est pourquoi nous combinons direction artistique,
            expertise technique et compréhension business.
          </p>
          <p className="text-lg text-[hsl(0,0%,55%)] leading-relaxed">
            Notre mission : faire de votre image un véritable avantage concurrentiel.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding py-36 md:py-44 border-y border-border/30 bg-gradient-to-b from-transparent via-[hsl(240,10%,6%)] to-transparent">
      <ScrollReveal>
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-20 tracking-tight">
          Nos valeurs<span className="text-primary">.</span>
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {values.map((v, i) => (
          <ScrollReveal key={i} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 0.1}>
            <div className="card-glass p-10 md:p-12 min-h-[280px]">
              <div className="w-3 h-3 rounded-full bg-primary mb-8 shadow-[0_0_20px_hsl(75,100%,50%,0.4)]" />
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">{v.title}</h3>
              <p className="text-base text-[hsl(0,0%,55%)] leading-relaxed">{v.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Method */}
    <section className="section-padding py-36 md:py-44">
      <ScrollReveal>
        <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Méthodologie</span>
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 mb-20 tracking-tight">
          Notre méthode<span className="text-primary">.</span>
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {steps.map((step, i) => (
          <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
            <div className="card-glass p-10 md:p-12 group hover:border-primary/40 transition-all duration-500 min-h-[220px]">
              <span className="font-heading text-6xl md:text-7xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{step.num}</span>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-6 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-base text-[hsl(0,0%,55%)] leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding pb-36 md:pb-44">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-2xl shadow-black/50">
          <img src={heroBg} alt="Studio Pixora" className="w-full h-72 md:h-96 object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80 flex items-center">
            <div className="section-padding py-16">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                Envie de travailler ensemble ?
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 mt-8 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-sm hover:shadow-[0_0_50px_hsl(75,100%,50%,0.3)] transition-all duration-300"
              >
                Nous contacter <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </Layout>
);

export default StudioPage;
