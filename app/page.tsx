import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline";

export default function Home() {
    return (
        <section>
            <HeroSection />
            {/* About Section */}
            <AboutSection />
            {/* Experience & Education */}
            <Timeline />
            <FAQSection/>
        </section>
    );
}
