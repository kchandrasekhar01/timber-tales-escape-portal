
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Phone, Mail } from "lucide-react";

export const BookingCTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-6 tracking-wide">
            Ready for Your Mountain Adventure?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
            Book your stay at Zara's Timber Tales and create unforgettable memories in the heart of the Smoky Mountains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-10">
              <h3 className="text-3xl font-light mb-8 text-white tracking-wide">Book Your Stay</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-amber-300" />
                  <span className="font-light">Check availability and rates</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-amber-300" />
                  <span className="font-light">Pigeon Forge, TN - Near Dollywood</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-amber-300" />
                  <span className="font-light">Instant booking confirmation</span>
                </div>
              </div>
              <div className="mt-10 space-y-4">
                <Button 
                  size="lg" 
                  className="w-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-light tracking-wider py-4"
                  onClick={() => window.open('https://calendar.google.com', '_blank')}
                >
                  BOOK NOW
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-white/50 text-white hover:bg-white/10 font-light tracking-wider py-4"
                >
                  Contact Host
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-light mb-8 tracking-wide">Why Choose Zara's Timber Tales?</h3>
              <ul className="space-y-4 text-lg font-light">
                <li className="flex items-start gap-4">
                  <span className="text-amber-300 text-2xl">✓</span>
                  <span>Premium location near top attractions</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-300 text-2xl">✓</span>
                  <span>Luxury amenities for ultimate comfort</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-300 text-2xl">✓</span>
                  <span>Pet-friendly mountain retreat</span>
                </li>
                <li className="flex items-start gap-4">
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
