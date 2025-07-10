
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Heart, Star } from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      icon: <Mountain className="w-12 h-12 text-black" />,
      title: "Mountain Views",
      description: "Wake up to breathtaking views of the Smoky Mountains every morning"
    },
    {
      icon: <Heart className="w-12 h-12 text-black" />,
      title: "Family Friendly",
      description: "Perfect for families with amenities for kids and pets welcome"
    },
    {
      icon: <Star className="w-12 h-12 text-black" />,
      title: "Luxury Comfort",
      description: "Premium amenities and furnishings for the ultimate mountain retreat"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose Zara's Timber Tales
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience the perfect blend of mountain adventure and luxury comfort
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
