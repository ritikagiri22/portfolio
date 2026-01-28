import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import CaseStudies from "./sections/CaseStudies";
import Education from "./sections/Education";
import Leadership from "./sections/Leadership";
import Contact from "./sections/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <CaseStudies />
            <Education />
            <Leadership />
            <Contact />
        </main>
    );
}
