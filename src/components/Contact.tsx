"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Construct mailto URL as clean client fallback
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setStatus("success");
      // Trigger user default mail client
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-cyber-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-light">
            Contact <span className="text-cyber-cyan">Me</span>
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-xl">
            Interested in penetration testing, security research collaborations, or internship opportunities? Drop me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Left Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-cyber-light font-mono">
                Contact Information
              </h3>
              <p className="text-cyber-muted text-sm leading-relaxed">
                Feel free to reach out via email or connect with me across professional channels.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-3 rounded-lg bg-cyber-charcoal border border-cyber-border hover:border-cyber-cyan/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-cyber-card text-cyber-cyan group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-cyber-muted">Direct Email</div>
                    <div className="text-sm font-mono text-cyber-light group-hover:text-cyber-cyan transition-colors">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg bg-cyber-charcoal border border-cyber-border hover:border-cyber-cyan/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-cyber-card text-cyber-cyan group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-cyber-muted">LinkedIn Profile</div>
                    <div className="text-sm font-mono text-cyber-light group-hover:text-cyber-cyan transition-colors">
                      in/faijanansari
                    </div>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg bg-cyber-charcoal border border-cyber-border hover:border-cyber-cyan/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-cyber-card text-cyber-cyan group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-cyber-muted">GitHub Repositories</div>
                    <div className="text-sm font-mono text-cyber-light group-hover:text-cyber-cyan transition-colors">
                      github.com/faijanansari
                    </div>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-3 rounded-lg bg-cyber-charcoal border border-cyber-border">
                  <div className="p-2.5 rounded-lg bg-cyber-card text-cyber-cyan">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-cyber-muted">Location</div>
                    <div className="text-sm font-mono text-cyber-light">
                      {siteConfig.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right Panel */}
          <div className="lg:col-span-7">
            <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-8">
              
              {status === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan flex items-center justify-center mx-auto shadow-cyan-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyber-light font-mono">
                    Message Prepared!
                  </h3>
                  <p className="text-cyber-muted text-sm max-w-md mx-auto">
                    Your email client has been launched with your message formatted for <span className="text-cyber-cyan">{siteConfig.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2.5 bg-cyber-charcoal border border-cyber-border text-cyber-light hover:text-cyber-cyan font-mono text-xs rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-cyber-light font-mono">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-cyber-muted mb-2">
                        Your Name <span className="text-cyber-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-cyber-charcoal border border-cyber-border rounded-lg text-cyber-light font-mono text-sm focus:outline-none focus:border-cyber-cyan transition-colors"
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-cyber-muted mb-2">
                        Your Email <span className="text-cyber-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-cyber-charcoal border border-cyber-border rounded-lg text-cyber-light font-mono text-sm focus:outline-none focus:border-cyber-cyan transition-colors"
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-cyber-muted mb-2">
                      Subject <span className="text-cyber-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="WAPT Project / Internship Inquiry"
                      className="w-full px-4 py-3 bg-cyber-charcoal border border-cyber-border rounded-lg text-cyber-light font-mono text-sm focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                    {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-cyber-muted mb-2">
                      Message <span className="text-cyber-cyan">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Faijan, I reviewed your WAPT portfolio and would like to discuss..."
                      className="w-full px-4 py-3 bg-cyber-charcoal border border-cyber-border rounded-lg text-cyber-light font-mono text-sm focus:outline-none focus:border-cyber-cyan transition-colors resize-none"
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-cyber-cyan text-cyber-bg font-mono font-bold text-sm rounded-lg hover:bg-cyber-cyan/90 transition-all shadow-cyan-glow flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === "submitting" ? "Preparing..." : "Send Message"}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
