"use client";

import SectionHeader from "@/components/SectionHeader";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
    return (
        <section id="projects" className="py-24 bg-[#09090B]">
            <div className="max-w-6xl mx-auto px-4">
                <SectionHeader
                    title="Impact & Results"
                    subtitle="I focus on quantifiable outcomes that demonstrate the bridge between creative strategy and business growth."
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
