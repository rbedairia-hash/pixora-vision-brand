import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms - different depths
  const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yLayer2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yLayer3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yLayer4 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  // Animation timing constants (2200ms total)
  const TIMING = {
    background: { start: 0, duration: 0.3 },
    visualMass: { start: 0.3, duration: 0.6 },
    title: { start: 0.9, duration: 0.5 },
    subtitle: { start: 1.4, duration: 0.4 },
    cta: { start: 1.8, duration: 0.4 },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: TIMING.title.start + i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const titleWords = ["Transformez", "votre", "image", "en", "levier", "de", "croissance"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#080808]"
    >
      {/* ===== LAYER 1: Textured Dark Background ===== */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: TIMING.background.duration, delay: TIMING.background.start }}
        style={{ opacity: opacityBg }}
      >
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#080808] to-[#050505]" />
        
        {/* Subtle grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Vignette effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </motion.div>

      {/* ===== LAYER 2: Diffused Lemon Green Halo ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ y: yLayer1 }}
      >
        {/* Large diffused halo - top right */}
        <motion.div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(75 100% 50% / 0.06) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary halo - bottom left */}
        <motion.div
          className="absolute -bottom-60 -left-60 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(75 100% 50% / 0.04) 0%, transparent 50%)",
            filter: "blur(100px)",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Micro halo - center subtle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(75 100% 50% / 0.02) 0%, transparent 50%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* ===== LAYER 3: Ultra Fine Grid ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ y: yLayer2 }}
      >
        {/* Fine grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(75 100% 50% / 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(75 100% 50% / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        
        {/* Perspective grid lines - horizontal accent */}
        <div
          className="absolute top-[35%] left-0 right-0 h-px opacity-[0.08]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsl(75 100% 50%) 20%, hsl(75 100% 50%) 80%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* ===== LAYER 4: Abstract Animated Forms ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: TIMING.visualMass.start }}
      >
        {/* Large abstract rectangle - top left area */}
        <motion.div
          className="absolute top-[8%] left-[3%] md:left-[5%]"
          style={{ y: yLayer3 }}
          initial={{ opacity: 0, x: -50, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-32 h-44 md:w-40 md:h-56 lg:w-48 lg:h-64 border border-[hsl(75,100%,50%,0.15)] bg-gradient-to-br from-[hsl(75,100%,50%,0.03)] to-transparent backdrop-blur-[2px]"
            animate={{
              y: [0, -8, 0],
              rotate: [-3, -1, -3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Inner frame */}
            <div className="absolute inset-2 border border-[hsl(75,100%,50%,0.08)]" />
          </motion.div>
        </motion.div>

        {/* Floating rectangle frame - right side */}
        <motion.div
          className="absolute top-[12%] right-[5%] md:right-[8%]"
          style={{ y: yLayer4 }}
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-24 h-32 md:w-32 md:h-40 lg:w-36 lg:h-48 border border-[hsl(75,100%,50%,0.12)]"
            style={{
              background: "linear-gradient(135deg, hsl(75 100% 50% / 0.02) 0%, transparent 50%)",
            }}
            animate={{
              y: [0, 10, 0],
              rotate: [2, 5, 2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-px bg-[hsl(75,100%,50%,0.4)]" />
            <div className="absolute top-0 left-0 w-px h-4 bg-[hsl(75,100%,50%,0.4)]" />
            <div className="absolute bottom-0 right-0 w-4 h-px bg-[hsl(75,100%,50%,0.4)]" />
            <div className="absolute bottom-0 right-0 w-px h-4 bg-[hsl(75,100%,50%,0.4)]" />
          </motion.div>
        </motion.div>

        {/* Thin horizontal accent line - extends from left */}
        <motion.div
          className="absolute top-[25%] left-0 w-[15%] md:w-[20%] h-px"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "linear-gradient(90deg, transparent, hsl(75 100% 50% / 0.3), hsl(75 100% 50% / 0.1))",
            transformOrigin: "left",
          }}
        />

        {/* Thin diagonal line element */}
        <motion.div
          className="absolute top-[45%] right-[15%] w-px h-[12%] md:h-[15%]"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "linear-gradient(180deg, transparent, hsl(75 100% 50% / 0.25), transparent)",
            transformOrigin: "top",
            transform: "rotate(15deg)",
          }}
        />

        {/* Small floating square cluster - bottom right */}
        <motion.div
          className="absolute bottom-[20%] right-[12%] md:right-[15%]"
          style={{ y: yLayer2 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 border border-[hsl(75,100%,50%,0.1)]"
            animate={{
              y: [0, -6, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 border border-[hsl(75,100%,50%,0.05)] m-2" />
          </motion.div>
        </motion.div>

        {/* Abstract card/frame - bottom left */}
        <motion.div
          className="absolute bottom-[25%] left-[8%] md:left-[12%]"
          style={{ y: yLayer1 }}
          initial={{ opacity: 0, y: 40, rotate: 8 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-20 h-28 md:w-24 md:h-32 lg:w-28 lg:h-36 border border-[hsl(75,100%,50%,0.08)] bg-[hsl(75,100%,50%,0.01)]"
            animate={{
              y: [0, 6, 0],
              rotate: [4, 2, 4],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Inner decorative line */}
            <div className="absolute top-1/2 left-2 right-2 h-px bg-[hsl(75,100%,50%,0.1)]" />
          </motion.div>
        </motion.div>

        {/* Micro lines network - top area */}
        <svg className="absolute top-[5%] right-[25%] w-32 h-24 opacity-[0.15]" viewBox="0 0 128 96">
          <motion.line 
            x1="0" y1="48" x2="64" y2="24" 
            stroke="hsl(75 100% 50%)" 
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
          <motion.line 
            x1="64" y1="24" x2="128" y2="48" 
            stroke="hsl(75 100% 50%)" 
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <motion.line 
            x1="32" y1="96" x2="64" y2="24" 
            stroke="hsl(75 100% 50%)" 
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          />
        </svg>

        {/* Horizontal line accent - bottom */}
        <motion.div
          className="absolute bottom-[35%] right-0 w-[12%] md:w-[18%] h-px"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.75, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "linear-gradient(90deg, hsl(75 100% 50% / 0.15), hsl(75 100% 50% / 0.05), transparent)",
            transformOrigin: "right",
          }}
        />

        {/* Corner frame element - top right subtle */}
        <motion.div
          className="absolute top-[18%] right-[20%] w-12 h-12 md:w-16 md:h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-full h-px bg-[hsl(75,100%,50%,0.15)]" />
          <div className="absolute top-0 right-0 w-px h-full bg-[hsl(75,100%,50%,0.15)]" />
        </motion.div>
      </motion.div>

      {/* ===== LAYER 5: Editorial Block ===== */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-4xl mx-auto w-full">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-6 md:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[hsl(75,100%,50%)]"
              animate={{
                boxShadow: [
                  "0 0 8px hsl(75,100%,50%,0.3)",
                  "0 0 16px hsl(75,100%,50%,0.5)",
                  "0 0 8px hsl(75,100%,50%,0.3)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <span className="text-xs md:text-sm font-medium text-[hsl(75,100%,50%)] tracking-[0.25em] uppercase">
              Studio Image & Digital
            </span>
          </motion.div>

          {/* Main Title - Word by word reveal */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.08] tracking-tight mb-6 md:mb-8">
            <span className="flex flex-wrap gap-x-3 md:gap-x-4 lg:gap-x-5">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block ${
                    word === "Transformez" || word === "votre" || word === "en" || word === "de"
                      ? "text-[hsl(0,0%,100%)]"
                      : word === "image" || word === "levier" || word === "croissance"
                      ? "text-[hsl(75,100%,50%)]"
                      : "text-[hsl(0,0%,65%)]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-[hsl(0,0%,55%)] text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 md:mb-10"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: TIMING.subtitle.start,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Pixora est un studio image et digital qui aide les entreprises à renforcer leur crédibilité, structurer leur communication et transformer leur présence visuelle en outil de croissance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: TIMING.cta.start,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[hsl(75,100%,50%)] text-[hsl(240,10%,4%)] font-semibold text-sm md:text-base rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_hsl(75,100%,50%,0.25)]"
            >
              {/* Shimmer effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0,0%,100%,0.25)] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">Démarrer mon projet</span>
              <ArrowRight className="relative w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/studio"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-[hsl(0,0%,20%)] text-[hsl(0,0%,75%)] font-medium text-sm md:text-base rounded-sm transition-all duration-300 hover:border-[hsl(75,100%,50%,0.4)] hover:text-[hsl(0,0%,95%)] hover:bg-[hsl(75,100%,50%,0.03)]"
            >
              <Eye className="w-4 h-4 md:w-5 md:h-5" />
              <span>Découvrir notre méthode</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 10%, hsl(75 100% 50% / 0.25) 50%, transparent 90%)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <span className="text-[10px] md:text-xs text-[hsl(0,0%,35%)] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          className="w-px h-8 md:h-10 bg-gradient-to-b from-[hsl(75,100%,50%,0.5)] to-transparent"
          animate={{ scaleY: [1, 0.6, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
