"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const goToPreviousImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center w-full gap-2 space-y-4">
      {/* Thumbnails */}
      <div className="flex-col justify-start hidden gap-1 lg:flex">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative aspect-square cursor-pointer overflow-hidden rounded-none border-2",
              selectedImage === index ? "border-primary" : "border-transparent"
            )}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="object-cover"
              width="70"
              height="70"
            />
          </button>
        ))}
      </div>

      {/* Image Preview with Navigation */}
      <div className="relative w-full overflow-hidden rounded-none aspect-square">
        <button
          onClick={goToPreviousImage}
          className="absolute z-10 text-white transform -translate-y-1/2 top-1/2 left-4"
        >
          <ChevronLeft className="text-[2rem] bg-primary text-white rounded-full hover:bg-primary/80 transition-all duration-100" />
        </button>
        <Image
          src={images[selectedImage]}
          alt="Product image"
          className="object-cover"
          width="400"
          height="400"
          priority
        />
        <button
          onClick={goToNextImage}
          className="absolute z-10 text-white transform -translate-y-1/2 top-1/2 right-4"
        >
          <ChevronRight className="text-[2rem] bg-primary text-white rounded-full hover:bg-primary/80 transition-all duration-100" />
        </button>
      </div>
    </div>
  );
}
