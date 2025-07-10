
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images using dynamic imports
const images = [
  '/3031 Ridgetop Resort 151-4000.jpg',
  '/3031 Ridgetop Resort 152-4000.jpg',
  '/3031 Ridgetop Resort 153-4000.jpg',
  '/3031 Ridgetop Resort 154-4000.jpg',
  '/3031 Ridgetop Resort 155-4000.jpg',
  '/3031 Ridgetop Resort 156-4000.jpg',
  '/3031 Ridgetop Resort 157-4000.jpg',
  '/3031 Ridgetop Resort 158-4000.jpg',
  '/3031 Ridgetop Resort 159-4000.jpg',
  '/3031 Ridgetop Resort 160-4000.jpg',
  '/3031 Ridgetop Resort 161-4000.jpg',
  '/3031 Ridgetop Resort 162-4000.jpg',
  '/3031 Ridgetop Resort 163-4000.jpg',
  '/3031 Ridgetop Resort 164-4000.jpg',
  '/3031 Ridgetop Resort 165-4000.jpg',
  '/3031 Ridgetop Resort 166-4000.jpg',
  '/3031 Ridgetop Resort 167-4000.jpg',
  '/3031 Ridgetop Resort 168-4000.jpg',
  '/3031 Ridgetop Resort 169-4000.jpg',
  '/3031 Ridgetop Resort 170-4000.jpg',
  '/3031 Ridgetop Resort 171-4000.jpg',
  '/3031 Ridgetop Resort 172-4000.jpg',
  '/3031 Ridgetop Resort 173-4000.jpg',
  '/3031 Ridgetop Resort 174-4000.jpg',
  '/3031 Ridgetop Resort 175-4000.jpg',
  '/3031 Ridgetop Resort 176-4000.jpg',
  '/3031 Ridgetop Resort 177-4000.jpg',
  '/3031 Ridgetop Resort 178-4000.jpg',
  '/3031 Ridgetop Resort 179-4000.jpg',
  '/3031 Ridgetop Resort 180-4000.jpg',
  '/3031 Ridgetop Resort 181-4000.jpg',
  '/3031 Ridgetop Resort 182-4000.jpg',
  '/3031 Ridgetop Resort 183-4000.jpg',
  '/3031 Ridgetop Resort 184-4000.jpg',
  '/3031 Ridgetop Resort 185-4000.jpg',
  '/3031 Ridgetop Resort 186-4000.jpg',
  '/3031 Ridgetop Resort 187-4000.jpg',
  '/3031 Ridgetop Resort 188-4000.jpg',
  '/Ridgetop 3031 Lower-4000.jpg',
  '/Ridgetop 3031 Main-4000.jpg',
  '/Ridgetop 3031 Upper-4000.jpg',
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
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-wide">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore every corner of Zara's Timber Tales through our stunning photo collection
          </p>
        </div>

        {/* Cover Flow Gallery */}
        <div className="relative">
          {/* Main Display */}
          <div 
            className="relative h-96 md:h-[500px] lg:h-[600px] mb-8 rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={images[currentIndex]}
              alt={`Cabin View ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            
            {/* Overlay with controls */}
            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <span className="text-white text-sm font-medium">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Cover Flow Thumbnails */}
          <div className="relative">
            <div className="flex justify-center items-center gap-4 overflow-hidden">
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
                    <div className={`w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                      isActive 
                        ? 'ring-4 ring-amber-400 shadow-2xl' 
                        : 'hover:ring-2 hover:ring-amber-200'
                    }`}>
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-amber-400 rounded-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-400 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
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
