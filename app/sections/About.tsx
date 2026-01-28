"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCard from "@/components/AnimatedCard";
import { Brain, LineChart, MessageSquare, Sparkles, TrendingUp } from "lucide-react";

const highlights = [
    {
        icon: Brain,
        title: "Creative Operations",
        text: "I coordinate complex creative projects and streamline workflows in fast-paced agency environments.",
    },
    {
        icon: MessageSquare,
        title: "Brand Development",
        text: "I am passionate about building brand identities that connect human creativity with measurable business growth.",
    },
    {
        icon: LineChart,
        title: "Campaign Execution",
        text: "I execute multi-channel campaigns with a focus on engagement, content strategy, and ROI.",
    },
    {
        icon: TrendingUp,
        title: "Strategic Synergy",
        text: "I manage high-level stakeholder communications and align brand voice across international markets.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#09090B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    title="The Strategy Behind My Work"
                    subtitle="I am a Digital Marketing and Brand Strategy professional with over 5 years of experience across international markets including the USA, Australia, and Nepal."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                    {highlights.map((item, index) => (
                        <AnimatedCard key={index} delay={index * 0.1} className="bg-white/5 border-white/10 p-10">
                            <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6 text-sky-400 border border-sky-500/20">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.text}
                            </p>
                        </AnimatedCard>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-10 md:p-14 glass-card rounded-[3rem] relative overflow-hidden border border-white/5"
                >
                    {/* Decorative background blur */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[80px] -mr-40 -mt-40" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[80px] -ml-40 -mb-40" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-orange-500/20">
                                <Sparkles className="w-3 h-3" /> My Professional Summary
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Bridging Creativity <br /> & <span className="text-sky-400">Analytics</span>
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-8 text-base">
                                I specialize in coordinating creative projects and managing client communications. My mission is to develop content strategies that connect deep creativity with data-driven business outcomes.
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-xl font-bold text-white">Hartford, CT</div>
                                    <div className="text-[9px] text-slate-500 font-bold uppercase mt-1">My Base</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-white">Global</div>
                                    <div className="text-[9px] text-slate-500 font-bold uppercase mt-1">Impact</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="text-3xl font-bold text-sky-400 mb-1">15%</div>
                                <div className="font-bold text-white mb-1 uppercase text-[10px] tracking-wider">Engagement Boost</div>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="text-3xl font-bold text-orange-400 mb-1">35%</div>
                                <div className="font-bold text-white mb-1 uppercase text-[10px] tracking-wider">Brand Visibility</div>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="text-3xl font-bold text-white">10+</div>
                                <div className="font-bold text-white mb-1 uppercase text-[10px] tracking-wider">Client Accounts</div>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="text-3xl font-bold text-sky-400">5+</div>
                                <div className="font-bold text-white mb-1 uppercase text-[10px] tracking-wider">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
