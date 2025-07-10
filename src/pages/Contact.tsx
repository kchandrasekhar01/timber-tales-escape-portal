
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section - matching Booking page style */}
      <section className="pt-24 pb-16 px-4 relative bg-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-wide">
              GET IN TOUCH
            </h1>
            <p className="text-xl text-white/90">
              We're here to help make your stay at Zara's Timber Tales perfect
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Phone className="w-8 h-8 text-black" />
                  <h3 className="text-2xl font-semibold text-gray-900">Call Us</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  For immediate assistance or urgent matters during your stay
                </p>
                <p className="text-lg font-semibold text-gray-900">+1 (510) 304-6560</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Mail className="w-8 h-8 text-black" />
                  <h3 className="text-2xl font-semibold text-gray-900">Email Us</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  For general inquiries, bookings, or detailed questions
                </p>
                <p className="text-lg font-semibold text-gray-900">ZarasTimberTales@edificepmg.com</p>
                <p className="text-sm text-gray-600">We typically respond within 2-4 hours</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-black" />
                  <h3 className="text-2xl font-semibold text-gray-900">Location</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Nestled in the heart of the Smoky Mountains
                </p>
                <p className="text-lg font-semibold text-gray-900">Pigeon Forge, Tennessee</p>
                <p className="text-sm text-gray-600">Near Dollywood and major attractions</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-8 h-8 text-black" />
                  <h3 className="text-2xl font-semibold text-gray-900">Check-in Hours</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Self check-in available with personalized access code
                </p>
                <p className="text-lg font-semibold text-gray-900">Check-in: After 4:00 PM</p>
                <p className="text-lg font-semibold text-gray-900">Check-out: By 10:00 AM</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto shadow-xl bg-black text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-gray-300 mb-6">
                  We're here to help make your stay perfect. Don't hesitate to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    onClick={() => window.open('tel:+15103046560', '_self')}
                  >
                    Call Us
                  </button>
                  <button 
                    className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                    onClick={() => window.open('mailto:zarastimbertales@edificepmg.com', '_self')}
                  >
                    Send Email
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
