import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OurStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="storia" className="wedding-section bg-card" ref={ref}>
      <div className="wedding-container text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            La Nostra Storia
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <p className="font-body text-foreground/80 text-lg leading-relaxed">
            Tutto è iniziato con uno sguardo, un sorriso, e quella sensazione che qualcosa 
            di speciale stava per accadere. Da quel momento, ogni giorno insieme è stato 
            una nuova avventura.
          </p>
          
          <p className="font-body text-foreground/80 text-lg leading-relaxed">
            Abbiamo condiviso risate, sogni e sfide. Abbiamo costruito ricordi 
            che porteremo sempre nel cuore. E ora, siamo pronti per il passo più 
            importante della nostra vita insieme.
          </p>

          <p className="font-body text-foreground/80 text-lg leading-relaxed">
            Il 18 luglio 2026, davanti al mare della Liguria, celebreremo 
            il nostro amore circondati dalle persone che amiamo di più.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-8 bg-secondary/50 rounded-sm elegant-border max-w-xl mx-auto"
        >
          <p className="font-script text-2xl md:text-3xl text-gold mb-4">
            "L'amore non guarda con gli occhi, ma con l'anima"
          </p>
          <cite className="font-serif text-sm tracking-widest uppercase text-muted-foreground">
            — William Shakespeare
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default OurStorySection;
