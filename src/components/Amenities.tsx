
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Film, Gamepad2, Utensils, Wifi, Car, Snowflake, Wind } from "lucide-react";

export const Amenities = () => {
  const amenities = [
    {
      icon: <Waves className="w-8 h-8 text-blue-600" />,
      title: "Indoor Swimming Pool",
      description: "Private heated indoor pool for year-round enjoyment"
    },
    {
      icon: <Waves className="w-8 h-8 text-teal-600" />,
      title: "Hot Tub Spa",
      description: "Relax in our luxurious outdoor hot tub with mountain views"
    },
    {
      icon: <Film className="w-8 h-8 text-red-600" />,
      title: "Private Movie Theatre",
      description: "Cinema-style seating for the ultimate movie experience"
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-purple-600" />,
      title: "Game Room",
      description: "Arcade games and entertainment for all ages"
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-600" />,
      title: "Outdoor BBQ Deck",
      description: "Spacious balcony with BBQ grill and mountain views"
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-600" />,
      title: "High-Speed WiFi",
      description: "Stay connected with reliable internet throughout"
    },
    {
      icon: <Car className="w-8 h-8 text-gray-600" />,
      title: "Private Parking",
      description: "Convenient parking for multiple vehicles"
    },
    {
      icon: <Snowflake className="w-8 h-8 text-blue-500" />,
      title: "Climate Control",
      description: "Central heating and air conditioning for comfort"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-wide">
            Luxury Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the perfect blend of comfort and adventure with our premium amenities designed for unforgettable mountain getaways
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
