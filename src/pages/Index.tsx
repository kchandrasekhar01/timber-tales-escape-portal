
import { Hero } from "@/components/Hero";
import { BookingCTA } from "@/components/BookingCTA";
import { Navigation } from "@/components/Navigation";
import { FeatureSection } from "@/components/FeatureSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeatureSection />
      <BookingCTA />
    </div>
  );
};

export default Index;
