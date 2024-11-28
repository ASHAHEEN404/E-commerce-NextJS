import {
  ShoppingBag,
  Download,
  RotateCcw,
  Home,
  FileText,
  ArrowLeftRight,
} from "lucide-react";
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

// Fake data for downloads
const downloads = [
  {
    id: "001",
    name: "تقرير المبيعات",
    date: "2023-11-28",
    fileType: "PDF",
  },
  {
    id: "002",
    name: "قائمة العملاء",
    date: "2023-11-27",
    fileType: "Excel",
  },
  {
    id: "003",
    name: "تحليل الأداء",
    date: "2023-11-26",
    fileType: "PowerPoint",
  },
  {
    id: "004",
    name: "دليل المستخدم",
    date: "2023-11-25",
    fileType: "PDF",
  },
  {
    id: "005",
    name: "بيانات المخزون",
    date: "2023-11-24",
    fileType: "Excel",
  },
];

export default function DownloadsPage() {
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
              <BreadcrumbPage>التحميلات</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium">التحميلات</h1>
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
                      className="flex items-center gap-2 text-sm text-primary font-medium"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="">التحميلات</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders/refund-requests"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/orders">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">الطلبات</p>
                    <p className="text-sm text-muted-foreground">5 طلبات</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/orders/downloads">
              <Card className="bg-muted/70 transition-colors cursor-pointer">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">التحميلات</p>
                    <p className="text-sm text-muted-foreground">5 ملفات</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <RotateCcw className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">طلبات الإرجاع</p>
                  <p className="text-sm text-muted-foreground">1 طلب</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>الملفات القابلة للتحميل</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {downloads.map((item) => (
                  <Card key={item.id} className="flex flex-col justify-between">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        نوع الملف: {item.fileType}
                      </p>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> تحميل
                      </Button>
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
