import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden px-12 sm:px-16 md:px-8">
      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center py-20">
        {/* Monogram */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="text-2xl sm:text-3xl md:text-4xl text-primary mb-4 md:mb-6"
        >
          B &amp; G
        </motion.p>

        {/* Thin line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-16 md:w-24 h-px bg-primary/30 mb-6 md:mb-8"
        />

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary mb-4 md:mb-6 leading-tight"
        >
          Beatrice
          <br className="sm:hidden" />
          <span className="sm:inline"> &amp; </span>
          <br className="sm:hidden" />
          Giuseppe
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.35em] uppercase text-foreground/60 max-w-xs sm:max-w-sm mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Ci sposeremo davanti al mare,
          <br />
          circondati dalle nostre famiglie
          <br />
          e dagli amici più cari.
          <br />
          Vi andrà di essere con noi?
        </motion.p>

        {/* SAVE THE DATE */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-serif text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-[0.25em] sm:tracking-[0.4em] uppercase text-primary font-bold mb-6 md:mb-8"
        >
          Save the Date
        </motion.h2>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 md:gap-4 mb-3 md:mb-4"
        >
          <span className="font-serif text-sm sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary">
            Diciotto
          </span>
          <span
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="text-2xl sm:text-3xl md:text-4xl text-primary"
          >
            luglio
          </span>
          <span className="font-serif text-sm sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary">
            Duemilaventisei
          </span>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-serif text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-foreground/50 mb-8 md:mb-12"
        >
          Santa Margherita Ligure
        </motion.p>

        {/* Thin line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="w-12 md:w-16 h-px bg-primary/25 mb-8 md:mb-10"
        />

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center gap-6 sm:gap-8 md:gap-12 mb-8 md:mb-12"
        >
          {[
            { value: countdown.days, label: "Giorni" },
            { value: countdown.hours, label: "Ore" },
            { value: countdown.minutes, label: "Min" },
            { value: countdown.seconds, label: "Sec" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-primary block">
                {item.value}
              </span>
              <span className="font-serif text-[8px] sm:text-[10px] tracking-[0.2em] uppercase text-foreground/40">
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
          className="font-serif text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase px-8 sm:px-10 py-3 sm:py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          RSVP
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-7 border border-primary/25 rounded-full flex justify-center pt-1"
        >
          <div className="w-0.5 h-2 bg-primary/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
