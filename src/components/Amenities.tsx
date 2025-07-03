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
      icon: <Utensils className="w-8 h-8 text-black" />,
      title: "Kitchen",
      description: "Fully equipped kitchen with modern appliances and everything you need to cook"
    },
    {
      icon: <Wifi className="w-8 h-8 text-black" />,
      title: "High Speed Wifi",
      description: "Stay connected with reliable high-speed internet throughout the cabin"
    },
    {
      icon: <WashingMachine className="w-8 h-8 text-black" />,
      title: "Laundry",
      description: "Full-size washer and dryer for your convenience during your stay"
    },
    {
      icon: <Waves className="w-8 h-8 text-black" />,
      title: "Heated Pool",
      description: "Private heated indoor pool for year-round swimming enjoyment"
    },
    {
      icon: (
        <svg className="w-15 h-15 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="14" width="20" height="6" rx="2" fill="none" />
          <rect x="4" y="16" width="2" height="2" fill="currentColor" />
          <rect x="7" y="16" width="2" height="2" fill="currentColor" />
          <rect x="10" y="16" width="2" height="2" fill="currentColor" />
          <rect x="13" y="16" width="2" height="2" fill="currentColor" />
          <rect x="16" y="16" width="2" height="2" fill="currentColor" />
          <path d="M6 14v-2c0-1 0.5-2 2-2h8c1.5 0 2 1 2 2v2" fill="none" />
          <path d="M8 8c0-0.5 0.2-1 0.5-1s0.5 0.5 0.5 1" fill="none" />
          <path d="M11 8c0-0.5 0.2-1 0.5-1s0.5 0.5 0.5 1" fill="none" />
          <path d="M14 8c0-0.5 0.2-1 0.5-1s0.5 0.5 0.5 1" fill="none" />
        </svg>
      ),
      title: "Hot Tub",
      description: "Relax and unwind in our luxurious hot tub with stunning mountain views"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <rect x="5" y="8" width="14" height="8" rx="1" />
          <path d="M7 16h2v2H7z" />
          <path d="M15 16h2v2h-2z" />
          <path d="M9 3v3" />
          <path d="M15 3v3" />
          <path d="M6 10h12" />
          <path d="M6 12h12" />
          <path d="M6 14h12" />
        </svg>
      ),
      title: "Fireplaces",
      description: "Cozy fireplaces throughout the cabin for warmth and ambiance"
    },
    {
      icon: <ChefHat className="w-8 h-8 text-black" />,
      title: "BBQ Grill",
      description: "Outdoor grilling station perfect for family barbecues and gatherings"
    },
    {
      icon: <Flame className="w-8 h-8 text-black" />,
      title: "Fire Table",
      description: "Outdoor fire table for evening gatherings under the stars"
    },
    {
      icon: <Bed className="w-8 h-8 text-black" />,
      title: "Linens",
      description: "Premium quality linens and towels provided for all guests"
    },
    {
      icon: <Baby className="w-8 h-8 text-black" />,
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
