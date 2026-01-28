"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { leadershipData } from "@/data/education";
import { Users, Quote, Sparkles } from "lucide-react";

export default function Leadership() {
    return (
        <section id="leadership" className="py-24 bg-sky-100/10">
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
                            className="p-8 bg-white rounded-[2.5rem] border border-sky-100 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-400/5 transition-all relative overflow-hidden group shadow-sm"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                                <Quote className="w-16 h-16 text-sky-200" />
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-600 border border-sky-100 group-hover:border-sky-300 transition-colors">
                                    <Users className="w-6 h-6 outline-2" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-sky-950 mb-1 group-hover:text-sky-600 transition-colors">{lead.title}</h3>
                                    <div className="text-orange-600 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                        <Sparkles className="w-2.5 h-2.5 font-bold" /> {lead.organization}
                                    </div>
                                </div>
                            </div>
                            <p className="text-sky-900/60 leading-relaxed text-sm font-medium">
                                {lead.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
