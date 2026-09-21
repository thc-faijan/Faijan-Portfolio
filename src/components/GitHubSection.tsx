"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Github, GitFork, Star, Code, ArrowUpRight, FolderGit2 } from "lucide-react";

export default function GitHubSection() {
  return (
    <section className="py-20 bg-cyber-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-cyber-card border border-cyber-border rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-card-glow">
          {/* Subtle Glow Circle */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-charcoal border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>OPEN SOURCE CONTRIBUTION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-cyber-light font-mono">
                Explore My Code & <span className="text-cyber-cyan">Repositories</span>
              </h2>

              <p className="text-cyber-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                All my security automation tools, VAPT scripts, and laboratory proof-of-concept projects are maintained on GitHub under open-source licenses.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-cyber-muted">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-charcoal border border-cyber-border">
                  <Code className="w-4 h-4 text-cyber-cyan" />
                  <span>Primary Language: Python & Bash</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-charcoal border border-cyber-border">
                  <Star className="w-4 h-4 text-cyber-amber" />
                  <span>Focus: Offensive Security Tooling</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-cyber-cyan text-cyber-bg font-mono font-bold text-sm rounded-xl hover:bg-cyber-cyan/90 transition-all shadow-cyan-glow flex items-center justify-center gap-2 group"
              >
                <Github className="w-5 h-5" />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
