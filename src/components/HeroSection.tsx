import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const taglines = [
  "Crafting immersive Minecraft experiences",
  "Building servers from the ground up",
  "Turning ideas into playable worlds",
];

const HeroSection = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[taglineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 30);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(263_70%_65%_/_0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text text-glow-purple">Dexma</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-2">
            Minecraft Server Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-8 mt-4"
        >
          <span className="text-lg text-primary font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="inline-flex items-center justify-center mt-16 w-12 h-12 rounded-full border border-primary/30 text-primary hover:box-glow-purple transition-all duration-300 animate-float"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
