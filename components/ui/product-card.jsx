"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { useState } from "react";

function RatingStars({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={i}
          className="w-3 h-3 text-yellow-400 fill-yellow-400 sm:h-4 sm:w-4"
        />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-3 h-3 text-yellow-400 fill-yellow-400 sm:h-4 sm:w-4" />
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={i} className="w-3 h-3 text-gray-300 sm:h-4 sm:w-4" />
      ))}
      <span className="mr-1 text-xs text-muted-foreground sm:text-sm">
        {rating}
      </span>
    </div>
  );
}

export function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center gap-2 bg-black/40 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <Button
              size="icon"
              variant="secondary"
              className="w-8 h-8 rounded-full sm:h-10 sm:w-10"
            >
              <Heart className="w-4 h-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="w-8 h-8 rounded-full sm:h-10 sm:w-10"
            >
              <ShoppingCart className="w-4 h-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
        <div className="space-y-1.5 p-2 sm:space-y-2 sm:p-3">
          <h3 className="text-xs font-semibold leading-tight text-right line-clamp-1 sm:text-sm">
            {product.title}
          </h3>
          <p className="text-xs text-right text-muted-foreground">
            {product.author}
          </p>
          <div className="flex justify-end">
            <RatingStars rating={product.rating} />
          </div>
          <div className="flex items-center justify-end gap-1.5 sm:gap-2">
            {product.originalPrice && (
              <span className="text-xs line-through text-muted-foreground">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-sm font-semibold sm:text-base">
              ${product.price}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
