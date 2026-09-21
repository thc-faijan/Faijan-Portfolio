"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, CornerDownLeft, RotateCcw, Shield } from "lucide-react";

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "cat skills.txt",
      output: (
        <div className="space-y-1 text-cyber-cyan font-mono">
          <div>Web Application Security</div>
          <div>VAPT</div>
          <div>Reconnaissance</div>
          <div>Linux</div>
          <div>Python</div>
          <div>Burp Suite</div>
          <div>OWASP Top 10</div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputContent: React.ReactNode = "";

    switch (cmd) {
      case "help":
        outputContent = (
          <div className="space-y-1 text-cyber-muted font-mono text-xs">
            <div><strong className="text-cyber-cyan">cat skills.txt</strong> - Display security skills file</div>
            <div><strong className="text-cyber-cyan">whoami</strong> - Show user profile & role</div>
            <div><strong className="text-cyber-cyan">projects</strong> - List featured security tools</div>
            <div><strong className="text-cyber-cyan">scan</strong> - Run mock network port scan</div>
            <div><strong className="text-cyber-cyan">contact</strong> - Display contact email & links</div>
            <div><strong className="text-cyber-cyan">clear</strong> - Clear terminal buffer</div>
          </div>
        );
        break;
      case "cat skills.txt":
      case "skills":
        outputContent = (
          <div className="space-y-1 text-cyber-cyan font-mono">
            <div>Web Application Security</div>
            <div>VAPT</div>
            <div>Reconnaissance</div>
            <div>Linux</div>
            <div>Python</div>
            <div>Burp Suite</div>
            <div>OWASP Top 10</div>
          </div>
        );
        break;
      case "whoami":
        outputContent = (
          <div className="text-cyber-light font-mono text-xs">
            Faijan Ansari | Final-Year BCA Cyber Security Student | WAPT & VAPT Specialist
          </div>
        );
        break;
      case "projects":
        outputContent = (
          <div className="space-y-1 text-cyber-muted font-mono text-xs">
            <div>[+] <strong className="text-cyber-cyan">Falcon</strong>: VAPT/reconnaissance automation framework</div>
            <div>[+] <strong className="text-cyber-cyan">RapidScan</strong>: Lightweight port scanner & network discovery</div>
            <div>[+] <strong className="text-cyber-cyan">Secure Password Generator</strong>: High-entropy password tool</div>
          </div>
        );
        break;
      case "scan":
        outputContent = (
          <div className="space-y-1 text-cyber-emerald font-mono text-xs">
            <div>[+] Initiating mock port scan on 127.0.0.1...</div>
            <div>PORT     STATE SERVICE       VERSION</div>
            <div>22/tcp   open  ssh           OpenSSH 9.2p1</div>
            <div>80/tcp   open  http          Nginx 1.24.0</div>
            <div>443/tcp  open  ssl/https     Nginx 1.24.0</div>
            <div>8080/tcp open  http-proxy    Burp Suite Pro</div>
            <div className="text-cyber-cyan mt-1">[!] Scan completed. No critical open vulnerabilities found.</div>
          </div>
        );
        break;
      case "contact":
        outputContent = (
          <div className="text-cyber-cyan font-mono text-xs">
            Email: faijan.security@example.com | GitHub: github.com/faijanansari
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        outputContent = (
          <div className="text-red-400 font-mono text-xs">
            command not found: {cmd}. Type <strong className="text-cyber-cyan">help</strong> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: outputContent }]);
    setInput("");
  };

  return (
    <section id="terminal" className="py-20 bg-cyber-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>CLI INTERACTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-light">
            Interactive <span className="text-cyber-cyan">Terminal</span>
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-xl">
            Type commands directly into the terminal emulator below to query skills, profile data, or run mock security scans.
          </p>
        </div>

        {/* Terminal Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-cyber-charcoal border border-cyber-cyan/30 rounded-xl overflow-hidden shadow-card-glow"
        >
          {/* Top Bar */}
          <div className="bg-cyber-card px-4 py-3 border-b border-cyber-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-xs font-mono text-cyber-muted ml-2">faijan@kali:~</span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="text-cyber-muted hover:text-cyber-cyan transition-colors p-1 rounded hover:bg-cyber-charcoal text-xs font-mono flex items-center gap-1"
              title="Clear terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm space-y-4 min-h-[260px] max-h-[420px] overflow-y-auto">
            {/* Initial Welcome Hint */}
            <div className="text-cyber-muted text-xs leading-relaxed border-b border-cyber-border/50 pb-3">
              Type <span className="text-cyber-cyan font-bold">help</span> to view all available commands. Try <span className="text-cyber-cyan">cat skills.txt</span>, <span className="text-cyber-cyan">whoami</span>, <span className="text-cyber-cyan">projects</span>, or <span className="text-cyber-cyan">scan</span>.
            </div>

            {/* History Items */}
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyber-light">
                  <span className="text-cyber-cyan">faijan@kali:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="pl-4 border-l border-cyber-cyan/30 py-1">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Command Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
              <span className="text-cyber-cyan shrink-0">faijan@kali:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command..."
                className="flex-1 bg-transparent border-none outline-none text-cyber-light font-mono text-sm focus:ring-0 placeholder:text-cyber-muted/50"
                autoFocus
              />
              <button type="submit" className="text-cyber-muted hover:text-cyber-cyan">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>

            <div ref={terminalEndRef} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
