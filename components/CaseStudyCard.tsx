"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/types";
import { ArrowUpRight, CheckCircle2, Zap } from "lucide-react";

interface CaseStudyCardProps {
    project: CaseStudy;
    index: number;
}

export default function CaseStudyCard({ project, index }: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-[2.5rem] border border-sky-100 overflow-hidden shadow-sm hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-400/5 transition-all"
        >
            <div className="p-10 pb-0">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                        {project.tools.slice(0, 3).map((tool, idx) => (
                            <span key={idx} className="text-[9px] font-bold text-sky-600 bg-sky-50 border border-sky-100 px-2 py-1 rounded-md uppercase tracking-wider">
                                {tool}
                            </span>
                        ))}
                    </div>
                    <Zap className="w-5 h-5 text-orange-500" />
                </div>

                <h3 className="text-2xl font-bold text-sky-950 mb-4 group-hover:text-sky-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-sky-900/60 text-sm leading-relaxed mb-8 font-medium">
                    {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.results.map((result, idx) => (
                        <div key={idx} className="p-4 bg-sky-50 rounded-2xl border border-sky-100 group-hover:border-sky-200 transition-colors">
                            <div className="flex items-center gap-2 text-sky-600 font-bold text-sm mb-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                {result.value}
                            </div>
                            <div className="text-[10px] text-sky-900/40 font-bold uppercase tracking-widest leading-tight">
                                {result.metric}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-10 py-6 bg-sky-50 border-t border-sky-100 flex items-center justify-between group-hover:bg-sky-100/50 transition-colors">
                <span className="text-[10px] font-bold text-sky-900/40 uppercase tracking-widest">View Detailed Case Study</span>
                <div className="w-8 h-8 rounded-full bg-white border border-sky-200 flex items-center justify-center text-sky-950 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
}
