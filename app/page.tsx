import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import BrandJourney from "@/app/sections/BrandJourney";
import PathSummary from "@/app/sections/PathSummary";
import Experience from "@/app/sections/Experience";
import Skills from "@/app/sections/Skills";
import CaseStudies from "@/app/sections/CaseStudies";
import Education from "@/app/sections/Education";
import Leadership from "@/app/sections/Leadership";
import Contact from "@/app/sections/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <BrandJourney />
            <PathSummary />
            <Experience />
            <Skills />
            <CaseStudies />
            <Education />
            <Leadership />
            <Contact />
        </main>
    );
}
