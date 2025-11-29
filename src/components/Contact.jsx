import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3500);
    }, 900);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Have a project or opportunity? Reach out — I respond quickly.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl glass tilt-hover shimmer">
              <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>
              <p className="text-gray-400">Prefer email? Send me a message and I’ll reply within 24 hours.</p>

              <div className="mt-6 space-y-4">
                <a href="mailto:akabhi0736@gmail.com" className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:shadow-lg hover:border-cyan-400 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-white font-medium">akabhi0736@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+917307260736" className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:shadow-lg hover:border-pink-400 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-sm">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="text-white font-medium">+91 7307260736</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-sm">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-white font-medium">Gorakhpur, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs text-gray-400 mb-2">Follow Me</p>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/Abhishek0736" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all tilt-hover">
                    <Github className="text-white" size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek-ku0736" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all tilt-hover">
                    <Linkedin className="text-white" size={18} />
                  </a>
                  <a href="mailto:akabhi0736@gmail.com" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all tilt-hover">
                    <Mail className="text-white" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl glass tilt-hover shimmer">
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-gray-300 mb-1 block">Your Name</label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all" />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-gray-300 mb-1 block">Email Address</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all" />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-gray-300 mb-1 block">Message</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all resize-none" />
                </div>

                {submitted && (
                  <div className="p-3 rounded-lg bg-green-900/30 border border-green-500/40 text-green-200 text-center animate-fade-in">
                    ✓ Message sent — thank you! I'll reply soon.
                  </div>
                )}

                <button type="submit" className="inline-flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transform transition-all shadow-md">
                  <Send size={18} />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
