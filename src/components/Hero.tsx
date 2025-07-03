
import { Button } from "@/components/ui/button";
import { MapPin, Users, Home, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/f1c50101-0a64-434e-ba77-af41b94c760f.png')`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Zara's <span className="text-amber-400">Timber Tales</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
          Luxury Mountain Retreat in the Heart of Pigeon Forge
        </p>
        
        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-amber-400" />
            <span>5 Bedrooms • 7 Bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            <span>Sleeps up to 12</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>Near Dollywood & The Island</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-amber-400" />
            <span>Pet Friendly</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            Book Your Stay
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};
