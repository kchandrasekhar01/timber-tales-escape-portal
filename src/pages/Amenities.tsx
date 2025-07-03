
import { Navigation } from "@/components/Navigation";
import { Amenities } from "@/components/Amenities";

const AmenitiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section - matching other pages */}
      <section className="pt-24 pb-16 px-4 relative bg-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-wide">
              AMENITIES
            </h1>
            <p className="text-xl text-white/90">
              Everything you need for the perfect mountain getaway
            </p>
          </div>
        </div>
      </section>
      
      <div className="bg-gradient-to-br from-amber-50 to-orange-50">
        <Amenities />
      </div>
    </div>
  );
};

export default AmenitiesPage;
