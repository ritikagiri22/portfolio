"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12", className)}>
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2.5 mb-5"
            >
                <div className="w-10 h-[2px] bg-orange-500/30" />
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <div className="text-[10px] font-bold text-sky-600/40 uppercase tracking-[0.3em]">Ritika Giri</div>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-sky-950 mb-6 tracking-tight leading-tight"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-sky-900/60 max-w-2xl text-base md:text-lg leading-relaxed font-medium"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
