import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-bg px-4 py-32 text-center">
      <div className="bg-cyber-card border border-cyber-cyan/30 rounded-2xl p-8 sm:p-12 max-w-lg shadow-card-glow space-y-6">
        <div className="w-16 h-16 rounded-full bg-cyber-charcoal border border-cyber-cyan text-cyber-cyan flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-cyber-cyan px-3 py-1 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
            HTTP 404: RESOURCE_NOT_FOUND
          </span>
          <h1 className="text-3xl font-extrabold text-cyber-light font-mono pt-2">
            Target Page Access Denied
          </h1>
          <p className="text-cyber-muted text-sm leading-relaxed">
            The endpoint or article you requested does not exist or has been relocated within the security database.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-cyan text-cyber-bg font-mono font-bold text-xs rounded-lg hover:bg-cyber-cyan/90 transition-all shadow-cyan-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Mainframe</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
