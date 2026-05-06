import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 section-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-500" />
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                    <a href="mailto:akabhi0736@gmail.com" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Mail size={20} className="text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-xs text-muted font-bold uppercase tracking-widest">Email Me</p>
                            <p className="text-gray-200 font-medium">akabhi0736@gmail.com</p>
                        </div>
                    </a>

                    <a href="tel:+917307260736" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Phone size={20} className="text-violet-400" />
                        </div>
                        <div>
                            <p className="text-xs text-muted font-bold uppercase tracking-widest">Call Me</p>
                            <p className="text-gray-200 font-medium">+91 7307260736</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <MapPin size={20} className="text-pink-400" />
                        </div>
                        <div>
                            <p className="text-xs text-muted font-bold uppercase tracking-widest">Location</p>
                            <p className="text-gray-200 font-medium">Gorakhpur, India</p>
                        </div>
                    </div>
                </div>

                {/* Socials */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-xs text-muted font-bold uppercase tracking-widest mb-6">Follow My Work</p>
                    <div className="flex gap-4">
                        {[
                            { icon: Github,   href: "https://github.com/Abhishek0736",               color: "cyan" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-ku0736",   color: "violet" },
                        ].map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noreferrer" className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-${s.color}-500/50 hover:bg-${s.color}-500/10 transition-all duration-300`}>
                                <s.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                        <input type="text" placeholder="John Doe" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                        <input type="email" placeholder="john@example.com" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                    <input type="text" placeholder="Project Inquiry" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500/50 transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                    <textarea rows="5" placeholder="Hi Abhishek, I'd like to talk about..." required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"></textarea>
                </div>

                <button
                    disabled={status === "submitting"}
                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white shadow-xl transition-all duration-300 ${status === 'success' ? 'bg-emerald-500' : 'bg-gradient-to-r from-cyan-500 to-violet-600 hover:scale-[1.02] hover:shadow-violet-500/25'}`}
                >
                    {status === "idle" && <><Send size={18} /> Send Message</>}
                    {status === "submitting" && "Sending..."}
                    {status === "success" && <><CheckCircle size={18} /> Message Sent!</>}
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
