
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Wifi, Clock, Car, Baby, RefreshCw, HeadphonesIcon, Calendar as CalendarIcon, MapPin, Phone, Users } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [petsAllowed, setPetsAllowed] = useState(false);

  const faqs = [
    {
      icon: <Wifi className="w-6 h-6 text-black" />,
      question: "Is there Wi-Fi in the cabin?",
      answer: "Yes, we offer free Wi-Fi throughout the cabin. It's perfect for staying connected, streaming, or working remotely."
    },
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      question: "How do I check in and check out?",
      answer: "We offer self-check-in for your convenience. You will receive a personalized code for the automatic lock on the day of your arrival. Check-in time is after 4:00 PM, and check-out is by 10:00 AM. Early check-in and late check-out may be available at an additional cost, depending on availability."
    },
    {
      icon: <Car className="w-6 h-6 text-black" />,
      question: "Is there parking available?",
      answer: "Yes, there are four parking spots right in front of the cabin, so you'll have plenty of space."
    },
    {
      icon: <Baby className="w-6 h-6 text-black" />,
      question: "Is the cabin child-friendly?",
      answer: "Absolutely! We have a variety of kid-friendly amenities, including utensils, toys, books, safety gates, a baby monitor, highchair, and a portable crib. Additionally, there's a fun game room for the whole family to enjoy."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-black" />,
      question: "What is the cancellation policy?",
      answer: "We offer a 100% refund if you cancel at least 30 days before your arrival. If something comes up and you need to reschedule, we're happy to help you find new dates for your stay (subject to availability). Cancellations made within 30 days of arrival will incur a small fee."
    },
    {
      icon: <img src="/lovable-uploads/9fe82f77-918a-49bc-a992-2e51799dde16.png" alt="Pet Friendly" className="w-6 h-6" />,
      question: "Is the cabin pet-friendly?",
      answer: "Yes, we welcome up to 2 pets under 50 lbs. There is a small pet fee for each pet. Service animals stay free of charge. We also offer pet-friendly amenities to make your furry friends feel right at home."
    }
  ];

  const lastFaq = {
    icon: <HeadphonesIcon className="w-6 h-6 text-black" />,
    question: "What happens if I encounter an issue during my stay?",
    answer: "If you encounter any issues during your stay, please don't hesitate to contact us. We provide 24/7 customer support, and we'll do our best to resolve any issues quickly so you can continue enjoying your time at the cabin."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section with Booking Portal */}
      <section className="pt-24 pb-16 px-4 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/e488a946-dd2e-453d-a5f9-27f33be14854.png')`
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-wide">
              SEARCH ALL CABINS
            </h1>
            <p className="text-xl text-white/90">
              Pigeon Forge, TN
            </p>
          </div>

          {/* Booking Portal */}
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                {/* Check-in Date */}
                <div className="space-y-2">
                  <Label htmlFor="checkin" className="text-sm font-medium text-gray-700">
                    Check-in
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-12",
                          !checkInDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkInDate ? format(checkInDate, "MMM dd") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkInDate}
                        onSelect={setCheckInDate}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Check-out Date */}
                <div className="space-y-2">
                  <Label htmlFor="checkout" className="text-sm font-medium text-gray-700">
                    Check-out
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-12",
                          !checkOutDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOutDate ? format(checkOutDate, "MMM dd") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOutDate}
                        onSelect={setCheckOutDate}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-sm font-medium text-gray-700">
                    Guests
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="12"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div>
                  <Button 
                    size="lg" 
                    className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold h-12"
                    onClick={() => {
                      console.log('Search clicked', { checkInDate, checkOutDate, guests, petsAllowed });
                    }}
                  >
                    Search
                  </Button>
                </div>
              </div>

              {/* Pets Allowed Checkbox */}
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-2 shadow-md">
                  <Checkbox
                    id="pets"
                    checked={petsAllowed}
                    onCheckedChange={(checked) => setPetsAllowed(checked === true)}
                  />
                  <Label htmlFor="pets" className="text-sm font-medium text-gray-700">
                    Pets allowed
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about your stay at Zara's Timber Tales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start gap-4 text-lg font-semibold text-gray-900">
                    <div className="flex-shrink-0 mt-1">
                      {faq.icon}
                    </div>
                    <span className="leading-tight">{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pl-14">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Centered last FAQ card */}
          <div className="flex justify-center mt-8">
            <div className="w-full max-w-md lg:max-w-lg">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start gap-4 text-lg font-semibold text-gray-900">
                    <div className="flex-shrink-0 mt-1">
                      {lastFaq.icon}
                    </div>
                    <span className="leading-tight">{lastFaq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pl-14">
                  <p className="text-gray-700 leading-relaxed">{lastFaq.answer}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto shadow-xl bg-black text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-gray-300 mb-6">
                  We're here to help make your stay perfect. Don't hesitate to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    onClick={() => window.open('tel:+1234567890', '_self')}
                  >
                    Call Us
                  </button>
                  <button 
                    className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                    onClick={() => window.open('mailto:host@zarastimbertales.com', '_self')}
                  >
                    Send Email
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready for Your Mountain Adventure Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-6 tracking-wide">
              Ready for Your Mountain Adventure?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Book your stay at Zara's Timber Tales and create unforgettable memories in the heart of the Smoky Mountains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-10">
                <h3 className="text-3xl font-light mb-8 text-white tracking-wide">Book Your Stay</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <CalendarIcon className="w-6 h-6 text-white" />
                    <span className="font-light text-white">Check availability and rates</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <MapPin className="w-6 h-6 text-white" />
                    <span className="font-light text-white">Pigeon Forge, TN - Near Dollywood</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <Phone className="w-6 h-6 text-white" />
                    <span className="font-light text-white">Instant booking confirmation</span>
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
                    <span className="text-white text-2xl">✓</span>
                    <span>Premium location near top attractions</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white text-2xl">✓</span>
                    <span>Luxury amenities for ultimate comfort</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white text-2xl">✓</span>
                    <span>Pet-friendly mountain retreat</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white text-2xl">✓</span>
                    <span>Perfect for families and groups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
