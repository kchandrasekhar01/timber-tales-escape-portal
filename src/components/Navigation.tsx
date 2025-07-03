
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
              <div className="border-2 border-white px-4 py-2">
                <div className="text-xs font-light mb-1 italic">Luxury</div>
                <div className="text-xl font-bold tracking-wider">ZARA'S</div>
                <div className="text-xs font-light italic -mt-1">Timber Tales</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-white hover:text-amber-300 px-3 py-2 text-sm font-light tracking-wide transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-amber-300 px-3 py-2 text-sm font-light tracking-wide transition-colors">
                Cabins
              </Link>
              <Link to="/amenities" className="text-white hover:text-amber-300 px-3 py-2 text-sm font-light tracking-wide transition-colors">
                Amenities
              </Link>
              <Link to="/gallery" className="text-white hover:text-amber-300 px-3 py-2 text-sm font-light tracking-wide transition-colors">
                About
              </Link>
              <Link to="/booking" className="text-white hover:text-amber-300 px-3 py-2 text-sm font-light tracking-wide transition-colors">
                FAQ
              </Link>
              <span className="text-white hover:text-amber-300 px-3 py-2 text-sm font-light tracking-wide transition-colors cursor-pointer">
                Extras
              </span>
              <span className="text-white hover:text-amber-300 px-3 py-2 text-sm font-light tracking-wide transition-colors cursor-pointer">
                Gift Cards
              </span>
              <span className="text-white hover:text-amber-300 px-3 py-2 text-sm font-light tracking-wide transition-colors cursor-pointer">
                Nearby Activities
              </span>
              <span className="text-white hover:text-amber-300 px-3 py-2 text-sm font-light tracking-wide transition-colors cursor-pointer">
                Contact
              </span>
              <Button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black px-6 py-2 text-sm font-light tracking-wider transition-all">
                BOOK NOW
              </Button>
            </div>
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
              <Link to="/" className="block px-3 py-2 text-base font-light text-white hover:text-amber-300">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-light text-white hover:text-amber-300">
                Cabins
              </Link>
              <Link to="/amenities" className="block px-3 py-2 text-base font-light text-white hover:text-amber-300">
                Amenities
              </Link>
              <Link to="/gallery" className="block px-3 py-2 text-base font-light text-white hover:text-amber-300">
                About
              </Link>
              <Link to="/booking" className="block px-3 py-2 text-base font-light text-white hover:text-amber-300">
                FAQ
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-light tracking-wider">
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
