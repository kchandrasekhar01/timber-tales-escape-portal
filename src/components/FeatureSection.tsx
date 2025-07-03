
import { Card, CardContent } from "@/components/ui/card";

export const FeatureSection = () => {
  const features = [
    {
      title: "RETREAT"
    },
    {
      title: "RECONNECT"
    },
    {
      title: "RECHARGE"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 tracking-wide">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
