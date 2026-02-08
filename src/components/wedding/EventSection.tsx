import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Church, Utensils, Car } from "lucide-react";

const events = [
  {
    icon: Church,
    title: "Cerimonia",
    time: "16:00",
    location: "BrunellinoTBD",
    address: "BrunellinoTBD",
    mapUrl: "https://maps.google.com",
  },
  {
    icon: Utensils,
    title: "Ricevimento",
    time: "18:30",
    location: "BrunellinoTBD",
    address: "BrunellinoTBD",
    mapUrl: "https://maps.google.com",
  },
];

const EventSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="evento" className="wedding-section" ref={ref}>
      <div className="wedding-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Dettagli
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="bg-card p-8 rounded-sm elegant-border text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center">
                <event.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-serif text-sm tracking-[0.3em] uppercase text-primary mb-4">
                {event.title}
              </h3>
              
              <div className="flex items-center justify-center gap-2 mb-4 text-foreground">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-serif text-lg">{event.time}</span>
              </div>
              
              <p className="font-serif text-lg text-foreground mb-1">{event.location}</p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">{event.address}</span>
              </div>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-serif text-xs tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors"
              >
                Apri in Google Maps →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Parking & Accessibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 space-y-4"
        >
          <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-sm elegant-border">
            <Car className="w-4 h-4 text-accent" />
            <span className="font-serif text-sm tracking-widest uppercase text-foreground/80">
              Parcheggio: BrunellinoTBD
            </span>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            BrunellinoTBD — informazioni su navetta e accessibilità
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
