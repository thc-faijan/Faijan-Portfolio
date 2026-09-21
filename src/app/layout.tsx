import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Faijan Ansari | Cybersecurity & Web Application Penetration Testing",
  description:
    "Portfolio of Faijan Ansari — Cybersecurity student focused on Web Application Penetration Testing, VAPT, offensive security and security research.",
  keywords: [
    "Faijan Ansari",
    "Cybersecurity Portfolio",
    "Web Application Penetration Testing",
    "WAPT",
    "VAPT",
    "Ethical Hacking",
    "Offensive Security",
    "Burp Suite",
    "OWASP Top 10",
    "Security Tools",
  ],
  authors: [{ name: "Faijan Ansari" }],
  creator: "Faijan Ansari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.githubUrl,
    title: "Faijan Ansari | Cybersecurity & Web Application Penetration Testing",
    description:
      "Portfolio of Faijan Ansari — Cybersecurity student focused on Web Application Penetration Testing, VAPT, offensive security and security research.",
    siteName: "Faijan Ansari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faijan Ansari | Cybersecurity & Web Application Penetration Testing",
    description:
      "Portfolio of Faijan Ansari — Cybersecurity student focused on Web Application Penetration Testing, VAPT, offensive security and security research.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${sansFont.variable} ${monoFont.variable}`}>
      <body className="min-h-screen flex flex-col bg-cyber-bg text-cyber-light font-sans antialiased selection:bg-cyber-cyan/20 selection:text-cyber-cyan">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
