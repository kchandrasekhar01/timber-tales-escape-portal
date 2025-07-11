
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-white">
              <div className="border-2 border-white px-6 py-3 bg-black/20 backdrop-blur-sm">
                <div className="text-sm font-light mb-1 italic">Luxury</div>
                <div className="text-2xl font-bold tracking-wider">ZARA'S</div>
                <div className="text-sm font-light italic -mt-1">Timber Tales</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-4">
              <Link to="/" className="text-white hover:text-amber-300 px-3 py-2 text-base font-light tracking-wide transition-colors">
                Main
              </Link>
              <Link to="/about" className="text-white hover:text-amber-300 px-3 py-2 text-base font-light tracking-wide transition-colors">
                Cabin
              </Link>
              <Link to="/gallery" className="text-white hover:text-amber-300 px-3 py-2 text-base font-light tracking-wide transition-colors">
                Gallery
              </Link>
              <Link to="/amenities" className="text-white hover:text-amber-300 px-3 py-2 text-base font-light tracking-wide transition-colors">
                Amenities
              </Link>
              <Link to="/booking" className="text-white hover:text-amber-300 px-3 py-2 text-base font-light tracking-wide transition-colors">
                FAQ
              </Link>
              <Link to="/nearby-activities" className="text-white hover:text-amber-300 px-3 py-2 text-base font-light tracking-wide transition-colors">
                Nearby Activities
              </Link>
              <Link to="/contact" className="text-white hover:text-amber-300 px-3 py-2 text-base font-light tracking-wide transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link to="/bookinglink">
              <Button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black px-6 py-2 text-base font-light tracking-wider transition-all">
                BOOK NOW
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/20"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-white/20">
              <Link to="/" className="block px-3 py-2 text-lg font-light text-white hover:text-amber-300">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-lg font-light text-white hover:text-amber-300">
                Cabin
              </Link>
              <Link to="/gallery" className="block px-3 py-2 text-lg font-light text-white hover:text-amber-300">
                Gallery
              </Link>
              <Link to="/amenities" className="block px-3 py-2 text-lg font-light text-white hover:text-amber-300">
                Amenities
              </Link>
              <Link to="/booking" className="block px-3 py-2 text-lg font-light text-white hover:text-amber-300">
                FAQ
              </Link>
              <Link to="/nearby-activities" className="block px-3 py-2 text-lg font-light text-white hover:text-amber-300">
                Nearby Activities
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-lg font-light text-white hover:text-amber-300">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link to="/bookinglink">
                  <Button className="w-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-light tracking-wider">
                    BOOK NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
