import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    dietary: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('rsvp')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            attending: formData.attending,
            dietary: formData.dietary,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast({
        title: "Grazie per la conferma!",
        description: formData.attending === "si"
          ? "Vi aspettiamo con gioia il 18 luglio."
          : "Ci mancherete! Grazie per averci fatto sapere.",
      });

      setFormData({ name: "", email: "", phone: "", attending: "", dietary: "", message: "" });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Errore",
        description: "Qualcosa è andato storto. Riprova più tardi.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="wedding-section" ref={ref}>
      <div className="wedding-container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            RSVP
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6" />
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-foreground/70">
            Confermate entro il <span className="text-primary font-semibold">1 giugno 2026</span>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card p-8 md:p-12 rounded-sm elegant-border space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-serif text-xs tracking-[0.2em] uppercase text-primary">
                Nome e Cognome *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border focus:border-primary focus:ring-primary/20"
                placeholder="Il tuo nome"
              />
            </div>

            <div className="space-y-2">
              <label className="font-serif text-xs tracking-[0.2em] uppercase text-primary">
                Email *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border focus:border-primary focus:ring-primary/20"
                placeholder="la.tua@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-serif text-xs tracking-[0.2em] uppercase text-primary">
                Telefono
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background border-border focus:border-primary focus:ring-primary/20"
                placeholder="+39 ..."
              />
            </div>

            <div className="space-y-2">
              <label className="font-serif text-xs tracking-[0.2em] uppercase text-primary">
                Parteciperai? *
              </label>
              <select
                required
                value={formData.attending}
                onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-body"
              >
                <option value="">Seleziona...</option>
                <option value="si">Parteciperò con gioia</option>
                <option value="no">Non potrò esserci</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-serif text-xs tracking-[0.2em] uppercase text-primary">
              Allergie o Intolleranze Alimentari
            </label>
            <Input
              value={formData.dietary}
              onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
              className="bg-background border-border focus:border-primary focus:ring-primary/20"
              placeholder="Es: vegetariano, senza glutine..."
            />
          </div>

          <div className="space-y-2">
            <label className="font-serif text-xs tracking-[0.2em] uppercase text-primary">
              Un Messaggio per gli Sposi
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-border focus:border-primary focus:ring-primary/20 min-h-[100px] resize-none"
              placeholder="Scrivi un augurio o un pensiero..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-xs tracking-[0.3em] uppercase py-6 transition-all duration-300"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 animate-pulse" />
                Invio in corso...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Conferma Presenza
              </span>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;
