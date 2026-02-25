import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative shrink-0"
          >
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full animate-pulse-ring border-2 border-primary/40" />
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/60 box-glow-purple">
              <img
                src={profileImg}
                alt="Dexma - Minecraft Server Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Hey, I'm <span className="text-primary">Dexma</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Minecraft server developer with extensive experience in building,
              configuring, and managing high-quality Minecraft servers. I love making
              <span className="text-primary font-medium"> Skript scripts</span> and I'm an expert
              with over 1 year of experience crafting unique server experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a deep understanding of server architecture and gameplay design,
              I lead technical development on ambitious projects,
              crafting unique gameplay experiences for thousands of players.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
