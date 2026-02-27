import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-catering.jpg";
import aboutImg from "@/assets/about-catering.jpg";
import foodImg from "@/assets/food-platter.jpg";

const images = [
  { src: heroImg, alt: "Luxury outdoor catering setup" },
  { src: aboutImg, alt: "Wedding reception dinner" },
  { src: foodImg, alt: "Premium Kenyan cuisine" },
  { src: heroImg, alt: "Event under marquee tent" },
  { src: aboutImg, alt: "Elegant table settings" },
  { src: foodImg, alt: "Gourmet food platter" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Our Work</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg">
            A glimpse into the events we've brought to life.
          </p>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <button
                onClick={() => setSelected(i)}
                className="w-full block overflow-hidden rounded-xl group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
