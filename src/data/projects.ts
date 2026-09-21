import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "falcon",
    name: "Falcon",
    description: "A security-focused VAPT/reconnaissance framework designed to automate common security testing workflows.",
    longDescription:
      "Falcon is an open-source offensive security engine built to streamline information gathering, passive subdomain enumeration, and port scanning workflows. It pipelines output from multiple reconnaissance utilities into a single, clean JSON report for vulnerability analysis.",
    technologies: ["Python", "Bash", "Nmap", "Reconnaissance", "Security Automation"],
    category: "VAPT Framework",
    githubUrl: "https://github.com/faijanansari/falcon",
    demoUrl: "https://github.com/faijanansari/falcon#readme",
    featured: true,
    highlights: [
      "Automated subdomain discovery via Subfinder & HTTP probing",
      "Integrated port scan orchestrator using Nmap scripts",
      "Structured JSON & HTML report generation for vulnerability assessments",
      "Configurable rate limiting and custom wordlist support",
    ],
    icon: "ShieldAlert",
  },
  {
    id: "rapidscan",
    name: "RapidScan",
    description: "A lightweight network reconnaissance and port scanning project.",
    longDescription:
      "RapidScan provides rapid network discovery and service fingerprinting. Built with multi-threaded Python networking modules, it quickly identifies open ports, banner information, and common security misconfigurations on local and remote subnets.",
    technologies: ["Python", "Networking", "Nmap", "Sockets"],
    category: "Reconnaissance",
    githubUrl: "https://github.com/faijanansari/rapidscan",
    demoUrl: "https://github.com/faijanansari/rapidscan#usage",
    featured: true,
    highlights: [
      "Multi-threaded port scanning for fast execution",
      "Automatic service banner grabbing & OS fingerprinting",
      "Export capability to CSV and terminal table format",
    ],
    icon: "Radar",
  },
  {
    id: "secure-password-generator",
    name: "Secure Password Generator",
    description: "A security-focused password generator designed to create strong random passwords with configurable requirements.",
    longDescription:
      "Utilizes cryptographically secure random number generators (secrets module in Python) to generate high-entropy passphrases, tokens, and passwords. Includes entropy scoring and customizable rule enforcement.",
    technologies: ["Python", "Security", "Cryptography", "Entropy Analysis"],
    category: "Cryptography",
    githubUrl: "https://github.com/faijanansari/secure-password-generator",
    demoUrl: "https://github.com/faijanansari/secure-password-generator#readme",
    featured: true,
    highlights: [
      "Cryptographically secure randomness using OS entropy sources",
      "Configurable character sets (symbols, uppercase, numbers, custom tokens)",
      "Shannon entropy score calculation for passphrase evaluation",
    ],
    icon: "KeyRound",
  },
  {
    id: "owasp-vulnerability-lab",
    name: "OWASP Vulnerability Lab Scripts",
    description: "Custom exploit scripts and vulnerability assessment modules developed for OWASP Top 10 hands-on research.",
    longDescription:
      "A collection of proof-of-concept scripts demonstrating vulnerabilities such as Reflected XSS, SQLi parameter injection, and IDOR access bypasses in controlled lab environments.",
    technologies: ["Python", "JavaScript", "Burp Suite", "Web Security"],
    category: "Web Security",
    githubUrl: "https://github.com/faijanansari/owasp-vulnerability-lab",
    featured: false,
    highlights: [
      "PoC scripts for testing authorization bypasses",
      "Automated payload tester for laboratory XSS environments",
    ],
    icon: "Terminal",
  },
];
