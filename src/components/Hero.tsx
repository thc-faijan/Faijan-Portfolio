"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Shield, ArrowRight, Github, Linkedin, FileText, Terminal as TerminalIcon, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-hero-gradient">
      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-charcoal border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
              <span>Available for Opportunities & Pentesting Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyber-light tracking-tight">
                {siteConfig.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyber-cyan via-blue-400 to-cyber-cyan bg-clip-text text-transparent">
                {siteConfig.title}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-cyber-muted text-base sm:text-lg max-w-2xl leading-relaxed">
              I build, break, and secure web applications through practical offensive security, vulnerability assessment, and penetration testing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-cyber-cyan text-cyber-bg font-mono font-bold text-sm rounded-lg hover:bg-cyber-cyan/90 transition-all shadow-cyan-glow flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-cyber-card border border-cyber-border text-cyber-light hover:border-cyber-cyan/50 hover:text-cyber-cyan font-mono text-sm rounded-lg transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyber-cyan" />
                Download Resume
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/50 rounded-lg transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/50 rounded-lg transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Terminal Status Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-cyber-charcoal/90 border border-cyber-cyan/30 rounded-xl p-5 shadow-card-glow backdrop-blur-sm relative overflow-hidden">
              {/* Terminal Top Window Control Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-cyber-border mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cyber-muted font-mono">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>status_session.sh</span>
                </div>
                <div className="text-[10px] text-cyber-emerald font-mono px-2 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> SECURE
                </div>
              </div>

              {/* Terminal Content Commands */}
              <div className="font-mono text-sm space-y-4">
                {/* Command 1 */}
                <div>
                  <div className="flex items-center gap-2 text-cyber-muted">
                    <span className="text-cyber-cyan">$</span>
                    <span className="text-cyber-light font-semibold">whoami</span>
                  </div>
                  <div className="mt-1 text-cyber-cyan pl-4 border-l-2 border-cyber-cyan/30">
                    faijan@security
                  </div>
                </div>

                {/* Command 2 */}
                <div>
                  <div className="flex items-center gap-2 text-cyber-muted">
                    <span className="text-cyber-cyan">$</span>
                    <span className="text-cyber-light font-semibold">specialization</span>
                  </div>
                  <div className="mt-1 text-cyber-muted pl-4 border-l-2 border-cyber-border">
                    web-application-security & pentesting
                  </div>
                </div>

                {/* Command 3 */}
                <div>
                  <div className="flex items-center gap-2 text-cyber-muted">
                    <span className="text-cyber-cyan">$</span>
                    <span className="text-cyber-light font-semibold">focus_areas</span>
                  </div>
                  <div className="mt-1 text-cyber-muted pl-4 border-l-2 border-cyber-border flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded text-xs bg-cyber-card border border-cyber-border text-cyber-light">WAPT</span>
                    <span className="px-2 py-0.5 rounded text-xs bg-cyber-card border border-cyber-border text-cyber-light">VAPT</span>
                    <span className="px-2 py-0.5 rounded text-xs bg-cyber-card border border-cyber-border text-cyber-light">OWASP Top 10</span>
                    <span className="px-2 py-0.5 rounded text-xs bg-cyber-card border border-cyber-border text-cyber-light">Tool Building</span>
                  </div>
                </div>

                {/* Command 4 */}
                <div>
                  <div className="flex items-center gap-2 text-cyber-muted">
                    <span className="text-cyber-cyan">$</span>
                    <span className="text-cyber-light font-semibold">status</span>
                  </div>
                  <div className="mt-1 text-cyber-emerald pl-4 border-l-2 border-cyber-emerald/50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping"></span>
                    <span>available_for_opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
