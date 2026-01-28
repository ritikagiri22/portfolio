"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
    title: string;
    subtitle: string;
    date: string;
    description?: string[];
    isLast?: boolean;
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
    return (
        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
            {items.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group pb-12">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 bg-white group-hover:bg-sky-500 transition-colors shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-white transition-colors" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all hover:shadow-md">
                        <div className="text-sm font-bold text-sky-600 mb-1">{item.date}</div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <div className="text-slate-500 font-medium mb-4">{item.subtitle}</div>
                        {item.description && (
                            <ul className="space-y-1">
                                {item.description.map((desc, i) => (
                                    <li key={i} className="text-sm text-slate-600 flex gap-2">
                                        <span className="text-sky-400">•</span> {desc}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
