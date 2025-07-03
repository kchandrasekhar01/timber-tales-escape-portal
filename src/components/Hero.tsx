
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/7fd06217-d630-4aca-8cfc-2e24f3665b2c.png')`,
          filter: 'brightness(0.8)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
      </div>
    </section>
  );
};
