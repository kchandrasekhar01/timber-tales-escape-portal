
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1b1da941-4696-4fbb-b6aa-ecb0204e824e.png')`,
          filter: 'brightness(0.6)',
          height: '80vh'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" style={{ height: '80vh' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-wide">
          One Stunning Cabin
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-12 tracking-wide">
          Nestled in the Heart of the Smokies
        </h2>
        
        {/* Bottom Text - moved closer to bottom */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <h3 className="text-3xl md:text-5xl font-light tracking-wide text-white">
            Rest Recharge and Reconnect
          </h3>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
};
