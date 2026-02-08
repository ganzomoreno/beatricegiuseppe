import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Baroque corner ornaments */}
      <div className="absolute inset-6 md:inset-12 lg:inset-20 pointer-events-none">
        <img src={ornamentFrame} alt="" className="absolute top-0 left-0 w-28 md:w-36 lg:w-44 opacity-60" />
        <img src={ornamentFrame} alt="" className="absolute top-0 right-0 w-28 md:w-36 lg:w-44 opacity-60 -scale-x-100" />
        <img src={ornamentFrame} alt="" className="absolute bottom-0 left-0 w-28 md:w-36 lg:w-44 opacity-60 -scale-y-100" />
        <img src={ornamentFrame} alt="" className="absolute bottom-0 right-0 w-28 md:w-36 lg:w-44 opacity-60 scale-x-[-1] scale-y-[-1]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center gap-0">
        {/* Monogram */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="text-3xl md:text-4xl text-primary mb-6"
        >
          B &amp; G
        </motion.p>

        {/* Thin line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-px bg-primary/30 mb-8"
        />

        {/* Names - Great Vibes via inline style to bypass h1 Cinzel rule */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary mb-6 leading-tight"
        >
          Beatrice &amp; Giuseppe
        </motion.h1>

        {/* Subtitle - Cinzel uppercase */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-xs md:text-sm tracking-[0.35em] uppercase text-foreground/60 max-w-md mx-auto mb-10 leading-relaxed"
        >
          Ci sposeremo davanti al mare, circondati
          <br />
          dalle nostre famiglie e dagli amici più cari.
          <br />
          Vi andrà di essere con noi?
        </motion.p>

        {/* SAVE THE DATE - Cinzel bold */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.4em] uppercase text-primary font-bold mb-8"
        >
          Save the Date
        </motion.h2>

        {/* Date - mixed typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-baseline justify-center gap-3 md:gap-4 mb-4"
        >
          <span className="font-serif text-lg md:text-xl tracking-[0.3em] uppercase text-primary">
            Diciotto
          </span>
          <span
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="text-3xl md:text-4xl text-primary"
          >
            luglio
          </span>
          <span className="font-serif text-lg md:text-xl tracking-[0.3em] uppercase text-primary">
            Duemilaventisei
          </span>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/50 mb-12"
        >
          Santa Margherita Ligure
        </motion.p>

        {/* Thin line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="w-16 h-px bg-primary/25 mb-10"
        />

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center gap-8 md:gap-12 mb-12"
        >
          {[
            { value: countdown.days, label: "Giorni" },
            { value: countdown.hours, label: "Ore" },
            { value: countdown.minutes, label: "Min" },
            { value: countdown.seconds, label: "Sec" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <span className="font-serif text-2xl md:text-3xl text-primary block">
                {item.value}
              </span>
              <span className="font-serif text-[10px] tracking-[0.25em] uppercase text-foreground/40">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          onClick={scrollToRSVP}
          className="font-serif text-xs tracking-[0.3em] uppercase px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          RSVP
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-primary/25 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2.5 bg-primary/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
