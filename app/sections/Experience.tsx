"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { experienceData } from "@/data/experience";
import { Briefcase, MapPin, Calendar, Sparkles } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-[#09090B] relative">
            <div className="max-w-5xl mx-auto px-4">
                <SectionHeader
                    title="My Professional Journey"
                    subtitle="A track record of streamlining creative workflows and driving brand growth across international markets."
                />

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/5">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Dot */}
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-[#09090B] group-hover:bg-sky-500 transition-colors shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <Briefcase className="w-3 h-3 text-sky-400 group-hover:text-white transition-colors" />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] py-8 px-10 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md transition-all hover:bg-white/[0.07] hover:border-sky-500/20">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-sky-400 font-bold text-xs tracking-tight">
                                            <Sparkles className="w-3 h-3 text-orange-400" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <span className="text-[9px] font-bold text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full w-fit uppercase tracking-widest h-fit">
                                        {exp.type}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-5 text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                                    <div className="flex items-center gap-1.5 border-r border-white/10 pr-4 last:border-0 h-fit">
                                        <MapPin className="w-3 h-3 text-orange-400" /> {exp.location}
                                    </div>
                                    <div className="flex items-center gap-1.5 h-fit">
                                        <Calendar className="w-3 h-3 text-sky-400" /> {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-2.5">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0 shadow-[0_0_5px_rgba(249,115,22,0.4)]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
