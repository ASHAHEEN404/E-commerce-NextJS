import {
  ShoppingBag,
  Tag,
  Download,
  RotateCcw,
  Eye,
  Home,
  FileText,
  ArrowLeftRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

// Fake data for orders
const orders = [
  {
    id: "001",
    date: "2023-11-28",
    customer: "أحمد محمد",
    total: 1500,
    status: "مكتمل",
  },
  {
    id: "002",
    date: "2023-11-27",
    customer: "فاطمة علي",
    total: 2000,
    status: "قيد التنفيذ",
  },
  {
    id: "003",
    date: "2023-11-26",
    customer: "محمود أحمد",
    total: 1000,
    status: "ملغي",
  },
  {
    id: "004",
    date: "2023-11-25",
    customer: "زينب حسن",
    total: 3000,
    status: "مكتمل",
  },
  {
    id: "005",
    date: "2023-11-24",
    customer: "عمر خالد",
    total: 1800,
    status: "قيد التنفيذ",
  },
];

export default function OrdersPage() {
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
              <BreadcrumbPage>طلبات خدمات مخصصة</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium">طلبات خدمات مخصصة</h1>
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
                      className="flex items-center gap-2 text-sm font-medium text-primary"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span className="">الطلبات</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders/downloads"
                      className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
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
              <Card className="transition-colors cursor-pointer bg-muted/70">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">الطلبات</p>
                    <p className="text-sm text-muted-foreground">
                      {orders.length} طلبات
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/orders/downloads">
              <Card className="transition-colors cursor-pointer hover:bg-muted/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">التحميلات</p>
                    <p className="text-sm text-muted-foreground">3 ملفات</p>
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
              <CardTitle>الطلبات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">رقم الطلب</TableHead>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>العميل</TableHead>
                      <TableHead>الإجمالي</TableHead>
                      <TableHead>الحالة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.id}
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.total} ريال</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "مكتمل"
                                ? "success"
                                : order.status === "قيد التنفيذ"
                                ? "warning"
                                : "destructive"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
