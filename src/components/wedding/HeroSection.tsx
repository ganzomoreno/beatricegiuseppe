import { motion } from "framer-motion";
import heroImage from "@/assets/hero-santamargherita.jpg";
import ornamentFrame from "@/assets/corner-ornament.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Decorative Frame */}
      <div className="absolute inset-4 md:inset-8 lg:inset-16 pointer-events-none">
        <img 
          src={ornamentFrame} 
          alt="" 
          className="absolute top-0 left-0 w-24 md:w-32 lg:w-40 opacity-60"
        />
        <img 
          src={ornamentFrame} 
          alt="" 
          className="absolute top-0 right-0 w-24 md:w-32 lg:w-40 opacity-60 -scale-x-100"
        />
        <img 
          src={ornamentFrame} 
          alt="" 
          className="absolute bottom-0 left-0 w-24 md:w-32 lg:w-40 opacity-60 -scale-y-100"
        />
        <img 
          src={ornamentFrame} 
          alt="" 
          className="absolute bottom-0 right-0 w-24 md:w-32 lg:w-40 opacity-60 scale-x-[-1] scale-y-[-1]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-script text-5xl md:text-6xl text-primary/40">
            B & G
          </span>
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-6"
        >
          Beatrice & Giuseppe
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-lg md:text-xl text-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed tracking-wide"
        >
          Ci sposeremo davanti al mare, circondati dalle nostre famiglie e dagli amici più cari.
          <br />
          Vi andrà di essere con noi?
        </motion.p>

        {/* Save the Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase text-primary">
            Save the Date
          </h2>
          
          <div className="font-serif text-xl md:text-2xl text-foreground">
            <span className="tracking-widest uppercase">Diciotto</span>
            <span className="font-script text-3xl md:text-4xl mx-3 text-gold">Luglio</span>
            <span className="tracking-widest uppercase">Duemilaventisei</span>
          </div>

          <p className="font-serif text-lg md:text-xl tracking-[0.2em] uppercase text-primary/80 mt-4">
            Santa Margherita Ligure
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
