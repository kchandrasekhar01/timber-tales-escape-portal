

import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { FeatureSection } from "@/components/FeatureSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeatureSection />
    </div>
  );
};

export default Index;

