"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Send, Mail, MapPin, Linkedin, Instagram, Sparkles, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="py-24 bg-[#09090B]" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    title="Ready to Partner?"
                    subtitle="Let's build your brand story together. Reach out for consultations, creative collaborations, or just a quick marketing chat."
                />

                <div className="grid lg:grid-cols-2 gap-20 mt-24">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-10">Contact Information</h3>
                        <div className="space-y-10">
                            <div className="flex gap-8 items-start group">
                                <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center shrink-0 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500/20 transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Email Address</div>
                                    <div className="text-xl font-bold text-white hover:text-sky-400 transition-colors cursor-pointer">giriritika122@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex gap-8 items-start group">
                                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center shrink-0 text-orange-400 border border-orange-500/20 group-hover:bg-orange-500/20 transition-all">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Current Location</div>
                                    <div className="text-xl font-bold text-white">Hartford, CT (Open to Global)</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Digital Ecosystem</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ritikagirii", color: "hover:bg-[#0077B5]" },
                                    { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-slate-300 ${social.color} hover:text-white transition-all border border-white/10 shadow-lg`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-20 p-10 bg-gradient-to-br from-orange-600/20 to-[#09090B] border border-orange-500/20 rounded-[3rem] text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                <Sparkles className="w-16 h-16 text-orange-400" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Availability Update</h4>
                            <p className="text-slate-300 leading-relaxed font-medium">
                                Currently focusing on Digital Analytics and Brand Strategy projects. Open for collaborative ventures starting Q2 2026.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-14 glass-card rounded-[3.5rem] border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500/50 outline-none transition-all placeholder:text-slate-600 text-white font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500/50 outline-none transition-all placeholder:text-slate-600 text-white font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500/50 outline-none transition-all placeholder:text-slate-600 text-white font-medium"
                                    placeholder="Inquiry about Brand Strategy"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Narrative</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500/50 outline-none transition-all placeholder:text-slate-600 text-white font-medium resize-none"
                                    placeholder="Tell me about your project or vision..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-6 bg-sky-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-sky-500 transition-all shadow-xl shadow-sky-600/20 active:scale-[0.98] disabled:opacity-70 text-lg uppercase tracking-widest"
                            >
                                {status === "loading" ? "Synthesizing..." : "Initiate Connection"}
                                <Send className="w-5 h-5" />
                            </button>

                            {status === "success" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-green-400 font-bold justify-center bg-green-400/10 p-4 rounded-xl border border-green-400/20">
                                    <CheckCircle className="w-5 h-5" /> Your story has been delivered successfully!
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-red-400 font-bold justify-center bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                                    <AlertCircle className="w-5 h-5" /> Transmission error. Please try again.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
