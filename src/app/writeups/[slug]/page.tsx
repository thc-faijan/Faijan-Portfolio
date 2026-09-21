import Link from "next/link";
import { notFound } from "next/navigation";
import { writeupsData } from "@/data/writeups";
import { ArrowLeft, Calendar, Clock, User, Tag, ShieldCheck } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return writeupsData.map((article) => ({
    slug: article.slug,
  }));
}

export default function WriteupDetailPage({ params }: Props) {
  const article = writeupsData.find((w) => w.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cyber-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <div>
          <Link
            href="/writeups"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyber-muted hover:text-cyber-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Writeups</span>
          </Link>
        </div>

        {/* Article Header Card */}
        <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyber-charcoal border border-cyber-cyan/30 text-cyber-cyan font-semibold">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-cyber-muted font-mono">
              <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-cyber-muted font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-cyber-light font-mono leading-tight">
            {article.title}
          </h1>

          <p className="text-cyber-muted text-base leading-relaxed border-l-2 border-cyber-cyan/40 pl-4 py-1 italic">
            {article.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-cyber-border text-xs font-mono text-cyber-muted">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-cyber-cyan" />
              <span>Written by <strong className="text-cyber-light">{article.author}</strong></span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyber-emerald" />
              <span className="text-cyber-emerald">Peer Reviewed Security Note</span>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-10 space-y-6 text-cyber-light text-base leading-relaxed font-sans">
          <div className="prose prose-invert max-w-none space-y-6">
            {article.content.split("\n\n").map((paragraph, idx) => {
              // Code Block Render
              if (paragraph.startsWith("```")) {
                const lines = paragraph.split("\n");
                const language = lines[0].replace("```", "").trim();
                const codeContent = lines.slice(1, -1).join("\n");

                return (
                  <div key={idx} className="my-6 rounded-lg overflow-hidden border border-cyber-border bg-cyber-charcoal font-mono text-xs">
                    <div className="bg-cyber-card px-4 py-2 border-b border-cyber-border text-cyber-cyan flex items-center justify-between text-[11px]">
                      <span>CODE SNIPPET ({language || "plaintext"})</span>
                      <span className="text-[10px] text-cyber-muted">READONLY</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-cyber-light">
                      <code>{codeContent}</code>
                    </pre>
                  </div>
                );
              }

              // Heading 3
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-cyber-cyan font-mono pt-4 border-b border-cyber-border/50 pb-2">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }

              // Heading 4
              if (paragraph.startsWith("#### ")) {
                return (
                  <h4 key={idx} className="text-lg font-semibold text-cyber-light font-mono pt-2">
                    {paragraph.replace("#### ", "")}
                  </h4>
                );
              }

              return <p key={idx} className="text-cyber-muted text-sm sm:text-base leading-relaxed">{paragraph}</p>;
            })}
          </div>
        </div>

        {/* Tags Footer */}
        <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-muted">
            <Tag className="w-4 h-4 text-cyber-cyan" />
            <span>Article Tags:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-mono bg-cyber-charcoal border border-cyber-border text-cyber-cyan"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
