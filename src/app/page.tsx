import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Terminal from "@/components/Terminal";
import WriteupsPreview from "@/components/WriteupsPreview";
import GitHubSection from "@/components/GitHubSection";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Terminal />
      <WriteupsPreview />
      <GitHubSection />
      <ResumeSection />
      <Contact />
    </>
  );
}
