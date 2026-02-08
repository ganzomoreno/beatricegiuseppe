import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { time: "16:00", label: "Cerimonia" },
  { time: "17:00", label: "Aperitivo di benvenuto" },
  { time: "18:30", label: "Ricevimento" },
  { time: "20:00", label: "Cena" },
  { time: "22:00", label: "Taglio della torta" },
  { time: "22:30", label: "Festa e balli" },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programma" className="wedding-section section-alt" ref={ref}>
      <div className="wedding-container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Programma
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8 text-right">
                  <span className="font-serif text-lg md:text-xl text-primary">{item.time}</span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-primary/40 z-10" />
                <div className="w-1/2 pl-8">
                  <span className="font-serif text-sm tracking-[0.2em] uppercase text-foreground/80">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
