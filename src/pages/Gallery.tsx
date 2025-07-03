
import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section - matching other pages */}
      <section className="pt-24 pb-16 px-4 relative bg-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-wide">
              GALLERY
            </h1>
            <p className="text-xl text-white/90">
              Take a look inside Zara's Timber Tales
            </p>
          </div>
        </div>
      </section>
      
      <div className="bg-gradient-to-br from-amber-50 to-orange-50">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
