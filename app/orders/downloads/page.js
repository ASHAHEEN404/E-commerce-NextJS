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
    <div className="container p-4 mx-auto lg:p-6" dir="rtl">
      <div className="flex items-center mt-4 mb-4">
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
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium">التحميلات</h1>
          <nav className="space-y-2 lg:w-64 lg:min-h-screen">
            <Card className="border-none shadow-none lg:h-screen">
              <CardContent className="p-4">
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                    >
                      <Home className="w-4 h-4" />
                      <span className="">الصفحة الرئيسية</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders"
                      className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span className="">الطلبات</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders/downloads"
                      className="flex items-center gap-2 text-sm font-medium text-primary"
                    >
                      <FileText className="w-4 h-4" />
                      <span className="">التحميلات</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders/refund-requests"
                      className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                    >
                      <ArrowLeftRight className="w-4 h-4" />
                      <span className="">طلبات الإرجاع</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </nav>
        </div>

        <main className="flex-1 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/orders">
              <Card className="transition-colors cursor-pointer hover:bg-muted/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">الطلبات</p>
                    <p className="text-sm text-muted-foreground">5 طلبات</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/orders/downloads">
              <Card className="transition-colors cursor-pointer bg-muted/70">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">التحميلات</p>
                    <p className="text-sm text-muted-foreground">5 ملفات</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/orders/refund-requests">
              <Card className="transition-colors cursor-pointer hover:bg-muted/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <RotateCcw className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">طلبات الإرجاع</p>
                    <p className="text-sm text-muted-foreground">1 طلب</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
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
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="mb-1 text-lg font-semibold">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                        <div className="p-2 rounded-full bg-primary/10">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <p className="mb-4 text-sm text-muted-foreground">
                        نوع الملف: {item.fileType}
                      </p>
                      <Button className="w-full">
                        <Download className="w-4 h-4 mr-2" /> تحميل
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
