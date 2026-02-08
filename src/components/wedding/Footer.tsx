import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="font-script text-4xl text-secondary">
            B & G
          </h3>

          <p className="font-serif text-xs tracking-[0.3em] uppercase opacity-70">
            18 Luglio 2026 • Santa Margherita Ligure
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary-foreground/20" />
            <Heart className="w-4 h-4 text-secondary" />
            <div className="w-16 h-px bg-primary-foreground/20" />
          </div>

          <p className="font-script text-xl text-secondary">
            #BeatriceEGiuseppe2026
          </p>

          <div className="pt-6 border-t border-primary-foreground/15 space-y-4">
            <p className="font-body text-xs opacity-50">
              © 2026 Beatrice & Giuseppe — Con amore
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="font-serif text-xs tracking-widest uppercase opacity-50 hover:opacity-80 transition-opacity">
                Privacy
              </a>
              <a href="#" className="font-serif text-xs tracking-widest uppercase opacity-50 hover:opacity-80 transition-opacity">
                Cookie
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
