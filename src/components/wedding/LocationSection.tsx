import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Car, Plane, Train } from "lucide-react";
import heroImage from "@/assets/hero-santamargherita.jpg";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const travelInfo = [
    {
      icon: Plane,
      title: "In Aereo",
      description: "Aeroporto di Genova (GOA) - 35 km",
    },
    {
      icon: Train,
      title: "In Treno",
      description: "Stazione di Santa Margherita Ligure",
    },
    {
      icon: Car,
      title: "In Auto",
      description: "Uscita A12 Rapallo, poi SP227",
    },
  ];

  return (
    <section id="location" className="wedding-section bg-card" ref={ref}>
      <div className="wedding-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            Santa Margherita Ligure
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6" />
          <p className="font-body text-foreground/80 text-lg max-w-xl mx-auto">
            La perla del Tigullio, tra Portofino e le Cinque Terre, 
            dove il mare ligure incontra le colline verdi.
          </p>
        </motion.div>

        {/* Location Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-sm overflow-hidden elegant-border mb-12"
        >
          <img
            src={heroImage}
            alt="Santa Margherita Ligure"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-sm">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="font-serif text-sm tracking-wide text-primary">
                Riviera Ligure di Levante
              </span>
            </div>
          </div>
        </motion.div>

        {/* Travel Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {travelInfo.map((info, index) => (
            <div
              key={info.title}
              className="flex items-start gap-4 p-4 bg-secondary/30 rounded-sm"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <info.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-sm tracking-widest uppercase text-primary mb-1">
                  {info.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {info.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Accommodation Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 p-6 border border-gold/30 rounded-sm"
        >
          <p className="font-serif text-sm tracking-widest uppercase text-gold mb-2">
            Soggiorno
          </p>
          <p className="font-body text-foreground/80">
            Per chi desidera soggiornare, vi consigliamo di prenotare in anticipo. 
            Saremo lieti di suggerirvi alcune strutture convenzionate.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
