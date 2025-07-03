
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Phone, Mail } from "lucide-react";

export const BookingCTA = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-700 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Your Mountain Adventure?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Book your stay at Zara's Timber Tales and create unforgettable memories in the heart of the Smoky Mountains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Book Your Stay</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-300" />
                  <span>Check availability and rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-300" />
                  <span>Pigeon Forge, TN - Near Dollywood</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-300" />
                  <span>Instant booking confirmation</span>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <Button 
                  size="lg" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => window.open('https://calendar.google.com', '_blank')}
                >
                  View Calendar & Book Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-white text-white hover:bg-white hover:text-amber-900"
                >
                  Contact Host
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Why Choose Zara's Timber Tales?</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 text-2xl">✓</span>
                  <span>Premium location near top attractions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 text-2xl">✓</span>
                  <span>Luxury amenities for ultimate comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 text-2xl">✓</span>
                  <span>Pet-friendly mountain retreat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 text-2xl">✓</span>
                  <span>Perfect for families and groups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
