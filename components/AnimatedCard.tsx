"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { hoverScale } from "@/lib/animations";

interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            {...hoverScale}
            className={cn(
                "glass-card rounded-[3rem] p-8 transition-all hover:bg-white/10 hover:border-sky-500/20 border border-white/10",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
