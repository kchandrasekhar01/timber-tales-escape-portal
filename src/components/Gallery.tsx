
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images from public folder - only photos that actually exist
const images = [
  '/3031 Ridgetop Resort 145-4000.jpg',
  '/3031 Ridgetop Resort 039-4000.jpg',
  '/3031 Ridgetop Resort 167-4000.jpg',
  '/3031 Ridgetop Resort 161-4000.jpg',
  '/3031 Ridgetop Resort 013-4000.jpg',
  '/3031 Ridgetop Resort 133-4000.jpg',
  '/3031 Ridgetop Resort 159-4000.jpg',
  '/3031 Ridgetop Resort 008-4000.jpg',
  '/3031 Ridgetop Resort 027-4000.jpg',
  '/3031 Ridgetop Resort 122-4000.jpg',
  '/3031 Ridgetop Resort 044-4000.jpg',
  '/3031 Ridgetop Resort 105-4000.jpg',
  '/3031 Ridgetop Resort 069-4000.jpg',
  '/3031 Ridgetop Resort 034-4000.jpg',
  '/3031 Ridgetop Resort 140-4000.jpg',
  '/3031 Ridgetop Resort 021-4000.jpg',
  '/3031 Ridgetop Resort 060-4000.jpg',
  '/3031 Ridgetop Resort 065-4000.jpg',
  '/3031 Ridgetop Resort 075-4000.jpg',
  '/3031 Ridgetop Resort 082-4000.jpg',
  '/3031 Ridgetop Resort 089-4000.jpg',
  '/3031 Ridgetop Resort 092-4000.jpg',
  '/3031 Ridgetop Resort 101-4000.jpg',
  '/3031 Ridgetop Resort 107-4000.jpg',
  '/3031 Ridgetop Resort 117-4000.jpg',
  '/3031 Ridgetop Resort 071-4000.jpg',
  '/3031 Ridgetop Resort 072-4000.jpg',
  '/3031 Ridgetop Resort 033-4000.jpg',
  '/3031 Ridgetop Resort 058-4000.jpg',
  '/3031 Ridgetop Resort 022-4000.jpg',
  '/3031 Ridgetop Resort 090-4000.jpg',
  '/3031 Ridgetop Resort 091-4000.jpg',
  '/3031 Ridgetop Resort 113-4000.jpg',
  '/3031 Ridgetop Resort 032-4000.jpg',
  '/3031 Ridgetop Resort 007-4000.jpg',
  '/3031 Ridgetop Resort 012-4000.jpg',
  '/3031 Ridgetop Resort 015-4000.jpg',
  '/3031 Ridgetop Resort 016-4000.jpg',
  '/3031 Ridgetop Resort 023-4000.jpg',
  '/3031 Ridgetop Resort 030-4000.jpg',
  '/3031 Ridgetop Resort 031-4000.jpg',
  '/3031 Ridgetop Resort 045-4000.jpg',
  '/3031 Ridgetop Resort 055-4000.jpg',
  '/3031 Ridgetop Resort 061-4000.jpg',
  '/3031 Ridgetop Resort 063-4000.jpg',
  '/3031 Ridgetop Resort 066-4000.jpg',
  '/3031 Ridgetop Resort 074-4000.jpg',
  '/3031 Ridgetop Resort 080-4000.jpg',
  '/3031 Ridgetop Resort 085-4000.jpg',
  '/3031 Ridgetop Resort 088-4000.jpg',
  '/3031 Ridgetop Resort 097-4000.jpg',
  '/3031 Ridgetop Resort 099-4000.jpg',
  '/3031 Ridgetop Resort 112-4000.jpg',
  '/3031 Ridgetop Resort 115-4000.jpg',
  '/3031 Ridgetop Resort 116-4000.jpg',
  '/3031 Ridgetop Resort 119-4000.jpg',
  '/3031 Ridgetop Resort 124-4000.jpg',
  '/3031 Ridgetop Resort 132-4000.jpg',
  '/3031 Ridgetop Resort 137-4000.jpg',
  '/3031 Ridgetop Resort 149-4000.jpg',
  '/3031 Ridgetop Resort 150-4000.jpg',
  '/3031 Ridgetop Resort 151-4000.jpg',
  '/3031 Ridgetop Resort 180-4000.jpg',
  '/3031 Ridgetop Resort 182-4000.jpg',
  '/3031 Ridgetop Resort 184-4000.jpg',
  '/Ridgetop 3031 Main-4000.jpg',
  '/Ridgetop 3031 Upper-4000.jpg',
  '/Ridgetop 3031 Lower-4000.jpg',
];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-wide">
            Photo Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Explore every corner of Zara's Timber Tales through our stunning photo collection
          </p>
        </div>

        {/* Cover Flow Gallery */}
        <div className="relative">
          {/* Main Display */}
          <div 
            className="relative h-64 sm:h-80 md:h-[500px] lg:h-[600px] mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={images[currentIndex]}
              alt={`Cabin View ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            
            {/* Overlay with controls */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-black/70 backdrop-blur-sm text-white hover:bg-black/90 border border-white/30"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <span className="text-white text-sm font-medium bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white hover:bg-black/90 border border-white/30 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white hover:bg-black/90 border border-white/30 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </Button>
          </div>

          {/* Cover Flow Thumbnails */}
          <div className="relative">
            <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-hidden">
              {images.map((image: string, index: number) => {
                const distance = Math.abs(index - currentIndex);
                const isActive = index === currentIndex;
                const isNear = distance <= 2;
                
                if (!isNear && !isActive) return null;

                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-500 ease-out cursor-pointer ${
                      isActive 
                        ? 'scale-100 z-20' 
                        : distance === 1 
                          ? 'scale-75 z-10 opacity-80' 
                          : 'scale-50 z-0 opacity-60'
                    }`}
                    onClick={() => goToImage(index)}
                  >
                    <div className={`w-16 h-12 sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                      isActive 
                        ? 'ring-2 sm:ring-4 ring-amber-400 shadow-2xl' 
                        : 'hover:ring-1 sm:hover:ring-2 hover:ring-amber-200'
                    }`}>
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 sm:w-4 sm:h-1 bg-amber-400 rounded-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1 sm:gap-2 mt-6 sm:mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-400 scale-125 shadow-lg' 
                    : 'bg-gray-600 hover:bg-gray-500 border border-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Gallery Info */}
        <div className="text-center mt-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Experience Every Detail
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From the stunning mountain views to the luxurious interior amenities, 
              every photo showcases the exceptional quality and comfort of Zara's Timber Tales. 
              Use the controls above to explore our complete photo collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
