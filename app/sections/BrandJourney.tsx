"use client";

import { motion } from "framer-motion";
import { Sparkles, ExternalLink, ArrowRight } from "lucide-react";

export default function BrandJourney() {
    return (
        <section id="journey" className="py-24 bg-[#09090B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-orange-500/20">
                            <Sparkles className="w-3 h-3" /> Visual Journey
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            I Love Building Brands & <br />
                            <span className="text-sky-400">Organizing Chaos</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            I bring structure, intention, and aesthetic thinking into everything I do. I’m a digitally driven storyteller who turns ideas into meaningful visual experiences.
                        </p>

                        <a
                            href="/api/download-cv?type=portfolio&mode=preview"
                            target="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-sky-600 text-white rounded-2xl font-bold hover:bg-sky-500 transition-all hover:shadow-lg hover:shadow-sky-500/20 group"
                        >
                            Explore My Full Portfolio <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative"
                    >
                        <div className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl border border-white/10 bg-black/60 shadow-2xl">
                            <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Impact Overview</div>
                            <div className="text-white font-bold">Transformed 5+ Brands</div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-sky-400" />
                            How I Transform Brands
                        </h3>

                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">01</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Aroma Magic</h4>
                                    <p className="text-xs text-slate-500">Rebuilt Instagram feed with cohesive, nature-inspired storytelling.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">02</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Hyundai Electronics</h4>
                                    <p className="text-xs text-slate-500">Shifted brand perception to tech-forward via influencer strategy.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">03</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Hello Sunflower Oil</h4>
                                    <p className="text-xs text-slate-500">Positioned product as a kitchen essential through authentic home-recipe content.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
