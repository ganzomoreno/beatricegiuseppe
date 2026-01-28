import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin, Church, Utensils } from "lucide-react";

const events = [
  {
    icon: Church,
    title: "Cerimonia",
    time: "16:00",
    location: "Chiesa di San Giacomo di Corte",
    address: "Piazza San Giacomo, Santa Margherita Ligure",
  },
  {
    icon: Utensils,
    title: "Ricevimento",
    time: "18:30",
    location: "Grand Hotel Miramare",
    address: "Lungomare Milite Ignoto, 30",
  },
];

const EventSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="evento" className="wedding-section" ref={ref}>
      <div className="wedding-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            Il Giorno del Sì
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-8" />
          
          {/* Date Card */}
          <div className="inline-flex items-center gap-4 bg-card p-6 rounded-sm elegant-border">
            <Calendar className="w-8 h-8 text-gold" />
            <div className="text-left">
              <p className="font-serif text-sm tracking-widest uppercase text-muted-foreground">
                Sabato
              </p>
              <p className="font-serif text-2xl text-primary">
                18 Luglio 2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-card p-8 rounded-sm elegant-border text-center group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <event.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="font-serif text-xl tracking-widest uppercase text-primary mb-4">
                {event.title}
              </h3>
              
              <div className="flex items-center justify-center gap-2 mb-3 text-foreground">
                <Clock className="w-4 h-4 text-gold" />
                <span className="font-body">{event.time}</span>
              </div>
              
              <div className="space-y-1">
                <p className="font-serif text-lg text-foreground">{event.location}</p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="font-body text-sm">{event.address}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dress Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="font-serif text-sm tracking-widest uppercase text-muted-foreground mb-2">
            Dress Code
          </p>
          <p className="font-serif text-xl text-primary">
            Elegante Formale
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
