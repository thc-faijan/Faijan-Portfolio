"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-cyber-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-light">
            Professional <span className="text-cyber-cyan">Timeline</span>
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-xl">
            Hands-on internships and practical security testing exposure.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-border to-transparent transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cyber-charcoal border-2 border-cyber-cyan shadow-cyan-glow flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-pulse"></div>
                  </div>

                  {/* Experience Card Content */}
                  <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
                    <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 hover:border-cyber-cyan/50 transition-all hover:shadow-cyan-glow group">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyber-charcoal border border-cyber-cyan/30 text-cyber-cyan font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>

                        {exp.isCurrent && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald font-semibold">
                            PRESENT ROLE
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-cyber-light font-mono group-hover:text-cyber-cyan transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-cyber-muted mt-1 mb-4 font-mono">
                        <span className="text-cyber-cyan font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-cyber-muted text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Bullet Points */}
                      <ul className="space-y-2 mb-6">
                        {exp.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-cyber-muted leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-cyber-border">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-charcoal border border-cyber-border text-cyber-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
