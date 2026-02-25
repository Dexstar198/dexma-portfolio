import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Code, Gamepad2 } from "lucide-react";

const projects = [
  {
    name: "BasakMC",
    role: "Head Developer",
    status: "Active",
    description: "Leading the full technical development of a feature-rich Minecraft server with unique gamemodes and scalable infrastructure.",
    icon: Server,
  },
  {
    name: "Barriomc",
    role: "Founder / Developer",
    status: "Coming Soon",
    description: "A personal server project currently in early development — underdeveloped but big plans ahead.",
    icon: Gamepad2,
  },
  {
    name: "ForgottenSmp",
    role: "Administration & Head Developer",
    status: "Closed",
    description: "Managed administration and led the full technical development of this SMP server.",
    icon: Server,
  },
  {
    name: "Endermc",
    role: "Head Developer",
    status: "Closed",
    description: "Led the technical side of Endermc, building and maintaining the server infrastructure.",
    icon: Server,
  },
  {
    name: "MaxSmp",
    role: "Head Developer",
    status: "Closed",
    description: "Headed the development of MaxSmp, handling server setup, configuration, and management.",
    icon: Server,
  },
  {
    name: "CelestialMc",
    role: "Developer / Helper",
    status: "Resigned",
    description: "Contributed as a developer and helper before resigning. Now under new ownership.",
    icon: Code,
  },
  {
    name: "Banditsmp",
    role: "Developer",
    status: "Resigned",
    description: "Worked as a developer on Banditsmp before the server closed down.",
    icon: Code,
  },
  {
    name: "GroxSmp",
    role: "Developer",
    status: "Closed",
    description: "Contributed to the development and maintenance of GroxSmp.",
    icon: Code,
  },
  {
    name: "RivalSMP",
    role: "Developer",
    status: "Closed",
    description: "Worked on server development and configuration for RivalSMP.",
    icon: Code,
  },
];

const statusColors: Record<string, string> = {
  Active: "bg-green-500/20 text-green-400 border-green-500/30",
  Closed: "bg-red-500/20 text-red-400 border-red-500/30",
  Resigned: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Coming Soon": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group glass rounded-xl p-6 hover:box-glow-purple transition-all duration-500 hover:-translate-y-2 cursor-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${statusColors[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{project.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
