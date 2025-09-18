import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "Space Exploration",
    description: "Astronaut floating in deep space with distant galaxies and nebulae.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2"
  },
  {
    id: 2,
    title: "Ocean Depths",
    description: "Vibrant coral reef teeming with marine life in crystal clear waters.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    id: 3,
    title: "Mountain Peaks",
    description: "Snow-capped mountains under a golden sunrise, reflected in a still alpine lake.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  },
  {
    id: 4,
    title: "Desert Dunes",
    description: "Endless rolling sand dunes under a vast, starry night sky.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Discover amazing creations from our community
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center space-x-2">
            <span>View All</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  priority={item.id <= 2} // Only prioritize first two images for better LCP
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="flex items-center space-x-2 mx-auto">
            <span>View All</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}