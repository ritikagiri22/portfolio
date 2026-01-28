"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Sparkles, Brain, MessageSquare, LineChart, TrendingUp } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-sky-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-sky-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-sky-200 shadow-sm">
                            <Sparkles className="w-3 h-3" /> Who I Am?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-sky-950 mb-8 leading-tight tracking-tight">
                            Bridging Creativity <br /> & <span className="text-orange-500">Analytics</span>
                        </h2>
                        <p className="text-sky-900/70 text-lg leading-relaxed mb-6 font-medium">
                            I am a Digital Marketing and Brand Strategy professional with over 5 years of experience across international markets including the USA, Australia, and Nepal.
                        </p>
                        <p className="text-sky-800/60 text-sm leading-relaxed mb-10">
                            I specialize in coordinating creative projects and managing client communications. My mission is to develop content strategies that connect deep creativity with data-driven business outcomes.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pb-8 border-b border-sky-100 mb-8">
                            <div>
                                <div className="text-2xl font-bold text-sky-950">15%</div>
                                <div className="text-[10px] text-sky-600/40 font-bold uppercase tracking-widest">Engagement Boost</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-sky-950">35%</div>
                                <div className="text-[10px] text-sky-600/40 font-bold uppercase tracking-widest">Brand Visibility</div>
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
        <div className="p-8 bg-white border border-sky-100 rounded-[2.5rem] hover:border-sky-400 hover:shadow-xl hover:shadow-sky-400/5 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 mb-6 font-bold">
                <Icon className="w-6 h-6 outline-2" />
            </div>
            <h3 className="text-lg font-bold text-sky-950 mb-2">{title}</h3>
            <p className="text-sky-800/50 text-xs leading-relaxed font-medium">{text}</p>
        </div>
    );
}
