import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Train, Car, MapPin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-santamargherita.jpg";

const travelInfo = [
  {
    icon: Plane,
    title: "In Aereo",
    description: "Aeroporto di Genova (GOA) - 35 km. BrunellinoTBD per trasferimenti.",
  },
  {
    icon: Train,
    title: "In Treno",
    description: "Stazione di Santa Margherita Ligure, a BrunellinoTBD dalla location.",
  },
  {
    icon: Car,
    title: "In Auto",
    description: "Uscita A12 Rapallo, poi SP227 direzione Santa Margherita Ligure.",
  },
];

const accommodations = [
  {
    name: "BrunellinoTBD — Hotel 1",
    note: "Convenzione matrimonio disponibile",
    mapUrl: "https://maps.google.com",
  },
  {
    name: "BrunellinoTBD — Hotel 2",
    note: "A pochi passi dalla location",
    mapUrl: "https://maps.google.com",
  },
  {
    name: "BrunellinoTBD — B&B / Affitto",
    note: "Soluzione più intima",
    mapUrl: "https://maps.google.com",
  },
];

const TravelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="viaggio" className="wedding-section section-alt" ref={ref}>
      <div className="wedding-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Viaggio & Alloggi
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6" />
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-foreground/70">
            Come raggiungerci e dove soggiornare
          </p>
        </motion.div>

        {/* Location Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-sm overflow-hidden elegant-border mb-12"
        >
          <img src={heroImage} alt="Santa Margherita Ligure" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <span className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-serif text-sm tracking-wide text-primary">Santa Margherita Ligure</span>
            </span>
          </div>
        </motion.div>

        {/* Travel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {travelInfo.map((info) => (
            <div key={info.title} className="flex items-start gap-4 p-5 bg-card rounded-sm elegant-border">
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center flex-shrink-0">
                <info.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-primary mb-1">{info.title}</h4>
                <p className="font-body text-sm text-muted-foreground">{info.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Accommodations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="font-serif text-sm tracking-[0.3em] uppercase text-primary text-center mb-8">
            Dove Soggiornare
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {accommodations.map((acc) => (
              <div key={acc.name} className="bg-card p-6 rounded-sm elegant-border text-center">
                <p className="font-serif text-base text-foreground mb-2">{acc.name}</p>
                <p className="font-body text-sm text-muted-foreground mb-4">{acc.note}</p>
                <a
                  href={acc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-serif text-xs tracking-[0.15em] uppercase text-primary hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Vedi su mappa
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelSection;
