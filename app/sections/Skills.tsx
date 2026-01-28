"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import SkillBadge from "@/components/SkillBadge";
import { skillsData } from "@/data/skills";
import { Sparkles } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-sky-50">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    title="The Technical Toolbox"
                    subtitle="A comprehensive list of creative operations, marketing analytics, and design tools used to drive business impact."
                />

                <div className="grid md:grid-cols-2 gap-8 mt-24">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 rounded-[3rem] bg-white border border-sky-100 hover:border-sky-400 transition-all hover:shadow-2xl hover:shadow-sky-400/5 group"
                        >
                            <div className="flex items-center gap-3 mb-10 border-b border-sky-50 pb-6 transition-colors group-hover:border-sky-200">
                                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-600 group-hover:text-orange-700 transition-colors font-bold">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-sky-950 uppercase tracking-widest">
                                    {category.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, sIdx) => (
                                    <SkillBadge key={sIdx} name={skill.name} level={skill.level} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Learning Mindset Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 bg-white border border-sky-200 rounded-[3rem] text-center relative overflow-hidden shadow-sm shadow-sky-400/5"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <h3 className="text-2xl font-bold text-sky-950 mb-4 tracking-tight">Driving Future Growth with AI</h3>
                    <p className="text-sky-800/60 max-w-2xl mx-auto leading-relaxed font-medium">
                        Currently leveraging AI-powered marketing tools and predictive analytics to innovate beyond traditional strategies, ensuring brand resonance in an evolving digital landscape.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
