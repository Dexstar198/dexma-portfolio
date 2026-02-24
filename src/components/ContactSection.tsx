import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-6 gradient-text"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-16 max-w-md mx-auto"
        >
          Interested in working together or have a project in mind? Reach out!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          <motion.a
            href="mailto:contact@dexma.dev"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6 text-center hover:box-glow-purple transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">contact@dexma.dev</p>
          </motion.a>

          <motion.a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="glass rounded-xl p-6 text-center hover:box-glow-purple transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">Discord</h3>
            <p className="text-sm text-muted-foreground">Dexma#0001</p>
          </motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground/50 text-sm mt-24"
        >
          © 2026 Dexma. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
