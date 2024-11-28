"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronLeft, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/use-toast";

const coupons = [
  {
    id: "1",
    merchantName: "AHMED ELBOGHDADY",
    discount: 99,
    expiryDate: "2024 نوفمبر 30",
    code: "ZCWP09JE",
    avatar: "A",
  },
  {
    id: "2",
    merchantName: "للقدر",
    discount: 20,
    expiryDate: "2024 نوفمبر 30",
    code: "3H3UC2FG",
    avatar: "H",
  },
  {
    id: "3",
    merchantName: "طارق استور",
    discount: 20,
    expiryDate: "2025 يناير 20",
    code: "Tare9St0Qr",
    avatar: "T",
  },
  {
    id: "4",
    merchantName: "READ EFFECTIVELY",
    discount: 50,
    expiryDate: "انتهت صلاحيته",
    code: "اقرأ",
    avatar: "📚",
    isExpired: true,
  },
  {
    id: "5",
    merchantName: "محمود أبوك MAHMOUD ABOC",
    discount: 40,
    expiryDate: "2029 أكتوبر 26",
    code: "you40",
    avatar: "M",
  },
  {
    id: "6",
    merchantName: "AHMED ELBOGHDADY",
    discount: 50,
    expiryDate: "2024 نوفمبر 30",
    code: "9JBZ6UUF",
    avatar: "A",
  },
];

export default function CouponPage() {
  const [copiedCodes, setCopiedCodes] = useState([]);
  const { toast } = useToast();

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCodes([...copiedCodes, code]);
      toast({
        title: "تم النسخ بنجاح",
        description: `تم نسخ الكود: ${code}`,
      });
      setTimeout(() => {
        setCopiedCodes(copiedCodes.filter((c) => c !== code));
      }, 2000);
    } catch (err) {
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من نسخ الكود",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 rtl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <a href="/" className="hover:text-primary">
          الصفحة الرئيسية
        </a>
        <ChevronLeft className="h-4 w-4" />
        <span className="text-foreground">كوبونات خاصة بي</span>
      </nav>

      <h1 className="text-2xl font-bold mb-8">كوبونات خاصة بي</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <Card key={coupon.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold">{coupon.merchantName}</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl font-bold">
                      {coupon.discount}%
                    </span>
                    <span className="text-muted-foreground">كوبون تخفيض</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <span>صالح حتى:</span>
                    <span className={coupon.isExpired ? "text-red-500" : ""}>
                      {coupon.expiryDate}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <Button
                      onClick={() => copyCode(coupon.code)}
                      variant="default"
                      className="w-full"
                      disabled={coupon.isExpired}
                    >
                      {copiedCodes.includes(coupon.code) ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          تم النسخ
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          {coupon.code}
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      disabled={coupon.isExpired}
                    >
                      انظر الى المنتجات
                    </Button>
                  </div>
                </div>
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold ${
                    coupon.isExpired
                      ? "bg-muted text-muted-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {coupon.avatar}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
