
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-amber-800">
              Zara's Timber Tales
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/amenities" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                Amenities
              </Link>
              <Link to="/gallery" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                Gallery
              </Link>
              <Link to="/booking" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                Booking
              </Link>
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700">
                About
              </Link>
              <Link to="/amenities" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700">
                Amenities
              </Link>
              <Link to="/gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700">
                Gallery
              </Link>
              <Link to="/booking" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700">
                Booking
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
