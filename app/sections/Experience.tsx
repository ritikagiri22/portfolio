"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { experienceData } from "@/data/experience";
import { Briefcase, MapPin, Calendar, Sparkles } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-sky-50 relative">
            <div className="max-w-5xl mx-auto px-4">
                <SectionHeader
                    title="My Professional Journey"
                    subtitle="A track record of streamlining creative workflows and driving brand growth across international markets."
                />

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-sky-200/50">
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
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-sky-200 bg-white group-hover:bg-sky-600 transition-colors shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <Briefcase className="w-3 h-3 text-sky-500 group-hover:text-white transition-colors" />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] py-8 px-10 bg-white border border-sky-100 rounded-[2rem] transition-all hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-400/5">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-sky-950 mb-1">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-sky-600 font-bold text-xs tracking-tight">
                                            <Sparkles className="w-3 h-3 text-orange-500" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <span className="text-[9px] font-bold text-sky-600 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full w-fit uppercase tracking-widest h-fit shadow-sm">
                                        {exp.type}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-5 text-[11px] text-sky-600/60 font-bold uppercase tracking-wider">
                                    <div className="flex items-center gap-1.5 border-r border-sky-100 pr-4 last:border-0 h-fit">
                                        <MapPin className="w-3 h-3 text-orange-500" /> {exp.location}
                                    </div>
                                    <div className="flex items-center gap-1.5 h-fit">
                                        <Calendar className="w-3 h-3 text-sky-500" /> {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-2.5">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sky-900/70 text-sm leading-relaxed font-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0 shadow-[0_0_5px_rgba(249,115,22,0.3)]" />
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
