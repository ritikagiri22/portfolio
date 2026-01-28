"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
    name: string;
    level: number;
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-white/[0.07] hover:border-sky-500/30 transition-all cursor-default"
        >
            <span className="text-sm font-bold text-slate-300 group-hover:text-white">{name}</span>
            <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${i < level ? "bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.8)]" : "bg-white/10"
                            }`}
                    />
                ))}
            </div>
        </motion.div>
    );
}
