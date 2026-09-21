"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Cpu, Terminal, Shield, Search, Code, Server, Wrench, CheckCircle } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    "web-security": <Shield className="w-5 h-5 text-cyber-cyan" />,
    "security-tools": <Wrench className="w-5 h-5 text-cyber-cyan" />,
    "reconnaissance": <Search className="w-5 h-5 text-cyber-cyan" />,
    "programming": <Code className="w-5 h-5 text-cyber-cyan" />,
    "platforms": <Server className="w-5 h-5 text-cyber-cyan" />,
  };

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-cyber-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-light">
            Skills & <span className="text-cyber-cyan">Tooling</span>
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-xl">
            Offensive security methodologies, vulnerability assessment frameworks, and open-source tooling.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all border ${
              activeTab === "all"
                ? "bg-cyber-cyan text-cyber-bg border-cyber-cyan font-bold shadow-cyan-glow"
                : "bg-cyber-card text-cyber-muted border-cyber-border hover:text-cyber-light hover:border-cyber-cyan/30"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all border flex items-center gap-2 ${
                activeTab === cat.id
                  ? "bg-cyber-cyan text-cyber-bg border-cyber-cyan font-bold shadow-cyan-glow"
                  : "bg-cyber-card text-cyber-muted border-cyber-border hover:text-cyber-light hover:border-cyber-cyan/30"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Cards */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-6">
              
              {/* Category Title Header */}
              <div className="flex items-center gap-3 border-b border-cyber-border pb-3">
                <div className="p-2 rounded-lg bg-cyber-charcoal border border-cyber-border">
                  {categoryIcons[cat.id] || <Terminal className="w-5 h-5 text-cyber-cyan" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyber-light font-mono flex items-center gap-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-cyber-muted">{cat.description}</p>
                </div>
              </div>

              {/* Skill Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-cyber-card border border-cyber-border rounded-xl p-4 hover:border-cyber-cyan/40 transition-all hover:shadow-cyan-glow group flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-semibold text-cyber-light group-hover:text-cyber-cyan transition-colors font-mono">
                        {skill.name}
                      </h4>
                      {skill.isCore && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-semibold">
                          CORE
                        </span>
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-cyber-muted mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
