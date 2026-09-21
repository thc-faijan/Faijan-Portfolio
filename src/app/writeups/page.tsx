"use client";

import { useState } from "react";
import Link from "next/link";
import { writeupsData } from "@/data/writeups";
import { BookOpen, Search, Clock, Calendar, ArrowRight, Tag } from "lucide-react";

export default function WriteupsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = Array.from(new Set(writeupsData.map((w) => w.category)));

  const filteredWriteups = writeupsData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cyber-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE REPOSITORY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-cyber-light font-mono">
            Technical <span className="text-cyber-cyan">Writeups</span>
          </h1>
          <p className="text-cyber-muted text-sm sm:text-base leading-relaxed">
            In-depth security analysis, vulnerability research, penetration testing methodologies, and practical CTF walkthroughs.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-cyber-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search writeups, tags, XSS..."
              className="w-full pl-10 pr-4 py-2.5 bg-cyber-card border border-cyber-border rounded-lg text-cyber-light font-mono text-xs focus:outline-none focus:border-cyber-cyan transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                selectedCategory === "all"
                  ? "bg-cyber-cyan text-cyber-bg border-cyber-cyan font-bold"
                  : "bg-cyber-card text-cyber-muted border-cyber-border hover:text-cyber-light"
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  selectedCategory === cat
                    ? "bg-cyber-cyan text-cyber-bg border-cyber-cyan font-bold"
                    : "bg-cyber-card text-cyber-muted border-cyber-border hover:text-cyber-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        {filteredWriteups.length === 0 ? (
          <div className="text-center py-16 bg-cyber-card border border-cyber-border rounded-xl max-w-md mx-auto space-y-2">
            <p className="text-cyber-muted text-sm font-mono">No writeups match your search query.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-xs text-cyber-cyan underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWriteups.map((article) => (
              <div
                key={article.slug}
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

                  <h2 className="text-xl font-bold text-cyber-light group-hover:text-cyber-cyan transition-colors font-mono mb-3 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-cyber-muted text-xs leading-relaxed mb-6 line-clamp-3">
                    {article.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-charcoal border border-cyber-border text-cyber-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

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
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
