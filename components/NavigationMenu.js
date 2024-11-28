"use client";

import * as React from "react";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "التطوير و التقنية والبرمجة",
    href: "#",
    submenu: [
      { title: "تطوير الويب", href: "#" },
      { title: "تطوير التطبيقات", href: "#" },
      { title: "قواعد البيانات", href: "#" },
    ],
  },
  {
    title: "الأعمال",
    href: "#",
    submenu: [
      { title: "ريادة الأعمال", href: "#" },
      { title: "التسويق", href: "#" },
      { title: "المبيعات", href: "#" },
    ],
  },
  {
    title: "التمويل والمحاسبة",
    href: "#",
    submenu: [
      { title: "المحاسبة", href: "#" },
      { title: "التمويل الشخصي", href: "#" },
      { title: "الاستثمار", href: "#" },
    ],
  },
  {
    title: "التطور والتنمية الشخصية",
    href: "#",
    submenu: [
      { title: "تطوير الذات", href: "#" },
      { title: "القيادة", href: "#" },
      { title: "الإنتاجية", href: "#" },
    ],
  },
  { title: "تصميم", href: "#" },
  { title: "التسويق", href: "#" },
  { title: "نمط الحياة", href: "#" },
  { title: "الصحة واللياقة", href: "#" },
  { title: "التدريس والأكاديميات", href: "#" },
  { title: "أخرى", href: "#" },
];

export function NavigationMenu() {
  const [activeMenu, setActiveMenu] = React.useState(null);
  const timeoutRef = React.useRef(null);

  const handleMouseEnter = (item) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 300);
  };

  return (
    <div
      className="flex bg-white font-sans"
      dir="rtl"
      onMouseLeave={handleMouseLeave}
    >
      <nav className="w-64 border-l">
        <ul className="space-y-2 p-4">
          {menuItems.map((item) => (
            <li key={item.title} onMouseEnter={() => handleMouseEnter(item)}>
              <div
                className={cn(
                  "flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                  activeMenu === item && "bg-gray-100"
                )}
              >
                <span>{item.title}</span>
                {item.submenu && <ChevronLeft className="h-4 w-4" />}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {activeMenu && activeMenu.submenu && (
        <div
          className="w-64 bg-gray-50 p-4"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
        >
          <h3 className="mb-4 font-semibold">{activeMenu.title}</h3>
          <ul className="space-y-2">
            {activeMenu.submenu.map((subItem) => (
              <li key={subItem.title}>
                <a
                  href={subItem.href}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  {subItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
