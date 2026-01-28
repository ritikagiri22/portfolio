"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Send, Mail, MapPin, Linkedin, Instagram, Sparkles, Loader2 } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            if (res.ok) setStatus("success");
            else setStatus("error");
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <section className="py-24 bg-sky-50" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    title="Ready to Partner?"
                    subtitle="I'm always open to discussing new brand strategies, creative operations, or exciting marketing opportunities."
                />

                <div className="grid lg:grid-cols-12 gap-12 mt-16 items-start">
                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 p-10 bg-sky-950 rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/20 rounded-full blur-[80px] -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -ml-32 -mb-32" />

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8 leading-tight">Let's build something <br /> <span className="text-sky-400">meaningful</span> together.</h3>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-sky-400 border border-white/10 transition-all group-hover:scale-110">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-0.5">Email Me</div>
                                        <div className="font-bold text-lg">hello@ritikagiri.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-orange-400 border border-white/10 transition-all group-hover:scale-110">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-0.5">Based In</div>
                                        <div className="font-bold text-lg">Hartford, CT, USA</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <SocialLink icon={Linkedin} href="https://linkedin.com/in/ritikaofficial" />
                                <SocialLink icon={Instagram} href="#" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white p-10 rounded-[3rem] border border-sky-100 shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] font-bold text-sky-600/40 uppercase tracking-widest ml-4 mb-2 block">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-sky-50/50 border border-sky-100 rounded-2xl px-6 py-4 outline-none focus:border-sky-400 transition-all font-medium text-sky-950 placeholder:text-sky-950/20 shadow-sm"
                                        placeholder="Jane Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-sky-600/40 uppercase tracking-widest ml-4 mb-2 block">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-sky-50/50 border border-sky-100 rounded-2xl px-6 py-4 outline-none focus:border-sky-400 transition-all font-medium text-sky-950 placeholder:text-sky-950/20 shadow-sm"
                                        placeholder="jane@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-sky-600/40 uppercase tracking-widest ml-4 mb-2 block">How can I help?</label>
                                <textarea
                                    rows={5}
                                    required
                                    className="w-full bg-sky-50/50 border border-sky-100 rounded-2xl px-6 py-4 outline-none focus:border-sky-400 transition-all font-medium text-sky-950 placeholder:text-sky-950/20 shadow-sm resize-none"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-4 bg-sky-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-sky-700 shadow-lg shadow-sky-600/20 active:scale-[0.98] transition-all disabled:opacity-50"
                            >
                                {status === "loading" ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>Send My Message <Send className="w-4 h-4" /></>
                                )}
                            </button>

                            {status === "success" && (
                                <p className="text-center text-green-600 font-bold text-sm mt-4 animate-bounce">
                                    Message sent successfully!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-center text-orange-600 font-bold text-sm mt-4">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/10 hover:bg-sky-500 hover:border-sky-400 hover:scale-110 transition-all shadow-sm"
        >
            <Icon className="w-5 h-5" />
        </a>
    );
}
