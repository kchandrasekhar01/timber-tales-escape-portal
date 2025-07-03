
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1b1da941-4696-4fbb-b6aa-ecb0204e824e.png')`,
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-wide">
          One Stunning Cabin
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-12 tracking-wide">
          Nestled in the Heart of the Smokies
        </h2>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
};
