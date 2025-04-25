import React from "react";
import HeroSection from "@/components/Hero Section/HeroSection";
import FeedBackSection from "@/components/FeedBack Section/FeedBackSection";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import AboutSection from "@/components/About Section/AboutSection";
import FeaturesSection from "@/components/Features Section/FeaturesSection";
import LearnMoreSection from "@/components/Learn More Section/LearnMoreSection";
import ProtectYourDeviceSection from "@/components/Protect Your Device Section/ProtectYourDeviceSection";
import LatestInsightsSection from "@/components/Latest Insights Section/LatestInsightsSection";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeedBackSection />
      <AboutSection />
      <FeaturesSection />
      <LearnMoreSection />
      <ProtectYourDeviceSection />
      <LatestInsightsSection />
      <Footer />
    </>
  );
}

export default HomePage;
