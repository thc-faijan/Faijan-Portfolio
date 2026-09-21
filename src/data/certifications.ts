import { Certification } from "@/types";

export const certificationsData: Certification[] = [
  {
    id: "github-foundations",
    name: "GitHub Foundations Certification",
    issuer: "GitHub",
    date: "2026",
    credentialId: "GH-FOUNDATION-2026-FA",
    verificationUrl: "https://github.com/certifications",
    description: "Demonstrates proficiency in GitHub version control, repository security, pull request workflows, and GitHub Actions.",
    badgeColor: "#00f0ff",
  },
  {
    id: "tryhackme-web-fundamentals",
    name: "Web Fundamentals Path",
    issuer: "TryHackMe",
    date: "2026",
    credentialId: "THM-WEB-FUNDAMENTALS",
    verificationUrl: "https://tryhackme.com",
    description: "Hands-on completion of web hacking modules covering HTTP/HTTPS protocols, OWASP Top 10, cookie exploitation, and parameter tampering.",
    badgeColor: "#10b981",
  },
  {
    id: "coursera-cybersecurity",
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera / Google",
    date: "2025",
    credentialId: "COURSERA-CYBER-SEC-2025",
    verificationUrl: "https://coursera.org",
    description: "Comprehensive foundation in network security, Python for security tasks, SIEM tooling, packet analysis, and incident response fundamentals.",
    badgeColor: "#3b82f6",
  },
  {
    id: "tryhackme-junior-pentester",
    name: "Jr Penetration Tester Path (In Progress)",
    issuer: "TryHackMe",
    date: "2026",
    credentialId: "THM-JR-PENTESTER",
    verificationUrl: "https://tryhackme.com",
    description: "Practical methodology coverage of network testing, vulnerability analysis, web app security, and privilege escalation techniques.",
    badgeColor: "#f59e0b",
  },
];
