import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera } from "lucide-react";

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="wedding-section section-alt" ref={ref}>
      <div className="wedding-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Gallery
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6" />
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-foreground/70">
            I nostri momenti più belli
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card p-12 md:p-16 rounded-sm elegant-border text-center"
        >
          <Camera className="w-12 h-12 text-primary/30 mx-auto mb-6" />
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            In arrivo
          </p>
          <p className="font-body text-foreground/60 text-sm">
            BrunellinoTBD — Le foto saranno disponibili qui.
            <br />
            Dopo il matrimonio, troverete il link all'album completo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
