"use client";

import { useState, useEffect } from "react";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import { motion, AnimatePresence } from "framer-motion";

// Dynamic Word Swap Industries
const industries = [
  "Restaurants",
  "Law Firms",
  "Artists",
  "Small Businesses",
  "E-Commerce Stores",
  "Coaches",
  "Personal Brands",
  "Construction Companies",
];

// Reusable Feature List Component
const FeatureList = ({ features }) => (
  <div className="flex flex-wrap gap-3 mt-6 md:mt-10">
    {features.map((text, index) => (
      <p
        key={index}
        className="text-base md:text-lg text-black rounded-full bg-white inline-flex items-center py-2 px-5"
      >
        <span className="text-2xl pr-3"> ✨ </span>{" "}
        <strong>{text.split(" – ")[0]}</strong>
        <span className="hidden md:inline"> – {text.split(" – ")[1]}</span>
      </p>
    ))}
  </div>
);

// Reusable Content Section Component
const ContentSection = ({ title, subtitle, features }) => (
  <div className="snap-start min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
    <div className="max-w-5xl text-left">
      <h1 className="text-5xl md:text-7xl font-bold text-white">{title}</h1>
      <h2 className="text-white mt-4">{subtitle}</h2>
      <FeatureList features={features} />
    </div>
    <TestimonialsMarquee />
  </div>
);

export default function ServicesPage() {
  const [currentIndustry, setCurrentIndustry] = useState(0);

  // Cycle through industries dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-[#cee6c5] via-[#CFEAC5] to-[#b3d7a4]">
      {/* Section 1: What Makes a Great Website */}
      <ContentSection
        title="What makes a great website?"
        subtitle="Attention spans are shorter than ever. Here’s what makes a site effective:"
        features={[
          "Strategic Copywriting – Sharp messaging, engaging copy, and a little wit.",
          "Responsiveness – 90% of your site visitors are using their phones.",
          "Engaging Design – Colors, fonts, and layouts aligned with your brand.",
          "SEO & Accessibility – Get found on Google and make your site inclusive.",
        ]}
      />

      {/* Section 2: Industry-Specific Websites */}
      <div className="snap-start min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-5xl text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            I build websites for{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={industries[currentIndustry]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-[#fff1b8]"
              >
                {industries[currentIndustry]}
              </motion.span>
            </AnimatePresence>
          </h1>
          <h2 className="text-white mt-4">
            No matter the industry, I create websites that{" "}
            <strong>connect, engage, and convert.</strong>
          </h2>
          <FeatureList
            features={[
              "Tailored Branding – Websites that feel on-brand and attract the right audience.",
              "SEO That Works – Rank higher on Google and get found by customers.",
              "Conversion-Focused Design – Every page optimized for engagement & sales.",
              "Mobile-Friendly Interfaces – Fast-loading, easy-to-use sites for any device.",
            ]}
          />
        </div>
        <TestimonialsMarquee />
      </div>

      {/* Section 3: High-Converting E-Commerce */}
      <ContentSection
        title="& High-Converting E-Commerce."
        subtitle="Whether you're selling art, services, or products, I design high-converting stores that sell."
        features={[
          "Conversion-Focused Design – Every page optimized to turn visitors into customers.",
          "Marketing Setup – Facebook, Google, and LinkedIn pixel tracking ready.",
          "Automated Funnels – Email sequences, abandoned cart recovery, and remarketing.",
          "Customer Focused Checkout – Reduce barriers between the customer and buying.",
        ]}
      />

      {/* Section 4: SEO Optimization */}
      <ContentSection
        title="SEO Optimization that Drives Results"
        subtitle="I ensure your website is optimized for search engines, helping you rank higher and reach more customers."
        features={[
          "Keyword Research – Target the terms your audience is searching for.",
          "On-Page Optimization – Ensure every page is primed for search engines.",
          "Content Strategy – Build authority with strategic blog content.",
          "Technical SEO – Improve site speed, indexing, and performance.",
        ]}
      />
    </div>
  );
}
