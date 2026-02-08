import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail } from "lucide-react";

const ContactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contatti" className="wedding-section section-alt" ref={ref}>
      <div className="wedding-container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Contatti
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6" />
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-foreground/70">
            Per qualsiasi domanda o necessità
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-card p-8 rounded-sm elegant-border text-center">
            <Phone className="w-6 h-6 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-xs tracking-[0.2em] uppercase text-primary mb-2">
              Wedding Contact
            </h3>
            <p className="font-body text-foreground/80 mb-1">BrunellinoTBD</p>
            <p className="font-body text-sm text-muted-foreground">(Testimone / Organizzatore)</p>
          </div>

          <div className="bg-card p-8 rounded-sm elegant-border text-center">
            <Mail className="w-6 h-6 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-xs tracking-[0.2em] uppercase text-primary mb-2">
              Email
            </h3>
            <a 
              href="mailto:BrunellinoTBD@email.com" 
              className="font-body text-foreground/80 hover:text-primary transition-colors"
            >
              BrunellinoTBD@email.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsSection;
