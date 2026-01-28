"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { educationData } from "@/data/education";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 bg-[#09090B]">
            <div className="max-w-4xl mx-auto px-4">
                <SectionHeader
                    title="My Academic Foundation"
                    subtitle="I grounded my analytical mindset and strategic marketing philosophy through these specialized programs."
                />

                <div className="space-y-6 mt-16">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-6 p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-sky-500/20 transition-all backdrop-blur-md relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-[30px] -mr-12 -mt-12 group-hover:bg-sky-500/10 transition-colors" />

                            <div className="w-14 h-14 bg-gradient-to-br from-sky-600 to-sky-400 rounded-2xl flex items-center justify-center shrink-0 text-white">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h3 className="text-xl font-bold text-white leading-tight">{edu.degree}</h3>
                                    <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-[9px] font-bold rounded-full border border-orange-500/20 uppercase tracking-widest whitespace-nowrap">
                                        {edu.period}
                                    </span>
                                </div>
                                <div className="text-sky-400 font-bold text-sm mb-4">
                                    {edu.institution}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {edu.highlights?.map((h, i) => (
                                        <div key={i} className="flex items-center gap-2 text-[10px] text-slate-400 font-bold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                                            <Award className="w-3 h-3 text-orange-400" /> {h}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
