import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Shield, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyber-charcoal border-t border-cyber-border py-12 text-cyber-muted text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 group text-cyber-light font-mono font-bold text-base"
            >
              <div className="w-8 h-8 rounded-lg bg-cyber-card border border-cyber-cyan/30 flex items-center justify-center group-hover:border-cyber-cyan transition-colors">
                <Shield className="w-4 h-4 text-cyber-cyan" />
              </div>
              <span>{siteConfig.handle}</span>
            </Link>

            <span className="text-cyber-border">|</span>
            <span className="font-mono text-xs text-cyber-muted">
              © 2026 {siteConfig.name}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Built with text */}
          <div className="font-mono text-xs text-cyber-muted flex items-center gap-1.5">
            <span>Built with Next.js, TypeScript & curiosity.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
