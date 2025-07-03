
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, DollarSign, Users, Phone, Mail, MessageSquare } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Book Your Stay
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience luxury in the Smoky Mountains? Check availability and secure your dates at Zara's Timber Tales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Calendar Section */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="w-6 h-6 text-amber-600" />
                  Check Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">Google Calendar Integration</p>
                    <Button 
                      onClick={() => window.open('https://calendar.google.com/calendar/embed?src=your-calendar-id', '_blank')}
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      View Live Calendar
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="font-semibold">Max Guests</div>
                    <div className="text-2xl font-bold text-amber-700">12</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold">Min Stay</div>
                    <div className="text-2xl font-bold text-green-700">2 Nights</div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => window.open('https://www.airbnb.com', '_blank')}
                >
                  Book Now on Airbnb
                </Button>
              </CardContent>
            </Card>

            {/* Contact & Information */}
            <div className="space-y-6">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    Pricing Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">Nightly Rate</span>
                    <span className="text-xl font-bold text-green-700">Contact for Rates</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• Rates vary by season and length of stay</p>
                    <p>• Special discounts for extended stays</p>
                    <p>• Holiday and peak season premiums apply</p>
                    <p>• Pet fee: Additional charges may apply</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Host</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Have questions or need assistance with your booking? We're here to help make your stay perfect.
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('tel:+1234567890', '_self')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call: (123) 456-7890
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('mailto:host@zarastimbertales.com', '_self')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email: host@zarastimbertales.com
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Booking Policies</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Check-in: 4:00 PM | Check-out: 11:00 AM</li>
                    <li>• Cancellation policy varies by booking platform</li>
                    <li>• Smoking is not permitted inside the property</li>
                    <li>• Quiet hours: 10:00 PM - 8:00 AM</li>
                    <li>• Maximum occupancy strictly enforced</li>
                    <li>• ID verification required for all bookings</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
