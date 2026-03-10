import { useState } from "react";
import { z } from "zod";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Send } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  nom: z.string().trim().min(1, "Champ requis").max(100),
  entreprise: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Email invalide").max(255),
  telephone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Champ requis").max(2000),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [form, setForm] = useState<FormData>({ nom: "", entreprise: "", email: "", telephone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      toast.success("Message envoyé ! Nous vous répondrons rapidement.");
      setForm({ nom: "", entreprise: "", email: "", telephone: "", message: "" });
    }, 1500);
  };

  const inputClass = "w-full bg-[hsl(240,10%,8%)] border border-border/70 rounded-lg px-5 py-4 text-foreground placeholder:text-[hsl(0,0%,40%)] focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-base leading-relaxed";

  return (
    <Layout>
      <title>Contact — Pixora Studio Image & Digital</title>
      <meta name="description" content="Contactez Pixora pour discuter de votre projet image et digital. Studio créatif en Haute-Loire, identité visuelle, photographie, site internet." />

      <section className="section-padding pt-32 pb-24">
        <ScrollReveal>
          <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Contact</span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mt-5 tracking-tight">
            Parlons de<br />
            <span className="text-gradient-accent">votre projet</span>
          </h1>
          <p className="text-lg md:text-xl text-[hsl(0,0%,55%)] mt-8 max-w-2xl leading-relaxed">
            Chaque projet commence par une conversation. Décrivez-nous votre besoin
            et nous vous proposerons la meilleure approche.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-padding pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">Comment ça marche ?</h2>
                <div className="space-y-5">
                  {[
                    "Vous remplissez le formulaire ci-contre.",
                    "Nous vous recontactons sous 24h.",
                    "Nous échangeons sur votre projet et vos objectifs.",
                    "Nous vous envoyons une proposition personnalisée.",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-primary font-heading font-bold text-base mt-0.5">0{i + 1}</span>
                      <p className="text-base text-[hsl(0,0%,60%)] leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
              <div>
                <p className="text-base text-[hsl(0,0%,55%)]">Haute-Loire, France</p>
                <p className="text-base text-[hsl(0,0%,55%)] mt-2">contact@pixora.fr</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="card-glass p-10 md:p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-sm font-semibold text-[hsl(0,0%,65%)] uppercase tracking-[0.1em] mb-3 block">Nom *</label>
                  <input
                    type="text"
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className={inputClass}
                    placeholder="Jean Dupont"
                  />
                  {errors.nom && <p className="text-sm text-destructive mt-2">{errors.nom}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-[hsl(0,0%,65%)] uppercase tracking-[0.1em] mb-3 block">Entreprise</label>
                  <input
                    type="text"
                    value={form.entreprise}
                    onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
                    className={inputClass}
                    placeholder="Votre entreprise"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-sm font-semibold text-[hsl(0,0%,65%)] uppercase tracking-[0.1em] mb-3 block">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="jean@entreprise.fr"
                  />
                  {errors.email && <p className="text-sm text-destructive mt-2">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-[hsl(0,0%,65%)] uppercase tracking-[0.1em] mb-3 block">Téléphone</label>
                  <input
                    type="tel"
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    className={inputClass}
                    placeholder="04 71 XX XX XX"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[hsl(0,0%,65%)] uppercase tracking-[0.1em] mb-3 block">Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className={inputClass + " resize-none"}
                  placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                />
                {errors.message && <p className="text-sm text-destructive mt-2">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-sm hover:shadow-[0_0_50px_hsl(75,100%,50%,0.3)] transition-all duration-300 disabled:opacity-50"
              >
                {sending ? "Envoi en cours..." : (
                  <>Envoyer le message <Send size={18} /></>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
