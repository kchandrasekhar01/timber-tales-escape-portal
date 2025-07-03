import { Card, CardContent } from "@/components/ui/card";
import { 
  Utensils, 
  Wifi, 
  WashingMachine, 
  Waves, 
  ChefHat, 
  Flame, 
  Bed, 
  Baby 
} from "lucide-react";

export const Amenities = () => {
  const amenities = [
    {
      icon: <Utensils className="w-8 h-8 text-gray-700" />,
      title: "Kitchen",
      description: "Fully equipped kitchen with modern appliances and everything you need to cook"
    },
    {
      icon: <Wifi className="w-8 h-8 text-gray-700" />,
      title: "High Speed Wifi",
      description: "Stay connected with reliable high-speed internet throughout the cabin"
    },
    {
      icon: <WashingMachine className="w-8 h-8 text-gray-700" />,
      title: "Laundry",
      description: "Full-size washer and dryer for your convenience during your stay"
    },
    {
      icon: <Waves className="w-8 h-8 text-blue-600" />,
      title: "Heated Pool",
      description: "Private heated indoor pool for year-round swimming enjoyment"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="6" />
          <path d="M12 14v8" />
          <path d="M8 18h8" />
          <path d="M10 22h4" />
        </svg>
      ),
      title: "Hot Tub",
      description: "Relax and unwind in our luxurious hot tub with stunning mountain views"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="2" rx="1" />
          <rect x="4" y="6" width="16" height="2" rx="1" />
          <rect x="2" y="8" width="20" height="12" rx="1" />
          <rect x="4" y="10" width="16" height="8" rx="1" />
          <path d="M8 12c1-1 2-2 2-3s-1-2-2-3" />
          <path d="M12 12c1-1 2-2 2-3s-1-2-2-3" />
          <path d="M16 12c1-1 2-2 2-3s-1-2-2-3" />
          <rect x="1" y="18" width="22" height="2" />
        </svg>
      ),
      title: "Fireplaces",
      description: "Cozy fireplaces throughout the cabin for warmth and ambiance"
    },
    {
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      title: "Fire Table",
      description: "Outdoor fire table for evening gatherings under the stars"
    },
    {
      icon: <Bed className="w-8 h-8 text-purple-600" />,
      title: "Linens",
      description: "Premium quality linens and towels provided for all guests"
    },
    {
      icon: <Baby className="w-8 h-8 text-pink-600" />,
      title: "Baby Gear",
      description: "High chair, pack-n-plays, and other essentials for traveling with little ones"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-wide">
            Cabin Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need for a perfect mountain getaway, from modern conveniences to luxury comforts
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                {amenity.icon}
              </div>
              <h3 className="text-lg font-light text-gray-900 tracking-wide">
                {amenity.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {amenity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
