import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Star, MapPin } from "lucide-react";
import { useState } from "react";

const BookingLink = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: "Direct Booking",
      logo: "🏠",
      iframeSrc: "https://zarastimbertales.hosted.ownerrez.com/zaras-timber-tales-orp5b6c48dx",
      description: "Book directly for the best rates and instant confirmation",
      useIframe: true
    },
    {
      id: 1,
      name: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
      externalUrl: "https://www.airbnb.com/rooms/1322534799678132404?guests=1&adults=1&s=67&unique_share_id=f2bce6b0-0832-4fb2-9011-2019d3e1d68f",
      description: "Book through Airbnb's trusted platform",
      useIframe: false
    },
    {
      id: 2,
      name: "VRBO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Vrbo.svg",
      externalUrl: "https://www.vrbo.com/4372035?referrerId=HOT.HIS.Share.Landed.Copy_Link",
      description: "Book through VRBO's vacation rental platform",
      useIframe: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 relative bg-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
              BOOK YOUR STAY
            </h1>
            <p className="text-lg sm:text-xl text-white/90 px-4">
              Choose your preferred booking platform for Zara's Timber Tales
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Booking Interface */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Tab Navigation */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-black text-white shadow-lg scale-105'
                      : 'bg-white/70 text-gray-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {tab.id === 0 ? (
                    <span className="text-xl sm:text-2xl">{tab.logo}</span>
                  ) : (
                    <img 
                      src={tab.logo} 
                      alt={tab.name}
                      className="h-5 w-auto sm:h-6 object-contain"
                    />
                  )}
                  <span className="text-sm sm:text-lg">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-8 sm:mb-12">
            <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="p-4 sm:p-6 text-center border-b border-gray-200">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {tabs[activeTab].name}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {tabs[activeTab].description}
                  </p>
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <p className="text-lg sm:text-xl font-bold text-gray-900 tracking-wide">
                    SAVE UPTO 15% ON PLATFORM FEES WHEN BOOKING DIRECT WITH US
                  </p>
                </div>
                {tabs[activeTab].useIframe ? (
                  <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
                    <iframe
                      src={tabs[activeTab].iframeSrc}
                      className="w-full h-full border-0 rounded-b-lg"
                      title={`Book Zara's Timber Tales on ${tabs[activeTab].name}`}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex items-center justify-center bg-gray-50">
                                      <div className="text-center p-4 sm:p-8">
                    <div className="mb-4 sm:mb-6">
                      <img 
                        src={tabs[activeTab].logo}
                        alt={tabs[activeTab].name}
                        className="h-12 sm:h-16 mx-auto object-contain"
                        onError={(e) => {
                          console.error(`Failed to load ${tabs[activeTab].name} logo`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Book on {tabs[activeTab].name}
                    </h3>
                    <p className="text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">
                      Click the button below to open {tabs[activeTab].name} in a new window and complete your booking.
                    </p>
                      <Button 
                        size="lg" 
                        className={`w-full font-semibold ${
                          tabs[activeTab].id === 1 
                            ? 'bg-[#FF5A5F] hover:bg-[#E31C5F] text-white' 
                            : 'bg-[#00A699] hover:bg-[#008489] text-white'
                        }`}
                        onClick={() => window.open(tabs[activeTab].externalUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Book on {tabs[activeTab].name}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Why Book Direct Section */}
          <div className="mb-12 sm:mb-16">
            <Card className="shadow-xl border-0 bg-black text-white">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 tracking-wide">
                    Why Book Directly?
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg">
                    Get the best experience and rates when you book directly through our website
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Best Rates</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      No booking fees or hidden charges. Get the lowest rates available.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Star className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Instant Confirmation</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Book with confidence knowing your reservation is confirmed immediately.
                    </p>
                  </div>
                  
                  <div className="text-center sm:col-span-2 lg:col-span-1">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Direct Support</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Get personalized assistance directly from our team for any questions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto shadow-xl bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Need Help?</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Have questions about booking or need assistance? We're here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    className="bg-black text-white hover:bg-gray-800"
                    onClick={() => window.open('tel:+15103046560', '_self')}
                  >
                    Call Us
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('mailto:zarastimbertales@gmail.com', '_self')}
                  >
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingLink; 
