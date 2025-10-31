"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/timeline/Footer";
import { useUser } from "../context/usercontext";

export default function Home() {
  // const { user } = useUser();
  // if (!user) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
