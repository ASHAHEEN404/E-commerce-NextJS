"use client";

import { useState } from "react";
import { ShoppingBag, Home, FileText, ArrowLeftRight, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/use-toast";
import { Badge } from "@/components/ui/badge";

// Fake data for purchased products
const purchasedProducts = [
  { id: "1", name: "Product 1" },
  { id: "2", name: "Product 2" },
  { id: "3", name: "Product 3" },
];

// Fake data for refund requests
const refundRequests = [
  { id: "1", product: "Product 1", status: "revised" },
  { id: "2", product: "Product 2", status: "accepted" },
  { id: "3", product: "Product 3", status: "refused" },
];

export default function RefundRequestsPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [reason, setReason] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the refund request to your backend
    console.log("Refund requested for:", selectedProduct, "Reason:", reason);
    setIsOpen(false);
    toast({
      title: "Refund Request Submitted",
      description: "Your request is being reviewed.",
    });
  };

  return (
    <div className="container mx-auto p-4 lg:p-6" dir="rtl">
      <div className="flex items-center mb-4 mt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">الصفحة الرئيسية</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>طلبات الإرجاع</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium">طلبات الإرجاع</h1>
          <nav className="lg:w-64 space-y-2 lg:min-h-screen">
            <Card className="lg:h-screen shadow-none border-none">
              <CardContent className="p-4">
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Home className="h-4 w-4" />
                      <span className="">الصفحة الرئيسية</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span className="">الطلبات</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders/downloads"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="">التحميلات</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders/refund-requests"
                      className="flex items-center gap-2 text-sm text-primary font-medium"
                    >
                      <ArrowLeftRight className="h-4 w-4" />
                      <span className="">طلبات الإرجاع</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </nav>
        </div>

        <main className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle cla>طلب إرجاع جديد</CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button>طلب إرجاع</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-right mt-4">
                      طلب إرجاع
                    </DialogTitle>
                    <DialogDescription className="text-right">
                      يرجى اختيار المنتج الذي ترغب في إرجاعه وتوضيح السبب.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="product">اختر المنتج</Label>
                        <Select
                          className="w-full text-right"
                          dir="rtl"
                          id="product"
                          value={selectedProduct}
                          onValueChange={setSelectedProduct}
                        >
                          <SelectTrigger className="w-full text-right ">
                            <SelectValue placeholder="إختر المنتج" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectGroup>
                              {purchasedProducts.map((product) => (
                                <SelectItem key={product.id} value="product">
                                  {product.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="reason">سبب الإرجاع</Label>
                        <Textarea
                          id="reason"
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          placeholder="يرجى توضيح سبب رغبتك في إرجاع هذا المنتج"
                        />
                      </div>
                    </div>
                    <Button type="submit">إرسال طلب الإرجاع</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>طلبات الإرجاع السابقة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {refundRequests.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="flex justify-between items-center p-4">
                      <div>
                        <p className="font-medium">{request.product}</p>
                        <p className="text-sm text-muted-foreground">
                          رقم الطلب: {request.id}
                        </p>
                      </div>
                      <Badge
                        variant={
                          request.status === "accepted"
                            ? "success"
                            : request.status === "refused"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {request.status === "revised"
                          ? "قيد المراجعة"
                          : request.status === "accepted"
                          ? "مقبول"
                          : "مرفوض"}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
