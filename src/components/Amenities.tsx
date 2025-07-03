
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
        <img 
          src="/lovable-uploads/fce5581a-efda-436d-97e8-b593fb117345.png" 
          alt="Hot Tub" 
          className="w-8 h-8"
        />
      ),
      title: "Hot Tub",
      description: "Relax and unwind in our luxurious hot tub with stunning mountain views"
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/adef4557-1abe-427d-86c9-7a3dd6697f8c.png" 
          alt="Fireplace" 
          className="w-8 h-8"
        />
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
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/0c9e6ead-1936-4bed-93a1-c93f7f010357.png" 
          alt="Bath Amenities" 
          className="w-8 h-8"
        />
      ),
      title: "Bath Amenities",
      description: "Premium toiletries and bath essentials provided for your comfort and convenience"
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
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-32">
          {amenities.slice(0, 6).map((amenity, index) => (
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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-24">
          {amenities.slice(6).map((amenity, index) => (
            <div key={index + 6} className="text-center">
              <div className="mb-4 flex justify-center">
                {amenity.icon}
              </div>
              <h3 className="text-lg font-light text-gray-900 tracking-wide">
                {amenity.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
