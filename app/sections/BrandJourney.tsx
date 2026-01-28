"use client";

import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";

export default function BrandJourney() {
    return (
        <section id="journey" className="py-24 bg-sky-100/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-sky-200 shadow-sm">
                            <Sparkles className="w-3 h-3" /> Visual Journey
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-sky-950 mb-8 leading-tight tracking-tight">
                            I Love Building Brands & <br />
                            <span className="text-sky-600">Organizing Chaos</span>
                        </h2>
                        <p className="text-sky-900/70 text-lg leading-relaxed mb-8 font-medium">
                            I bring structure, intention, and aesthetic thinking into everything I do. I’m a digitally driven storyteller who turns ideas into meaningful visual experiences.
                        </p>

                        <a
                            href="/api/download-cv?type=portfolio&mode=preview"
                            target="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-sky-600 text-white rounded-2xl font-bold hover:bg-sky-700 shadow-lg shadow-sky-600/30 transition-all active:scale-95 group"
                        >
                            Explore My Full Portfolio <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[3rem] bg-white border border-sky-200 relative shadow-sm"
                    >
                        <div className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl border border-sky-200 bg-white/90 shadow-xl">
                            <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">Impact Overview</div>
                            <div className="text-sky-950 font-bold">Transformed 5+ Brands</div>
                        </div>

                        <h3 className="text-xl font-bold text-sky-950 mb-6 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-sky-500" />
                            How I Transform Brands
                        </h3>

                        <div className="space-y-4">
                            <BrandFeature
                                num="01"
                                title="Aroma Magic"
                                desc="Rebuilt Instagram feed with cohesive, nature-inspired storytelling."
                                color="orange"
                            />
                            <BrandFeature
                                num="02"
                                title="Hyundai Electronics"
                                desc="Shifted brand perception to tech-forward via influencer strategy."
                                color="sky"
                            />
                            <BrandFeature
                                num="03"
                                title="Hello Sunflower Oil"
                                desc="Positioned product as a kitchen essential through authentic home-recipe content."
                                color="orange"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function BrandFeature({ num, title, desc, color }: { num: string, title: string, desc: string, color: string }) {
    return (
        <div className="flex gap-4 p-4 rounded-2xl hover:bg-sky-50 transition-colors border border-transparent hover:border-sky-100">
            <div className={`w-10 h-10 rounded-xl ${color === 'orange' ? 'bg-orange-500/10 text-orange-600' : 'bg-sky-500/10 text-sky-600'} flex items-center justify-center font-bold shrink-0`}>
                {num}
            </div>
            <div>
                <h4 className="text-sky-950 font-bold text-sm mb-1">{title}</h4>
                <p className="text-xs text-sky-800/50 font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
