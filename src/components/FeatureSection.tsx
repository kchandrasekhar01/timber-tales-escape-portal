
import { Card, CardContent } from "@/components/ui/card";

export const FeatureSection = () => {
  const features = [
    {
      title: "retreat",
      description: "You don't have to travel far to get lost in nature. Enjoy stunning natural beauty paired with top-tier amenities in the heart of Pigeon Forge."
    },
    {
      title: "unplug",
      description: "Get away from the hustle and bustle and come sleep under the stars...in a luxurious bed with soft linens in your private mountain sanctuary."
    },
    {
      title: "recharge",
      description: "Take a quiet soak in the hot tub under the canopy of majestic trees or slip into the heated indoor pool for a refreshing escape."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-light mb-6 text-gray-900 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
