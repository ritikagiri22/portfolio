"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import SkillBadge from "@/components/SkillBadge";
import { skillsData } from "@/data/skills";
import { Sparkles } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-[#09090B]">
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
                            className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-orange-500/20 transition-all hover:shadow-2xl hover:shadow-orange-500/5 group"
                        >
                            <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-6">
                                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 group-hover:text-orange-300 transition-colors">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-widest">
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
                    className="mt-20 p-12 bg-gradient-to-r from-sky-900 to-[#09090B] border border-sky-500/20 rounded-[3rem] text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <h3 className="text-2xl font-bold text-white mb-4">Driving Future Growth with AI</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Currently leveraging AI-powered marketing tools and predictive analytics to innovate beyond traditional strategies, ensuring brand resonance in an evolving digital landscape.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
