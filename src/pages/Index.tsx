
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { FeatureSection } from "@/components/FeatureSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      <Hero />
      <FeatureSection />
    </div>
  );
};

export default Index;
