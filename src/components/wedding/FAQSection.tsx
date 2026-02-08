import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Posso portare i bambini?",
    a: "BrunellinoTBD",
  },
  {
    q: "Posso portare un accompagnatore (plus-one)?",
    a: "BrunellinoTBD",
  },
  {
    q: "Qual è il dress code?",
    a: "BrunellinoTBD — Elegante formale",
  },
  {
    q: "A che ora è consigliato arrivare?",
    a: "BrunellinoTBD",
  },
  {
    q: "Che tempo fa a luglio a Santa Margherita?",
    a: "In Liguria a luglio le temperature medie sono intorno ai 25-30°C. BrunellinoTBD — piano B in caso di pioggia.",
  },
  {
    q: "Posso portare il mio animale domestico?",
    a: "BrunellinoTBD",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="wedding-section" ref={ref}>
      <div className="wedding-container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            FAQ
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-sm elegant-border px-6 border-none"
              >
                <AccordionTrigger className="font-serif text-sm tracking-wide text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-foreground/80 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
