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

  const inputClass = "w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm";

  return (
    <Layout>
      <title>Contact — Pixora Studio Image & Digital</title>
      <meta name="description" content="Contactez Pixora pour discuter de votre projet image et digital. Studio créatif en Haute-Loire, identité visuelle, photographie, site internet." />

      <section className="section-padding pt-32 pb-20">
        <ScrollReveal>
          <span className="text-xs font-medium text-primary uppercase tracking-widest">Contact</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mt-4">
            Parlons de<br />
            <span className="text-gradient-accent">votre projet</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
            Chaque projet commence par une conversation. Décrivez-nous votre besoin
            et nous vous proposerons la meilleure approche.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-padding pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Comment ça marche ?</h2>
                <div className="space-y-4">
                  {[
                    "Vous remplissez le formulaire ci-contre.",
                    "Nous vous recontactons sous 24h.",
                    "Nous échangeons sur votre projet et vos objectifs.",
                    "Nous vous envoyons une proposition personnalisée.",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-primary font-heading font-bold text-sm mt-0.5">0{i + 1}</span>
                      <p className="text-sm text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glow-line" />
              <div>
                <p className="text-sm text-muted-foreground">Haute-Loire, France</p>
                <p className="text-sm text-muted-foreground mt-1">contact@pixora.fr</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="card-glass p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-medium text-text-secondary uppercase tracking-widest mb-2 block">Nom *</label>
                  <input
                    type="text"
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className={inputClass}
                    placeholder="Jean Dupont"
                  />
                  {errors.nom && <p className="text-xs text-destructive mt-1">{errors.nom}</p>}
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary uppercase tracking-widest mb-2 block">Entreprise</label>
                  <input
                    type="text"
                    value={form.entreprise}
                    onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
                    className={inputClass}
                    placeholder="Votre entreprise"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-medium text-text-secondary uppercase tracking-widest mb-2 block">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="jean@entreprise.fr"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary uppercase tracking-widest mb-2 block">Téléphone</label>
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
                <label className="text-xs font-medium text-text-secondary uppercase tracking-widest mb-2 block">Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className={inputClass + " resize-none"}
                  placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:shadow-[var(--shadow-glow-strong)] transition-all duration-300 disabled:opacity-50"
              >
                {sending ? "Envoi en cours..." : (
                  <>Envoyer le message <Send size={16} /></>
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
