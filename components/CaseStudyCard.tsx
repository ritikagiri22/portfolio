"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CaseStudy } from "@/types";
import { ArrowRight, Sparkles } from "lucide-react";

interface CaseStudyCardProps {
    project: CaseStudy;
    index: number;
}

export default function CaseStudyCard({ project, index }: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:border-sky-500/20 transition-all hover:shadow-[0_20px_50px_rgba(14,165,233,0.05)]"
        >
            <div className="relative h-72 w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-orange-400" />
                        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Impact Analysis</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-1 font-medium">{project.description}</p>
                </div>
            </div>

            <div className="p-10">
                <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Strategic Challenge</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{project.problem}</p>
                </div>

                <div className="mb-10">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Quantifiable Outcomes</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {project.results.map((res, i) => (
                            <div key={i} className="bg-white/[0.03] p-4 rounded-2xl border border-white/5 group-hover:border-orange-500/10 transition-colors">
                                <div className="text-2xl font-bold text-orange-400 mb-1">{res.value}</div>
                                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">{res.metric}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1.5 bg-sky-500/5 text-sky-400 text-[10px] font-bold rounded-xl border border-sky-500/10 uppercase tracking-tight">
                            {tool}
                        </span>
                    ))}
                </div>

                <button className="flex items-center gap-2 text-white font-bold text-sm hover:gap-4 transition-all group/btn">
                    Deconstruct Strategy <ArrowRight className="w-4 h-4 text-orange-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
}
