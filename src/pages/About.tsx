import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Home, Heart, Wifi, Car, Utensils, Waves } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Zara's Timber Tales
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Escape to luxury in the heart of the Smoky Mountains. Our premium 5-bedroom, 7-bathroom retreat offers 
              an unparalleled vacation experience with world-class amenities and breathtaking mountain views.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/lovable-uploads/045d8bfd-1779-424b-95f6-52f012d62f81.png"
                alt="Living Area"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Your Mountain Paradise Awaits
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nestled in the scenic beauty of Pigeon Forge, Tennessee, Zara's Timber Tales combines rustic charm 
                with modern luxury. Our property is perfectly positioned just minutes from Dollywood and The Island, 
                making it the ideal base for your Smoky Mountain adventure.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're planning a family reunion, group getaway, or romantic retreat, our spacious cabin 
                provides everything you need for an unforgettable stay. From the moment you arrive, you'll be 
                immersed in comfort and luxury.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Home className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                <CardTitle>5 Bedrooms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Spacious bedrooms with premium bedding</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Waves className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>7 Bathrooms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Luxurious bathrooms with modern fixtures</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Sleeps 12</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Perfect for large families and groups</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-2" />
                <CardTitle>Pet Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your furry friends are welcome too</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-xl mb-16">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-900">
                Premium Amenities & Features
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Indoor Entertainment</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Private heated swimming pool</li>
                  <li>• Dedicated movie theatre with cinema seating</li>
                  <li>• Game room with arcade games</li>
                  <li>• High-speed WiFi throughout</li>
                  <li>• Premium sound system</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Outdoor Spaces</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hot tub spa with mountain views</li>
                  <li>• Spacious BBQ deck and balcony</li>
                  <li>• Outdoor dining and lounging areas</li>
                  <li>• Private parking for multiple vehicles</li>
                  <li>• Beautiful mountain scenery</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="mb-16">
            <Gallery />
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <CardContent className="p-12">
                <MapPin className="w-16 h-16 mx-auto mb-6 text-amber-200" />
                <h2 className="text-3xl font-bold mb-4">Perfect Location</h2>
                <p className="text-xl mb-6 opacity-90">
                  Located in the heart of Pigeon Forge, you're just minutes away from:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
                  <div>
                    <strong>Dollywood</strong><br />
                    <span className="opacity-75">5 minutes drive</span>
                  </div>
                  <div>
                    <strong>The Island</strong><br />
                    <span className="opacity-75">3 minutes drive</span>
                  </div>
                  <div>
                    <strong>Downtown Pigeon Forge</strong><br />
                    <span className="opacity-75">2 minutes drive</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
