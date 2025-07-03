
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/1b1da941-4696-4fbb-b6aa-ecb0204e824e.png",
      alt: "Zara's Timber Tales Overview"
    },
    {
      src: "/lovable-uploads/ebc0f14b-cc6c-40cd-8ca8-d845c7ce87cc.png",
      alt: "Indoor Swimming Pool Area"
    },
    {
      src: "/lovable-uploads/b7c106c3-e664-4f4b-ae86-bc80eac30f11.png",
      alt: "Outdoor Hot Tub with Mountain Views"
    },
    {
      src: "/lovable-uploads/f1c50101-0a64-434e-ba77-af41b94c760f.png",
      alt: "Spacious Deck with Seating"
    },
    {
      src: "/lovable-uploads/045d8bfd-1779-424b-95f6-52f012d62f81.png",
      alt: "Living Room and Kitchen Area"
    },
    {
      src: "/lovable-uploads/b396f92f-a788-4063-b1da-808b7327a820.png",
      alt: "Game Room with Arcade"
    },
    {
      src: "/lovable-uploads/7fba236d-d3cd-456c-93c9-40e5fe506bbc.png",
      alt: "Private Movie Theatre"
    },
    {
      src: "/lovable-uploads/a729054f-a86b-4d35-a1b3-f167bd4a5be0.png",
      alt: "Master Bedroom"
    },
    {
      src: "/lovable-uploads/3d853725-48d8-4d7f-b1ba-14ab67794afc.png",
      alt: "Dining Area"
    }
  ];

  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative px-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <AspectRatio ratio={4/3}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg object-cover w-full h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
