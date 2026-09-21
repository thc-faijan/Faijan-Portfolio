import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "web-security",
    title: "Web Security",
    description: "Methodologies and vulnerability assessments for securing web apps & APIs",
    skills: [
      { name: "OWASP Top 10", isCore: true, description: "Deep understanding of core web risks" },
      { name: "XSS (Cross-Site Scripting)", isCore: true, description: "Reflected, Stored, and DOM-based XSS analysis" },
      { name: "SQL Injection", isCore: true, description: "In-band, Blind, and Time-based SQLi exploitation" },
      { name: "IDOR (Direct Object Ref)", isCore: true, description: "Broken access control & privilege escalation" },
      { name: "Auth & Authorization", isCore: true, description: "JWT, OAuth, Session Management flaws" },
      { name: "API Security", isCore: true, description: "REST API security, GraphQL, endpoint fuzzing" },
      { name: "Business Logic Testing", isCore: false, description: "Identifying workflow & functional bypasses" },
    ],
  },
  {
    id: "security-tools",
    title: "Security Tools",
    description: "Industry-standard offensive tools for vulnerability assessment and penetration testing",
    skills: [
      { name: "Burp Suite", isCore: true, description: "Interceptor, Repeater, Intruder, Extension dev" },
      { name: "Nmap", isCore: true, description: "Network discovery, port scanning, NSE scripting" },
      { name: "ffuf", isCore: true, description: "Fast web fuzzer for directory & parameter discovery" },
      { name: "Feroxbuster", isCore: false, description: "Recursive content discovery in Rust" },
      { name: "SQLmap", isCore: true, description: "Automated SQL injection detection & extraction" },
      { name: "Metasploit", isCore: false, description: "Exploit framework & payload generator" },
      { name: "Hydra", isCore: false, description: "Network logon cracker" },
      { name: "Hashcat", isCore: false, description: "Advanced password recovery & hash cracking" },
      { name: "John the Ripper", isCore: false, description: "Password auditing & offline cracking" },
    ],
  },
  {
    id: "reconnaissance",
    title: "Reconnaissance",
    description: "Information gathering, asset discovery, and target attack surface mapping",
    skills: [
      { name: "Subfinder", isCore: true, description: "Passive subdomain discovery" },
      { name: "Amass", isCore: true, description: "In-depth DNS enumeration & network mapping" },
      { name: "httpx", isCore: true, description: "Probing web servers & HTTP service discovery" },
      { name: "DNS Enumeration", isCore: false, description: "Zone transfers, record analysis, bruteforcing" },
      { name: "Subdomain Enumeration", isCore: true, description: "Combining passive & active reconnaissance" },
      { name: "Port Scanning", isCore: true, description: "TCP/UDP service fingerprinting & OS detection" },
    ],
  },
  {
    id: "programming",
    title: "Programming & Scripting",
    description: "Languages used for security automation, exploit script development, and web research",
    skills: [
      { name: "Python", isCore: true, description: "Exploit development, automation scripts, Scapy/Requests" },
      { name: "Bash", isCore: true, description: "Shell scripting, workflow automation, pipeline tooling" },
      { name: "JavaScript", isCore: true, description: "DOM inspection, Node.js tooling, XSS payload drafting" },
      { name: "HTML", isCore: false, description: "Web page structure analysis" },
      { name: "CSS", isCore: false, description: "UI styling & layout understanding" },
    ],
  },
  {
    id: "platforms",
    title: "Platforms & Labs",
    description: "Environments for practice, development, and version control",
    skills: [
      { name: "Kali Linux", isCore: true, description: "Primary security distribution & custom toolchains" },
      { name: "TryHackMe", isCore: true, description: "Hands-on vulnerability labs & CTF challenges" },
      { name: "GitHub", isCore: true, description: "Version control, CI/CD, open-source security tool distribution" },
    ],
  },
];
