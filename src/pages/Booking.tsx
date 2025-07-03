
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Clock, Car, Baby, RefreshCw, Heart, HeadphonesIcon } from "lucide-react";

const Booking = () => {
  const faqs = [
    {
      icon: <Wifi className="w-6 h-6 text-blue-600" />,
      question: "Is there Wi-Fi in the cabin?",
      answer: "Yes, we offer free Wi-Fi throughout the cabin. It's perfect for staying connected, streaming, or working remotely."
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      question: "How do I check in and check out?",
      answer: "We offer self-check-in for your convenience. You will receive a personalized code for the automatic lock on the day of your arrival. Check-in time is after 4:00 PM, and check-out is by 10:00 AM. Early check-in and late check-out may be available at an additional cost, depending on availability."
    },
    {
      icon: <Car className="w-6 h-6 text-purple-600" />,
      question: "Is there parking available?",
      answer: "Yes, there are four parking spots right in front of the cabin, so you'll have plenty of space."
    },
    {
      icon: <Baby className="w-6 h-6 text-pink-600" />,
      question: "Is the cabin child-friendly?",
      answer: "Absolutely! We have a variety of kid-friendly amenities, including utensils, toys, books, safety gates, a baby monitor, highchair, and a portable crib. Additionally, there's a fun game room for the whole family to enjoy."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-orange-600" />,
      question: "What is the cancellation policy?",
      answer: "We offer a 100% refund if you cancel at least 30 days before your arrival. If something comes up and you need to reschedule, we're happy to help you find new dates for your stay (subject to availability). Cancellations made within 30 days of arrival will incur a small fee."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600" />,
      question: "Is the cabin pet-friendly?",
      answer: "Yes, we welcome up to 2 pets under 50 lbs. There is a small pet fee for each pet. Service animals stay free of charge. We also offer pet-friendly amenities to make your furry friends feel right at home."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-amber-600" />,
      question: "What happens if I encounter an issue during my stay?",
      answer: "If you encounter any issues during your stay, please don't hesitate to contact us. We provide 24/7 customer support, and we'll do our best to resolve any issues quickly so you can continue enjoying your time at the cabin."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
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

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto shadow-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-amber-100 mb-6">
                  We're here to help make your stay perfect. Don't hesitate to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="px-6 py-3 bg-white text-amber-700 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                    onClick={() => window.open('tel:+1234567890', '_self')}
                  >
                    Call Us
                  </button>
                  <button 
                    className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-colors"
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
    </div>
  );
};

export default Booking;
