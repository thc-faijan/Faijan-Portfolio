"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { ShieldAlert, Radar, KeyRound, Terminal, Github, ExternalLink, ShieldCheck, Check } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-cyber-cyan" />,
    Radar: <Radar className="w-6 h-6 text-cyber-cyan" />,
    KeyRound: <KeyRound className="w-6 h-6 text-cyber-cyan" />,
    Terminal: <Terminal className="w-6 h-6 text-cyber-cyan" />,
  };

  return (
    <section id="projects" className="py-20 bg-cyber-charcoal/30 border-y border-cyber-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECURITY REPOSITORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-light">
            Offensive <span className="text-cyber-cyan">Projects</span>
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-xl">
            Custom reconnaissance tools, VAPT automation frameworks, and security utility projects.
          </p>
        </div>

        {/* Projects Cards Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cyber-card border border-cyber-border rounded-xl p-6 flex flex-col justify-between hover:border-cyber-cyan/50 transition-all hover:shadow-cyan-glow group"
            >
              <div>
                {/* Header Icon & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-cyber-charcoal border border-cyber-border group-hover:border-cyber-cyan/40 transition-colors">
                    {iconMap[project.icon] || <ShieldAlert className="w-6 h-6 text-cyber-cyan" />}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyber-charcoal border border-cyber-border text-cyber-cyan font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-cyber-light group-hover:text-cyber-cyan transition-colors font-mono mb-2">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-cyber-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights List if available */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-6 space-y-1.5 pt-2 border-t border-cyber-border/50">
                    {project.highlights.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-cyber-muted font-mono">
                        <Check className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Tech Stack & Buttons */}
              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyber-charcoal border border-cyber-border/80 text-cyber-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub & Demo Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-cyber-border">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-cyber-charcoal border border-cyber-border hover:border-cyber-cyan/50 text-cyber-light hover:text-cyber-cyan font-mono text-xs rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg font-mono text-xs rounded-lg transition-all flex items-center gap-1.5"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
