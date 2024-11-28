import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Star, Heart } from "lucide-react";
import Image from "next/image";
import { Check, ChevronLeft, Copy } from "lucide-react";

const products = [
  {
    id: 1,
    title: "أفضل قالب ميزانية شهرية - جدول مصرو...",
    author: "ويب مود webmoud",
    price: 4.99,
    originalPrice: 49,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    likes: 4,
  },
  {
    id: 2,
    title: "كتب إلكترونية تعليمية للأطفال برسوم كر...",
    author: "Haidy Fawzy",
    price: 0,
    image: "/placeholder.svg?height=400&width=600",
    rating: 0,
    likes: 2,
  },
  {
    id: 3,
    title: "كراسة تلوين الأميرات والعرائس فساتين ج...",
    author: "النمر",
    price: 6,
    image: "/placeholder.svg?height=400&width=600",
    rating: 0,
    likes: 1,
  },
  {
    id: 4,
    title: "لون وتعلم",
    author: "Menna Khalifa",
    price: 2,
    image: "/placeholder.svg?height=400&width=600",
    rating: 0,
    likes: 2,
  },
  {
    id: 5,
    title: "طبخاتي my cooking",
    author: "Bebo Mayar",
    price: 10,
    image: "/placeholder.svg?height=400&width=600",
    rating: 0,
    likes: 0,
  },
];

export default function FavoritesPage() {
  return (
    <div className="container py-8 rtl">
      <div className="flex flex-col items-start mb-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-primary">
            الصفحة الرئيسية
          </a>
          <ChevronLeft className="h-4 w-4" />
          <span className="text-foreground">المفضلة</span>
        </nav>
        <h1 className="text-2xl font-medium">مفضلتي</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {product.author}
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span className="text-sm text-muted-foreground">
                  {product.likes}
                </span>
              </div>
              <div className="text-left">
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="font-semibold">
                  {product.price === 0 ? "مجاني" : `$${product.price}`}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
