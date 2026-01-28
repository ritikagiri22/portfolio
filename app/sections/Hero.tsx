"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Eye, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-[#09090B]">
            {/* Background Abstract Shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 45, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-600/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, -45, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                        Digital Marketer | Storyteller | Content & Analytics
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Hi, I am <span className="text-sky-400">Ritika Giri</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl font-medium">
                        I am a digital marketing professional with <span className="text-orange-400 font-bold">5+ years</span> of
                        experience connecting creative vision with data-backed business growth.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="px-8 py-3.5 bg-sky-600 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/20 transition-all active:scale-95 cursor-pointer">
                            Explore My Work <ArrowRight className="w-4 h-4" />
                        </a>
                        <div className="flex gap-2">
                            <a
                                href="/api/download-cv?mode=download"
                                className="px-6 py-3.5 border border-white/10 text-white bg-white/5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-md active:scale-95 cursor-pointer"
                                title="Download CV"
                            >
                                <Download className="w-4 h-4" /> Download CV
                            </a>
                            <a
                                href="/api/download-cv?mode=preview"
                                target="_blank"
                                className="px-6 py-3.5 border border-white/10 text-white bg-white/5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-md active:scale-95 cursor-pointer"
                                title="Preview CV"
                            >
                                <Eye className="w-4 h-4" /> Preview CV
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center gap-8 border-t border-white/5 pt-10">
                        <div>
                            <div className="text-2xl font-bold text-white">5+</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">10+</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Clients Served</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">30%</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Growth Driven</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-[360px] aspect-[4/5]">
                        <div className="absolute -inset-4 bg-gradient-to-br from-sky-500 to-orange-500 opacity-10 rounded-[3rem] blur-2xl -z-10" />
                        <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] rotate-2 -z-10" />

                        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 p-1.5 bg-white/5 backdrop-blur-md">
                            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                                <Image
                                    src="/images/imagemain.jpeg"
                                    alt="Ritika Giri"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                            </div>
                        </div>

                        {/* Floating Tag */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 p-4 glass-card rounded-2xl border border-white/10 shadow-2xl bg-black/60"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">Storyteller</div>
                                    <div className="text-[9px] text-orange-400 font-bold uppercase tracking-tighter">Strategic Impact</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
