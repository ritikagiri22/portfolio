"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { leadershipData } from "@/data/education";
import { Users, Quote, Sparkles } from "lucide-react";

export default function Leadership() {
    return (
        <section id="leadership" className="py-24 bg-[#09090B]">
            <div className="max-w-6xl mx-auto px-4">
                <SectionHeader
                    title="Leadership & Mentorship"
                    subtitle="I believe in contributing back to the ecosystem through mentoring, speaking, and organizing community events."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {leadershipData.map((lead, index) => (
                        <motion.div
                            key={lead.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-orange-500/20 transition-all relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity">
                                <Quote className="w-16 h-16 text-white" />
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 border border-sky-500/20 group-hover:border-sky-500/40 transition-colors">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{lead.title}</h3>
                                    <div className="text-orange-400 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                        <Sparkles className="w-2.5 h-2.5" /> {lead.organization}
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-sm font-medium">
                                {lead.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
