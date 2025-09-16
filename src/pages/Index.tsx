
import React, { useEffect } from "react";
import FacchiniNavbar from "@/components/FacchiniNavbar";
import FacchiniHero from "@/components/FacchiniHero";
import FacchiniAbout from "@/components/FacchiniAbout";
import FacchiniServices from "@/components/FacchiniServices";
import FacchiniPortfolio from "@/components/FacchiniPortfolio";
import FacchiniTestimonials from "@/components/FacchiniTestimonials";
import FacchiniCTA from "@/components/FacchiniCTA";
import FacchiniContact from "@/components/FacchiniContact";
import FacchiniFooter from "@/components/FacchiniFooter";

const Index = () => {
  // Initialize intersection observer for fade-in animations
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
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".fadeIn");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <FacchiniNavbar />
      <main>
        <FacchiniHero />
        <FacchiniAbout />
        <FacchiniServices />
        <FacchiniPortfolio />
        <FacchiniTestimonials />
        <FacchiniCTA />
        <FacchiniContact />
      </main>
      <FacchiniFooter />
    </div>
  );
};

export default Index;
