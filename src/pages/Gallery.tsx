
import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
