import { Experience } from "@/types";

export const experienceData: Experience[] = [
  {
    id: "iqrasec-academy",
    role: "Web Application Penetration Testing Intern",
    company: "IqraSec Academy",
    location: "Remote",
    period: "September 2026 — Present",
    isCurrent: true,
    description:
      "Gaining hands-on practical exposure to Web Application Penetration Testing (WAPT) and Vulnerability Assessment methodologies, vulnerability reporting, and web security research.",
    bulletPoints: [
      "Conducted vulnerability assessments across web applications following OWASP Testing Guide standards.",
      "Performed reconnaissance, parameter discovery, and vulnerability identification using Burp Suite, ffuf, and Nmap.",
      "Documented security flaws, attack vectors, and remediation recommendations in technical assessment reports.",
      "Participated in hands-on web security labs focusing on authentication bypass, IDOR, and input validation vulnerabilities.",
    ],
    technologies: ["Burp Suite", "OWASP Testing Guide", "WAPT", "VAPT", "Nmap", "ffuf", "Vulnerability Assessment"],
  },
  {
    id: "shadowfox",
    role: "Cybersecurity Intern",
    company: "ShadowFox",
    location: "Remote",
    period: "May 2026 — May 2026",
    isCurrent: false,
    description:
      "Worked on practical cybersecurity assignments, fundamental security principles, and application-oriented security concepts.",
    bulletPoints: [
      "Analyzed basic network traffic patterns and system log files to identify potential anomalies.",
      "Executed practical tasks involving cryptographic algorithms, password auditing, and fundamental Linux security.",
      "Researched common attack vectors and built foundational security tools using Python.",
    ],
    technologies: ["Cybersecurity Fundamentals", "Linux", "Python Scripting", "Network Analysis", "Security Auditing"],
  },
];
