
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <AspectRatio ratio={16/9} className="w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/7fd06217-d630-4aca-8cfc-2e24f3665b2c.png')`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 max-w-5xl mx-auto">
        </div>
      </AspectRatio>
    </section>
  );
};
