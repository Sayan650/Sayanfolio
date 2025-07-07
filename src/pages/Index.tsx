import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import BySection from "@/components/BySection";
import Services from "@/components/Services";
import Interactive3DViewer from "@/components/Intaractive3DViwer";
import UIUXWorks from "@/components/UIUXWorks";

const Index = () => {
  // Initialize intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = document.querySelectorAll(".fadeIn");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-black">
      <Navbar />
      <main>
        <Hero />
        <BySection />
        <About />
        <Services />
        {/* <CTA /> */}
        {/* <Interactive3DViewer simple={true} showColorPicker={false} /> */}
        <Projects />
        <UIUXWorks />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
