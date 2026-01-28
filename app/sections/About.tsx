"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Sparkles, Brain, MessageSquare, LineChart, TrendingUp } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#09090B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-sky-500/20">
                            <Sparkles className="w-3 h-3" /> Who I Am?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Bridging Creativity <br /> & <span className="text-orange-400">Analytics</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            I am a Digital Marketing and Brand Strategy professional with over 5 years of experience across international markets including the USA, Australia, and Nepal.
                        </p>
                        <p className="text-slate-500 text-sm leading-relaxed mb-10">
                            I specialize in coordinating creative projects and managing client communications. My mission is to develop content strategies that connect deep creativity with data-driven business outcomes.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-2xl font-bold text-white">15%</div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Engagement Boost</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">35%</div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Brand Visibility</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <HighlightCard
                            icon={Brain}
                            title="Creative Operations"
                            text="Streamlining workflows in fast-paced agency environments."
                        />
                        <HighlightCard
                            icon={MessageSquare}
                            title="Brand Development"
                            text="Building identities that connect creativity with growth."
                        />
                        <HighlightCard
                            icon={LineChart}
                            title="Campaign Execution"
                            text="Multi-channel focus on engagement and ROI."
                        />
                        <HighlightCard
                            icon={TrendingUp}
                            title="Strategic Synergy"
                            text="Aligning brand voice across international markets."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function HighlightCard({ icon: Icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-sky-500/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{text}</p>
        </div>
    );
}
