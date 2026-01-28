"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatCounterProps {
    value: number;
    label: string;
    suffix?: string;
}

export default function StatCounter({ value, label, suffix = "" }: StatCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 1000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center p-4">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                className="text-3xl md:text-4xl font-bold text-sky-600 mb-1"
            >
                {count}{suffix}
            </motion.div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
}
