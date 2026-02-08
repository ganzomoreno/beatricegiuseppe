import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-santamargherita.jpg";
import ornamentFrame from "@/assets/corner-ornament.png";

const HeroSection = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date("2026-07-18T16:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToRSVP = () => {
    document.querySelector("#rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Decorative Frame */}
      <div className="absolute inset-4 md:inset-8 lg:inset-16 pointer-events-none">
        <img src={ornamentFrame} alt="" className="absolute top-0 left-0 w-24 md:w-32 lg:w-40 opacity-40" />
        <img src={ornamentFrame} alt="" className="absolute top-0 right-0 w-24 md:w-32 lg:w-40 opacity-40 -scale-x-100" />
        <img src={ornamentFrame} alt="" className="absolute bottom-0 left-0 w-24 md:w-32 lg:w-40 opacity-40 -scale-y-100" />
        <img src={ornamentFrame} alt="" className="absolute bottom-0 right-0 w-24 md:w-32 lg:w-40 opacity-40 scale-x-[-1] scale-y-[-1]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Names - Calligraphic Script */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary mb-6"
        >
          Beatrice & Giuseppe
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-32 h-px bg-primary/40 mx-auto mb-8"
        />

        {/* Subtitle - Uppercase Serif */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-sm md:text-base tracking-[0.35em] uppercase text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Ci sposeremo davanti al mare, circondati
          <br />
          dalle nostre famiglie e dagli amici più cari.
          <br />
          Vi andrà di essere con noi?
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-3 mb-10"
        >
          <p className="font-serif text-lg md:text-xl tracking-[0.3em] uppercase text-primary">
            18 Luglio 2026
          </p>
          <p className="font-serif text-sm tracking-[0.25em] uppercase text-foreground/60">
            Santa Margherita Ligure
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center gap-6 md:gap-10 mb-12"
        >
          {[
            { value: countdown.days, label: "Giorni" },
            { value: countdown.hours, label: "Ore" },
            { value: countdown.minutes, label: "Min" },
            { value: countdown.seconds, label: "Sec" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <span className="font-serif text-3xl md:text-4xl text-primary block">{item.value}</span>
              <span className="font-serif text-xs tracking-[0.2em] uppercase text-foreground/50">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={scrollToRSVP}
          className="font-serif text-sm tracking-[0.3em] uppercase px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          RSVP
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-primary/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
