"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/timeline/Footer";

export default function Home() {
  return (
    <div className="relative z-10">
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
