"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { FileText, Download, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ResumeSection() {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Show user-friendly toast confirmation
    setDownloadNotice("Downloading Faijan Ansari's Resume (PDF)...");
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4000);
  };

  return (
    <section id="resume" className="py-16 bg-cyber-charcoal/60 border-y border-cyber-border/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <FileText className="w-3.5 h-3.5" />
          <span>CURRICULUM VITAE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-light font-mono">
          Ready to review my <span className="text-cyber-cyan">Qualifications?</span>
        </h2>

        <p className="text-cyber-muted text-sm sm:text-base max-w-xl mx-auto">
          Download my updated cybersecurity resume detailing academic background, internship experience, WAPT project methodologies, and technical certifications.
        </p>

        <div className="pt-4 flex flex-col items-center gap-4">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            className="px-8 py-4 bg-cyber-cyan text-cyber-bg font-mono font-bold text-base rounded-xl hover:bg-cyber-cyan/90 transition-all shadow-cyan-glow-lg flex items-center gap-3 group"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume (PDF)</span>
          </a>

          {downloadNotice && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
              <span>{downloadNotice}</span>
            </div>
          )}

          <p className="text-xs text-cyber-muted font-mono">
            File location: <code className="text-cyber-cyan">/public/resume.pdf</code>
          </p>
        </div>

      </div>
    </section>
  );
}
