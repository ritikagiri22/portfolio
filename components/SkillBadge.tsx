"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
    name: string;
    level: number; // 1-5
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
    return (
        <div className="px-4 py-2 bg-white border border-slate-200 rounded-xl flex items-center gap-3 hover:border-sky-500 transition-all shadow-sm group">
            <span className="text-xs font-bold text-slate-700 group-hover:text-sky-600 transition-colors">{name}</span>
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i <= level
                                ? "bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.3)]"
                                : "bg-slate-200"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
