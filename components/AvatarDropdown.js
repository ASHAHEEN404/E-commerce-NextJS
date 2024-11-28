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
          className="flex items-center gap-4  cursor-pointer text-sm font-medium text-gray-900 rounded-full dark:hover:text-blue-500"
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
          <Button variant="ghost" className="w-full justify-end">
            <span>الصفحة الشخصية</span>
            <User strokeWidth="1" className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-end">
            <span>المحفظة</span>
            <Wallet strokeWidth="1" className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-end">
            <span>الطلبات</span>
            <ShoppingBag strokeWidth="1" className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-end">
            <span>كوبونات خاصة بي</span>
            <Receipt strokeWidth="1" className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-end">
            <span>الرسائل</span>
            <Mail strokeWidth="1" className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-end">
            <span>إعدادات الملف الشخصي</span>
            <Settings strokeWidth="1" className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="border" />
        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-end">
            <span>تسجيل خروج</span>
            <LogOut strokeWidth="1" className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
