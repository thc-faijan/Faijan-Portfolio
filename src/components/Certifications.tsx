"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/data/certifications";
import { Award, ExternalLink, ShieldCheck, CheckCircle, Calendar } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-cyber-charcoal/40 border-y border-cyber-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-light">
            Certifications & <span className="text-cyber-cyan">Badges</span>
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-xl">
            Verified academic, industry, and laboratory credentials in cybersecurity and offensive testing.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cyber-card border border-cyber-border rounded-xl p-6 flex flex-col justify-between hover:border-cyber-cyan/50 transition-all hover:shadow-cyan-glow group"
            >
              <div>
                {/* Header Badge & Issuer */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyber-charcoal border border-cyber-border flex items-center justify-center group-hover:border-cyber-cyan/50 transition-colors">
                      <Award className="w-5 h-5 text-cyber-cyan" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-cyber-cyan font-semibold">{cert.issuer}</h4>
                      <div className="flex items-center gap-2 text-[11px] text-cyber-muted font-mono">
                        <Calendar className="w-3 h-3" />
                        <span>Issued {cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {cert.credentialId && (
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-cyber-charcoal border border-cyber-border text-cyber-muted">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

                {/* Certificate Name */}
                <h3 className="text-lg font-bold text-cyber-light group-hover:text-cyber-cyan transition-colors font-mono mb-3">
                  {cert.name}
                </h3>

                {/* Description */}
                {cert.description && (
                  <p className="text-cyber-muted text-xs leading-relaxed mb-6">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Verification Button Footer */}
              <div className="pt-4 border-t border-cyber-border flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-cyber-emerald font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Credential Record</span>
                </div>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-cyber-charcoal border border-cyber-border hover:border-cyber-cyan/50 text-cyber-cyan font-mono text-xs rounded-lg transition-all flex items-center gap-1.5 hover:bg-cyber-cyan/10"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
