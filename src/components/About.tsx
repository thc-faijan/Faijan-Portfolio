"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ShieldCheck, Target, Cpu, Code2, GraduationCap, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-cyber-charcoal/50 border-y border-cyber-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECURITY PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-light">
            About <span className="text-cyber-cyan">Me</span>
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-xl">
            Passionate offensive security researcher focused on understanding web application vulnerabilities through hands-on testing.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4 text-cyber-muted text-base leading-relaxed">
              <p>
                Hello! I'm <strong className="text-cyber-light">{siteConfig.name}</strong>, a final-year <strong className="text-cyber-cyan">BCA Cyber Security student</strong> with a strong interest in offensive security and practical vulnerability assessment.
              </p>
              <p>
                My primary technical focus is on <strong className="text-cyber-light">Web Application Penetration Testing (WAPT)</strong> and <strong className="text-cyber-light">VAPT methodology</strong>. I spend my time exploring web security mechanisms, analyzing application logic flaws, testing REST APIs, and discovering security vulnerabilities in controlled lab environments.
              </p>
              <p>
                Beyond manual penetration testing, I enjoy <strong className="text-cyber-light">building security tools and automation scripts</strong> in Python and Bash to streamline reconnaissance, port scanning, and information gathering workflows.
              </p>
            </div>

            {/* Core Interest Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-cyber-border">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyber-charcoal border border-cyber-cyan/20 text-cyber-cyan">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyber-light font-mono">WAPT / VAPT</h4>
                  <p className="text-xs text-cyber-muted">OWASP Top 10 testing & manual vulnerability assessment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyber-charcoal border border-cyber-cyan/20 text-cyber-cyan">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyber-light font-mono">Recon & Mapping</h4>
                  <p className="text-xs text-cyber-muted">Subdomain enumeration, endpoint fuzzing, API analysis</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyber-charcoal border border-cyber-cyan/20 text-cyber-cyan">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyber-light font-mono">Security Tooling</h4>
                  <p className="text-xs text-cyber-muted">Developing automation scripts in Python & Bash</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyber-charcoal border border-cyber-cyan/20 text-cyber-cyan">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyber-light font-mono">Academic Focus</h4>
                  <p className="text-xs text-cyber-muted">Final-Year BCA Cyber Security Degree Candidate</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {siteConfig.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 rounded-xl p-5 flex flex-col justify-between transition-all group hover:shadow-cyan-glow"
              >
                <div className="text-xs font-mono text-cyber-muted uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="my-4 text-3xl font-extrabold text-cyber-cyan font-mono group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-cyber-muted">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
