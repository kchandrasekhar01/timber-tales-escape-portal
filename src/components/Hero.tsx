
import { Button } from "@/components/ui/button";

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
        {/* Text at bottom of image */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-4xl md:text-6xl font-light tracking-wider space-y-2">
            <div>Retreat</div>
            <div>Unplug</div>
            <div>Recharge</div>
          </div>
        </div>
      </div>
    </section>
  );
};
