import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const GiftSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iban = "BrunellinoTBD";

  const copyIban = () => {
    navigator.clipboard.writeText(iban);
    toast({ title: "IBAN copiato!", description: "Incollalo dove preferisci." });
  };

  return (
    <section id="regali" className="wedding-section" ref={ref}>
      <div className="wedding-container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Lista Nozze
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card p-8 md:p-12 rounded-sm elegant-border text-center"
        >
          <Gift className="w-10 h-10 text-primary mx-auto mb-6" />
          
          <p className="font-body text-foreground/80 text-base leading-relaxed mb-8">
            Il vostro pensiero e la vostra presenza sono il regalo più bello che possiate farci.
            Se desiderate contribuire alla nostra nuova vita insieme, potete farlo tramite
            un pensiero libero.
          </p>

          <div className="bg-background p-6 rounded-sm border border-border mb-6">
            <p className="font-serif text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
              IBAN
            </p>
            <div className="flex items-center justify-center gap-3">
              <code className="font-body text-sm md:text-base text-foreground tracking-wide">{iban}</code>
              <button onClick={copyIban} className="text-primary hover:text-accent transition-colors" aria-label="Copia IBAN">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="font-serif text-xs text-muted-foreground mt-3">
              Intestato a: BrunellinoTBD
            </p>
          </div>

          <p className="font-body text-sm text-muted-foreground italic">
            BrunellinoTBD — link lista nozze alternativa
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
