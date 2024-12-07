"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/lib/data";

export function ProductSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
    containScroll: "trimSnaps",
    direction: "rtl", // For RTL support
  });

  useEffect(() => {
    if (!emblaApi) return;

    console.log("Embla initialized");
    emblaApi.on("scroll", () => console.log("Embla is scrolling"));
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    console.log("Scroll Prev");
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    console.log("Scroll Next");
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative" dir="rtl">
      <div className="absolute left-0 z-10 -translate-y-1/2 top-1/2 md:left-2">
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8 rounded-full bg-white/80 hover:bg-white/90"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>

      <div className="overflow-hidden embla" ref={emblaRef}>
        <div className="flex gap-4 embla__container touch-pan-y">
          {products.map((product) => (
            <div
              key={product.id}
              className="embla__slide flex-none w-[calc(100%-1rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 z-10 -translate-y-1/2 top-1/2 md:right-2">
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8 rounded-full bg-white/80 hover:bg-white/90"
          onClick={scrollNext}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
