"use client";

import { motion } from "framer-motion";
import { Sparkles, Building2, UserCircle, GraduationCap, ArrowRight } from "lucide-react";

const pathSteps = [
    {
        id: "01",
        title: "Ideajar Digital",
        period: "2019–2022",
        desc: "Where I discovered branding and creative direction.",
        icon: Building2
    },
    {
        id: "02",
        title: "Freelance Projects",
        period: "2020–2023",
        desc: "Experimenting, learning, and building my style.",
        icon: UserCircle
    },
    {
        id: "03",
        title: "Big Adco Agency",
        period: "2022–2023",
        desc: "Hands-on experience in real campaign environments.",
        icon: Sparkles
    },
    {
        id: "04",
        title: "MBA @ UNH",
        period: "2023–2025",
        desc: "Digital Marketing specialization; sharpening analytics skills.",
        icon: GraduationCap
    },
    {
        id: "05",
        title: "Next Opportunity",
        period: "Present",
        desc: "Where am I headed next.....!?",
        icon: ArrowRight,
        highlight: true
    }
];

export default function PathSummary() {
    return (
        <section className="py-20 bg-[#09090B] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.3em] mb-4">The Evolution</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">My Path in Digital Marketing</h2>
                    </div>
                    <p className="text-slate-500 text-sm max-w-sm mb-1 leading-relaxed">
                        A strategic summary of my professional growth and academic foundation before you dive into the details.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {pathSteps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-3xl border ${step.highlight ? 'bg-orange-500/10 border-orange-500/30' : 'bg-white/5 border-white/10'} hover:border-sky-500/30 transition-all group`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className={`text-2xl font-black ${step.highlight ? 'text-orange-400' : 'text-white/10 group-hover:text-sky-400/20'} transition-colors`}>{step.id}.</span>
                                <step.icon className={`w-5 h-5 ${step.highlight ? 'text-orange-400' : 'text-sky-500'}`} />
                            </div>
                            <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-3">{step.period}</div>
                            <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
