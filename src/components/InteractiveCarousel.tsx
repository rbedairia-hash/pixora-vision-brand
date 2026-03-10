import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import cosmetic01 from "@/assets/images/packshots/cosmetic-01.jpg";
import cosmetic02 from "@/assets/images/packshots/cosmetic-02.jpg";
import imprimerie from "@/assets/images/imprimerie/imprimerie-01.jpg";
import abstract01 from "@/assets/images/branding/abstract-01.jpg";
import abstract02 from "@/assets/images/branding/abstract-02.jpg";
import studio01 from "@/assets/images/studio/studio-01.jpg";

const items = [
  { src: cosmetic01, title: "Packshot Cosmétique", category: "Photographie" },
  { src: imprimerie, title: "Reportage Imprimerie", category: "Reportage" },
  { src: abstract01, title: "Identité Visuelle", category: "Branding" },
  { src: cosmetic02, title: "Packshot Luxe", category: "Photographie" },
  { src: studio01, title: "Direction Artistique", category: "Studio" },
  { src: abstract02, title: "Univers de Marque", category: "Branding" },
];

const InteractiveCarousel = () => {
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const cardWidth = 420;
  const gap = 32;
  const totalWidth = items.length * (cardWidth + gap);

  return (
    <section className="py-36 md:py-44 overflow-hidden">
      <div className="section-padding mb-16">
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
          Nos réalisations<span className="text-primary">.</span>
        </h2>
        <p className="text-lg md:text-xl text-[hsl(0,0%,55%)] mt-5 max-w-lg">
          Glissez pour explorer nos projets récents.
        </p>
      </div>

      <motion.div
        ref={containerRef}
        className="flex cursor-grab active:cursor-grabbing pl-6 md:pl-12 lg:pl-20 xl:pl-32"
        drag="x"
        dragConstraints={{ left: -(totalWidth - window.innerWidth + 100), right: 0 }}
        dragElastic={0.1}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        style={{ x, gap: `${gap}px` }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 group"
            style={{ width: cardWidth }}
            whileHover={{ scale: dragging ? 1 : 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-card">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">{item.category}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-2 tracking-tight">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InteractiveCarousel;
