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
          {/* Monogram */}
          <h3 className="font-script text-4xl text-gold-light">
            B & G
          </h3>

          {/* Date */}
          <p className="font-serif text-sm tracking-[0.3em] uppercase opacity-80">
            18 Luglio 2026 • Santa Margherita Ligure
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary-foreground/30" />
            <Heart className="w-4 h-4 text-gold" />
            <div className="w-16 h-px bg-primary-foreground/30" />
          </div>

          {/* Hashtag */}
          <p className="font-script text-xl text-gold-light">
            #BeatriceEGiuseppe2026
          </p>

          {/* Contact */}
          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="font-body text-sm opacity-70">
              Per qualsiasi informazione, contattateci a
            </p>
            <a 
              href="mailto:beatrice.giuseppe.2026@email.com" 
              className="font-serif text-gold-light hover:text-gold transition-colors"
            >
              beatrice.giuseppe.2026@email.com
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs opacity-50 pt-6">
            Con amore, Beatrice & Giuseppe
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
