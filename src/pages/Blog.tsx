import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import blogHero from "@/assets/images/blog/blog-hero.jpg";
import abstract01 from "@/assets/images/branding/abstract-01.jpg";
import abstract02 from "@/assets/images/branding/abstract-02.jpg";
import studio01 from "@/assets/images/studio/studio-01.jpg";
import entreprise01 from "@/assets/images/studio/entreprise-01.jpg";
import cosmetic01 from "@/assets/images/packshots/cosmetic-01.jpg";
import imprimerie01 from "@/assets/images/imprimerie/imprimerie-01.jpg";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    slug: "pourquoi-image-marque-levier-croissance",
    title: "Pourquoi votre image de marque est votre premier levier de croissance",
    excerpt: "Dans un marché saturé, l'image de marque n'est plus un luxe — c'est un outil stratégique. Découvrez comment une identité visuelle forte peut transformer la perception de votre entreprise et accélérer votre développement.",
    category: "Stratégie",
    date: "5 mars 2026",
    readTime: "6 min",
    image: blogHero,
    featured: true,
  },
  {
    slug: "packshot-produit-impact-ventes",
    title: "Packshot produit : l'impact direct sur vos ventes en ligne",
    excerpt: "Un visuel produit médiocre peut réduire vos conversions de 30%. Voici les clés d'un packshot professionnel qui vend.",
    category: "Photographie",
    date: "27 février 2026",
    readTime: "4 min",
    image: cosmetic01,
  },
  {
    slug: "refonte-identite-visuelle-quand-pourquoi",
    title: "Refonte d'identité visuelle : quand et pourquoi franchir le cap ?",
    excerpt: "Votre logo date de 10 ans ? Votre charte graphique manque de cohérence ? Les signaux qui indiquent qu'il est temps d'agir.",
    category: "Branding",
    date: "18 février 2026",
    readTime: "5 min",
    image: abstract01,
  },
  {
    slug: "site-internet-pme-erreurs-eviter",
    title: "Site internet pour PME : les 5 erreurs qui coûtent cher",
    excerpt: "Un site web n'est pas une simple vitrine. Évitez ces erreurs courantes qui freinent votre crédibilité et votre acquisition client.",
    category: "Digital",
    date: "10 février 2026",
    readTime: "7 min",
    image: studio01,
  },
  {
    slug: "reportage-photo-entreprise-valoriser-savoir-faire",
    title: "Reportage photo entreprise : valorisez votre savoir-faire",
    excerpt: "Un reportage photo professionnel capture l'essence de votre activité et renforce la confiance de vos clients et partenaires.",
    category: "Photographie",
    date: "2 février 2026",
    readTime: "4 min",
    image: imprimerie01,
  },
  {
    slug: "direction-artistique-coherence-visuelle",
    title: "Direction artistique : la clé d'une communication cohérente",
    excerpt: "Sans direction artistique claire, vos supports visuels envoient des messages contradictoires. Découvrez comment unifier votre image.",
    category: "Stratégie",
    date: "25 janvier 2026",
    readTime: "5 min",
    image: abstract02,
  },
  {
    slug: "supports-print-toujours-indispensables",
    title: "Supports print : pourquoi ils restent indispensables en 2026",
    excerpt: "À l'ère du tout digital, le print reste un vecteur de crédibilité puissant. Brochures, cartes de visite, catalogues : l'impact du tangible.",
    category: "Print",
    date: "15 janvier 2026",
    readTime: "4 min",
    image: entreprise01,
  },
];

const categories = ["Tous", "Stratégie", "Photographie", "Branding", "Digital", "Print"];

const Blog = () => {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <Layout>
      <title>Blog — Pixora, Studio Image & Digital en Haute-Loire</title>
      <meta
        name="description"
        content="Conseils, tendances et retours d'expérience sur l'image de marque, la photographie professionnelle et le digital. Le blog du studio Pixora en Haute-Loire."
      />

      {/* Header */}
      <section className="section-padding pt-32 pb-16">
        <ScrollReveal>
          <span className="text-xs font-medium text-primary uppercase tracking-widest">Blog</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mt-4">
            Idées &<br />
            <span className="text-gradient-accent">perspectives</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
            Stratégies visuelles, tendances créatives et retours d'expérience pour transformer
            votre image en avantage concurrentiel.
          </p>
        </ScrollReveal>
      </section>

      {/* Categories */}
      <section className="section-padding pb-12">
        <ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300 ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="section-padding pb-20">
          <ScrollReveal>
            <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 card-glass overflow-hidden">
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/40 lg:block hidden" />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-sm border border-primary/20">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted-foreground">À la une</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mt-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime} de lecture
                  </span>
                  <span>{featured.date}</span>
                </div>
                <span className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300 cursor-pointer">
                  Lire l'article <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Articles grid */}
      <section className="section-padding pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article, i) => (
            <ScrollReveal key={article.slug} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
              <article className="group card-glass overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-background/80 backdrop-blur-sm text-primary rounded-sm border border-primary/20 flex items-center gap-1">
                    <Tag size={10} /> {article.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-32">
        <ScrollReveal>
          <div className="card-glass p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Un projet en tête<span className="text-primary"> ?</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                Discutons de votre image et trouvons ensemble la stratégie visuelle
                qui fera la différence.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:shadow-[var(--shadow-glow-strong)] transition-all duration-300"
              >
                Nous contacter <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Blog;
