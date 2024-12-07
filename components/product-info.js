"use client";

import {
  Star,
  Truck,
  Shield,
  ArrowLeft,
  ShoppingCart,
  Heart,
  ArrowDownToLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ProductInfo({ product }) {
  return (
    <div className="space-y-8">
      <div>
        <Card className="bg-[#eef7fc] w-fit p-1 rounded-none   text-[#15a0b6]">
          <CardTitle className="flex items-center gap-2 text-[10px]">
            <ArrowDownToLine size={15} />
            تنزيل مباشر - احصل عليه الان
          </CardTitle>
        </Card>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center mt-4 space-x-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-6">
            <span className="text-sm text-muted-foreground">
              التقييمات ({product.reviews})
            </span>
            <span className="text-sm text-muted-foreground">
              البائع ويب مود webmoud
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold">${product.price}</span>
          {product.discount > 0 && (
            <>
              <span className="text-xl line-through text-muted-foreground">
                ${product.originalPrice}
              </span>
              <Badge variant="destructive">-{product.discount}%</Badge>
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          صيغة الملف PDF : يحتوي على 5 صفحات
        </p>
      </div>

      <div className="flex ">
        <Button className="w-[30%] rounded-none" size="lg">
          <ShoppingCart />
          أضف إلى السلة
        </Button>
        <Button
          variant="outline"
          className="bg-transparent border-none shadow-none outline-none hover:bg-transparent"
          size="lg"
        >
          <Heart className="hover:text-red-600" />
          أضف إلى مفضلتي
        </Button>
      </div>

      <Separator />
    </div>
  );
}
