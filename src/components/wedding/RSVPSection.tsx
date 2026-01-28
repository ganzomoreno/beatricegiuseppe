import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "",
    dietary: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Grazie per la conferma!",
      description: "Vi aspettiamo con gioia il 18 luglio.",
    });
    
    setFormData({ name: "", email: "", guests: "", dietary: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="rsvp" className="wedding-section" ref={ref}>
      <div className="wedding-container max-w-2xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            Conferma la tua Presenza
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6" />
          <p className="font-body text-foreground/80 text-lg">
            Vi preghiamo di confermare la vostra partecipazione entro il 
            <span className="font-semibold text-primary"> 1 giugno 2026</span>
          </p>
        </motion.div>

        {/* RSVP Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card p-8 md:p-12 rounded-sm elegant-border space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-serif text-sm tracking-widest uppercase text-primary">
                Nome e Cognome *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-secondary/50 border-border focus:border-gold focus:ring-gold/20"
                placeholder="Il tuo nome"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-serif text-sm tracking-widest uppercase text-primary">
                Email *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-secondary/50 border-border focus:border-gold focus:ring-gold/20"
                placeholder="la.tua@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-serif text-sm tracking-widest uppercase text-primary">
              Numero di Ospiti
            </label>
            <Input
              type="number"
              min="1"
              max="10"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="bg-secondary/50 border-border focus:border-gold focus:ring-gold/20"
              placeholder="Incluso te stesso/a"
            />
          </div>

          <div className="space-y-2">
            <label className="font-serif text-sm tracking-widest uppercase text-primary">
              Allergie o Intolleranze Alimentari
            </label>
            <Input
              value={formData.dietary}
              onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
              className="bg-secondary/50 border-border focus:border-gold focus:ring-gold/20"
              placeholder="Es: vegetariano, senza glutine..."
            />
          </div>

          <div className="space-y-2">
            <label className="font-serif text-sm tracking-widest uppercase text-primary">
              Un Messaggio per gli Sposi
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-secondary/50 border-border focus:border-gold focus:ring-gold/20 min-h-[120px] resize-none"
              placeholder="Scrivi un augurio o un pensiero..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-widest uppercase py-6 transition-all duration-300 hover:shadow-lg"
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
