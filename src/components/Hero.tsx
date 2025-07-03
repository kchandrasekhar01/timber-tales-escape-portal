
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1b1da941-4696-4fbb-b6aa-ecb0204e824e.png')`,
          filter: 'brightness(0.6)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
      </div>
    </section>
  );
};
