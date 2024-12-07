"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  User,
  Wallet,
  ShoppingBag,
  Receipt,
  Mail,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = DropdownMenuPrimitive.Content;
const DropdownMenuItem = DropdownMenuPrimitive.Item;
const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;

export default function AvatarDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none" asChild>
        <button
          onClick={handleToggle}
          s
          className="flex items-center gap-4 text-sm font-medium text-gray-900 rounded-full cursor-pointer dark:hover:text-blue-500"
        >
          {/* Avatar and Name */}
          <Avatar className="w-7 h-7">
            <AvatarImage alt="@shadcn" />
            <AvatarFallback>عب</AvatarFallback>
          </Avatar>
          <span className="text-sm">عبدالله شاهين</span>
          {/* Chevron Icon */}
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 bg-white border  rounded-sm z-[100]">
        <DropdownMenuItem className="hover:border-none" asChild>
          <Button variant="ghost" className="justify-end w-full">
            <span>الصفحة الشخصية</span>
            <User strokeWidth="1" className="w-4 h-4 mr-2" />
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/wallet">
            <Button variant="ghost" className="justify-end w-full">
              <span>المحفظة</span>
              <Wallet strokeWidth="1" className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/orders">
            <Button variant="ghost" className="justify-end w-full">
              <span>الطلبات</span>
              <ShoppingBag strokeWidth="1" className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/my-coupons">
            <Button variant="ghost" className="justify-end w-full">
              <span>كوبونات خاصة بي</span>
              <Receipt strokeWidth="1" className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Button variant="ghost" className="justify-end w-full">
            <span>الرسائل</span>
            <Mail strokeWidth="1" className="w-4 h-4 mr-2" />
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings">
            <Button variant="ghost" className="justify-end w-full">
              <span>إعدادات الملف الشخصي</span>
              <Settings strokeWidth="1" className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="border" />
        <DropdownMenuItem asChild>
          <Button variant="ghost" className="justify-end w-full">
            <span>تسجيل خروج</span>
            <LogOut strokeWidth="1" className="w-4 h-4 mr-2" />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
