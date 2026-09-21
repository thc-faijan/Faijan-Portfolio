"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { writeupsData } from "@/data/writeups";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

export default function WriteupsPreview() {
  const featuredWriteups = writeupsData.slice(0, 3);

  return (
    <section id="writeups" className="py-20 bg-cyber-charcoal/30 border-y border-cyber-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE SHARING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-light">
            Technical <span className="text-cyber-cyan">Writeups</span>
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-xl">
            In-depth security analysis, vulnerability research, and penetration testing methodologies.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredWriteups.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cyber-card border border-cyber-border rounded-xl p-6 flex flex-col justify-between hover:border-cyber-cyan/50 transition-all hover:shadow-cyan-glow group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyber-charcoal border border-cyber-cyan/30 text-cyber-cyan font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-cyber-muted font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-cyber-light group-hover:text-cyber-cyan transition-colors font-mono mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-cyber-muted text-xs leading-relaxed mb-6 line-clamp-3">
                  {article.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-cyber-border">
                  <div className="flex items-center gap-1.5 text-xs text-cyber-muted font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  <Link
                    href={`/writeups/${article.slug}`}
                    className="text-cyber-cyan text-xs font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/writeups"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-card border border-cyber-cyan/30 hover:border-cyber-cyan text-cyber-cyan font-mono text-sm font-bold rounded-lg transition-all shadow-cyan-glow"
          >
            <span>View All Writeups & Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
