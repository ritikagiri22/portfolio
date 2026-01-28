"use client";

import SectionHeader from "@/components/SectionHeader";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
    return (
        <section id="projects" className="py-24 bg-sky-100/20">
            <div className="max-w-6xl mx-auto px-4">
                <SectionHeader
                    title="Selected Case Studies"
                    subtitle="Deep dives into how I've solved business problems through strategic storytelling and creative operations."
                />

                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    {caseStudies.map((project, index) => (
                        <CaseStudyCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
