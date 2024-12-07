"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const tabsContent = {
  profits: "Content for Profits",
  affiliateProfits: "Content for Affiliate Profits",
  deposits: "Content for Deposits",
  expenses: "Content for Expenses",
  withdrawProfits: "Content for Withdraw Profits",
  profitTransferMethod: "Content for Profit Transfer Method",
};

const fakeTransactions = [
  {
    id: 1,
    order: "#1234",
    total: 500,
    vat: 25,
    fees: 10,
    shipping: 15,
    profit: 450,
    date: "2023-11-28",
  },
  {
    id: 2,
    order: "#1235",
    total: 750,
    vat: 37.5,
    fees: 15,
    shipping: 20,
    profit: 677.5,
    date: "2023-11-27",
  },
  {
    id: 3,
    order: "#1236",
    total: 300,
    vat: 15,
    fees: 5,
    shipping: 10,
    profit: 270,
    date: "2023-11-26",
  },
  {
    id: 4,
    order: "#1237",
    total: 1000,
    vat: 50,
    fees: 20,
    shipping: 25,
    profit: 905,
    date: "2023-11-25",
  },
  {
    id: 5,
    order: "#1238",
    total: 250,
    vat: 12.5,
    fees: 5,
    shipping: 10,
    profit: 222.5,
    date: "2023-11-24",
  },
];

export default function WalletPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("tab") || "profits";

  const handleTabChange = (key) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", key);
    router.push(`/wallet?${params.toString()}`);
  };

  return (
    <div className="container p-4 mx-auto space-y-6" dir="rtl">
      {/* Wallet Balance Card */}
      <Card className="relative w-full max-w-3xl mx-auto">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute right-0 mr-4 text-[11px] bg-slate-200 top-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09a5.5 5.5 0 0 1-.09-1a6 6 0 0 1 6-6a5.9 5.9 0 0 1 3 .81V6a2 2 0 0 0-2-2m0 7H4V8h16m0 7v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"
                    ></path>
                  </svg>
                  اضافة اموال
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] w-full p-6 rounded-md shadow-md bg-white">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold text-center text-gray-800">
                    إضافة أموال
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid items-center gap-4">
                    <div className="input-group">
                      <Label
                        htmlFor="product_discounted_price_input"
                        className="block mb-2 text-sm font-medium text-right text-gray-700"
                      >
                        أدخل المبلغ
                      </Label>
                      <div className="flex items-center w-full border border-gray-300 rounded-md">
                        <span className="px-4 py-2 text-gray-600 bg-gray-100 rounded-l-md">
                          $
                        </span>
                        <Input
                          type="number"
                          name="amount"
                          id="product_discounted_price_input"
                          className="flex-1 w-full px-3 py-2 text-right border-none rounded-r-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    className="w-full py-2 text-white rounded-md bg-primary hover:bg-primary/80"
                    type="submit"
                  >
                    إستمر لـ الدفع
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            ;
            <Wallet className="w-16 h-16 text-primary" />
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-600">
                رصيد المحفظة
              </h2>
              <p className="mt-2 text-4xl font-bold">$ 2525.00</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {Object.keys(tabsContent).map((key) => (
          <Button
            key={key}
            variant={activeTab === key ? "default" : "outline"}
            onClick={() => handleTabChange(key)}
          >
            {tabLabels[key]}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabsContent[activeTab] || (
          <div className="text-center text-gray-500">محتوى غير متوفر</div>
        )}
      </div>

      {/* Transactions Table for specific tabs */}
      {["profits", "deposits", "expenses"].includes(activeTab) && (
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الطلب</TableHead>
                <TableHead className="text-right">المجموع الكلي</TableHead>
                <TableHead className="text-right">
                  ضريبة القيمة المضافة
                </TableHead>
                <TableHead className="text-right">العمولات والخصومات</TableHead>
                <TableHead className="text-right">الارباح</TableHead>
                <TableHead className="hidden text-right lg:block">
                  التاريخ
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fakeTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.order}</TableCell>
                  <TableCell>${transaction.total.toFixed(2)}</TableCell>
                  <TableCell>${transaction.vat.toFixed(2)}</TableCell>
                  <TableCell>${transaction.fees.toFixed(2)}</TableCell>
                  <TableCell>${transaction.profit.toFixed(2)}</TableCell>
                  <TableCell className="hidden lg:block">
                    {transaction.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

const tabLabels = {
  profits: "أرباح",
  affiliateProfits: "أرباح التسويق بالعمولة",
  deposits: "الايداعات",
  expenses: "النفقات",
  withdrawProfits: "سحب الارباح",
  profitTransferMethod: "طريقة تحويل ارباحي",
};
