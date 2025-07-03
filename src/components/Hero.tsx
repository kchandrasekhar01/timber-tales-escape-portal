
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Hero = () => {
  const features = [
    { title: "Retreat" },
    { title: "Reconnect" },
    { title: "Recharge" }
  ];

  return (
    <section className="relative overflow-hidden">
      <AspectRatio ratio={16/9} className="w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/7fd06217-d630-4aca-8cfc-2e24f3665b2c.png')`,
          }}
        />
        
        {/* Words positioned at bottom of image */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-3xl font-bold text-white tracking-wide drop-shadow-lg">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AspectRatio>
    </section>
  );
};
