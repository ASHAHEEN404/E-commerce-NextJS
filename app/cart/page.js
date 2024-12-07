"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import testImg from "@/public/1.webp";

export default function ShoppingCart() {
  // Array of products
  const products = [
    {
      id: 1,
      name: "طبخاتي my cooking",
      seller: "Bebo Mayar",
      price: 10,
      total: 10,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "منتجات رقمية عربية بالجملة قابلة لإعادة البيع - مكتبة المنتجات الرقمية الاحترافية",
      seller: "Mahmoud Aboc",
      price: 99,
      total: 99,
      image: "/placeholder.svg",
    },
  ];

  // Calculate total price
  const totalPrice = products.reduce((sum, product) => sum + product.total, 0);

  return (
    <div className="container w-full p-4 mx-auto font-sans" dir="rtl">
      <nav className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
        <a href="/" className="hover:text-primary">
          الصفحة الرئيسية
        </a>
        <ChevronLeft className="w-4 h-4" />
        <span className="text-foreground">عربة التسوق</span>
      </nav>
      {/* Cart Header */}
      <h1 className="mb-6 text-xl font-semibold">
        عربة التسوق الخاصة بي ({products.length})
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-4 lg:col-span-2">
          {products.map((product) => (
            <Card className="p-4 border-none shadow-none" key={product.id}>
              <div className="flex gap-4">
                <Image
                  src={testImg}
                  alt={`Product image of ${product.name}`}
                  width={100}
                  height={100}
                  className="rounded-lg "
                />
                <div className="flex-1">
                  <div className="flex flex-col items-start justify-between gap-4 lg:flex-row">
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        البائع: {product.seller}
                      </p>
                    </div>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                      <X className="w-4 h-4" />
                      الغاء
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold">
                      سعر الخدمة: ${product.price}
                    </p>
                    <p className="font-semibold">
                      مجموع الكلي: ${product.total}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          <hr className="" />
          <Link href="/">
            <Button
              className="w-[20%] rounded-none
               mt-4 text-white font-medium bg-primary hover:bg-primary/80"
            >
              ‹اشتري منتجات اخرى !
            </Button>
          </Link>
        </div>

        {/* Summary and Checkout */}
        <div className="space-y-4">
          <Card className="p-4 bg-[#f9f9f9] border-none shadow-none">
            <h2 className="mb-4 font-semibold">المجموع الفرعي</h2>
            <p className="mb-4 text-xl font-bold">${totalPrice}</p>
            <p className="mb-4 font-semibold">مجموع الكلي</p>
            <p className="mb-6 text-2xl font-bold">${totalPrice}</p>

            <div className="space-y-4">
              <Button className="w-full text-white rounded-none bg-primary hover:bg-primary/80">
                استمرار الدفع
              </Button>

              <hr />

              <div className="flex ">
                <Input
                  placeholder="رمز الكوبون"
                  className="flex-1 py-4 rounded-none"
                />
                <Button
                  className="text-white rounded-none bg-primary"
                  variant="secondary"
                >
                  تطبيق
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
