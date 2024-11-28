// "use client";

// import { useState } from "react";
// import { useMediaQuery } from "@/app/hooks/use-media-query";
// import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
// import { MenuIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import AvatarDropdown from "./AvatarDropdown";

// const MobileMenu = () => {
//   const isDesktop = useMediaQuery("(min-width: 900px)");
//   const [items, setItems] = useState(["Item 1", "Item 2"]); // Initial list items

//   const handleAvatarDropdownClick = () => {
//     setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]); // Add a new item
//   };

//   return isDesktop ? (
//     <div className="hidden">DesktopIconsds</div>
//   ) : (
//     <div>
//       <Drawer direction="right">
//         <DrawerTrigger>
//           <MenuIcon strokeWidth="1.5" textLength={20} type="button" />
//         </DrawerTrigger>
//         <DrawerContent className="h-full">
//           <div className="flex flex-col gap-4 p-4">
//             <Button asChild>
//               <Link
//                 href="/start-selling"
//                 className="space-x-1 bg-primary hover:bg-primary-foreground text-[1rem] font-thin rounded-none py-6 px-3"
//               >
//                 إبدا البيع الأن
//               </Link>
//             </Button>
//             <div className="flex justify-center items-center text-center w-full mt-4">
//               <Tabs defaultValue="main" className="w-[800px] text-[1rem]">
//                 <TabsList>
//                   <TabsTrigger value="categories">فئات</TabsTrigger>
//                   <TabsTrigger value="main">القائمة الرئيسية</TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="main">
//                   <div className="mt-5 flex flex-col">
//                     {/* AvatarDropdown Component */}
//                     <div className="flex justify-end mb-4">
//                       <AvatarDropdown onClick={handleAvatarDropdownClick} />
//                     </div>
//                     {/* Dynamic List */}
//                     <ul className="list-disc pl-5">
//                       {items.map((item, index) => (
//                         <li
//                           key={index}
//                           className="text-gray-700 dark:text-gray-300"
//                         >
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </TabsContent>
//                 <TabsContent value="categories">
//                   Change your password here.
//                 </TabsContent>
//               </Tabs>
//             </div>
//           </div>
//         </DrawerContent>
//       </Drawer>
//     </div>
//   );
// };

// export default MobileMenu;

import React, { useState } from "react";
import { AvatarImage, Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/Button";
import Link from "next/link";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import {
  Banknote,
  BookOpen,
  Heart,
  LogOut,
  Mail,
  MapPin,
  Receipt,
  Settings,
  ShoppingBag,
  User,
  Wallet,
} from "lucide-react";

const Drawer = () => {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown
  const [currency, setCurrency] = useState("Euro"); // State for selected currency

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  return isDesktop ? (
    <div className="hidden">DesktopIconsds</div>
  ) : (
    <div>
      {/* Hamburger Button */}
      <div className="text-center">
        <button
          className="text-black rounded-lg text-sm focus:outline-none"
          onClick={toggleDrawer}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={closeDrawer} // Close drawer when overlay is clicked
        ></div>
      )}

      {/* Drawer Component */}
      <div
        className={`fixed top-16 right-0 z-30 h-screen p-5 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } bg-white w-80 dark:bg-gray-800`} // Increased width to 80
        tabIndex="-1"
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          القائمة
        </h5>

        <Button asChild>
          <Link
            href="/start-selling"
            onClick={closeDrawer} // Close drawer on link click
            className="space-x-1 w-full bg-primary mt-6 hover:bg-primary-foreground text-[1rem] font-thin rounded-none py-6 px-3"
          >
            إبدا البيع الأن
          </Link>
        </Button>
        <button
          type="button"
          onClick={closeDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 left-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/* Dashboard Section */}
            <li>
              <button
                type="button"
                className="flex justify-between items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={toggleDropdown}
              >
                {/* Left side: Avatar and Name */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage alt="@shadcn" />
                    <AvatarFallback>عب</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">عبدالله شاهين</span>
                </div>

                {/* Right side: Chevron */}
                <div>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="py-2 px-2 space-y-2">
                  <li>
                    <div className="flex  items-center hover:bg-gray-100 ">
                      <User strokeWidth="1" className="mr-2 h-6 w-6" />
                      <Link
                        href="#"
                        onClick={closeDrawer}
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group dark:text-white dark:hover:bg-gray-700"
                      >
                        الصفحة الشخصية
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex  items-center hover:bg-gray-100 ">
                      <Wallet strokeWidth="1" className="mr-2 h-6 w-6" />
                      <Link
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:text-white dark:hover:bg-gray-700"
                      >
                        المحفظة
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center hover:bg-gray-100 ">
                      <ShoppingBag strokeWidth="1" className="mr-2 h-6 w-6" />
                      <Link
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:text-white dark:hover:bg-gray-700"
                      >
                        الطلبات
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center hover:bg-gray-100 ">
                      <Receipt strokeWidth="1" className="mr-2 h-6 w-6" />
                      <Link
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:text-white dark:hover:bg-gray-700"
                      >
                        كوبونات خاصة بي
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center hover:bg-gray-100 ">
                      <Mail strokeWidth="1" className="mr-2 h-6 w-6" />
                      <Link
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:text-white dark:hover:bg-gray-700"
                      >
                        الرسائل
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center hover:bg-gray-100 ">
                      <Settings strokeWidth="1" className="mr-2 h-6 w-6" />
                      <Link
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:text-white dark:hover:bg-gray-700"
                      >
                        إعدادات الملف الشخصي
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center hover:bg-gray-100 ">
                      <LogOut strokeWidth="1" className="mr-2 h-6 w-6" />
                      <Link
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:text-white dark:hover:bg-gray-700"
                      >
                        تسجيل خروج
                      </Link>
                    </div>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-2">
              <div className="flex items-center hover:bg-gray-100 ">
                <BookOpen strokeWidth="1" className="mr-2 h-6 w-6" />
                <Link
                  href="/"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:text-white dark:hover:bg-gray-700"
                >
                  الصفحة الرئيسية
                </Link>
              </div>
            </li>

            <li className="px-2">
              <div className="flex items-center hover:bg-gray-100 ">
                <Heart strokeWidth="1" className="mr-2 h-6 w-6" />
                <Link
                  href="/favorites"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:text-white dark:hover:bg-gray-700"
                >
                  مفضلتي
                </Link>
              </div>
            </li>

            <li className="px-2">
              <div className="flex items-center hover:bg-gray-100 ">
                <MapPin strokeWidth="1" className="mr-2 h-6 w-6" />
                <Link
                  href="/"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group dark:text-white dark:hover:bg-gray-700"
                >
                  موقعي
                </Link>
              </div>
            </li>

            <li className="px-2">
              <div className="mt-4">
                <div className="flex gap-3  items-center">
                  <Banknote strokeWidth="1" className="mr-2 h-6 w-6" />
                  <label
                    htmlFor="currency"
                    className="block text-md font-medium text-gray-700 dark:text-gray-300"
                  >
                    العملة
                  </label>
                </div>
                <select
                  id="currency"
                  value={currency}
                  onChange={handleCurrencyChange}
                  className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <option value="Euro">Euro</option>
                  <option value="Dollar">Dollar</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
