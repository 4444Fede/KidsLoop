import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <Card className="relative overflow-hidden">
      <div className="aspect-square relative">
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              onClick={previousImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex justify-center gap-2 p-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImage ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      )}
    </Card>
  );
}