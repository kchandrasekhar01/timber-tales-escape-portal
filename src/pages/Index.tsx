
import { Hero } from "@/components/Hero";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { BookingCTA } from "@/components/BookingCTA";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      <Hero />
      <Amenities />
      <Gallery />
      <BookingCTA />
    </div>
  );
};

export default Index;
