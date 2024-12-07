"use client";

import Logo from "@/components/Logo";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";
import AvatarDropdown from "./AvatarDropdown";
import { CurrencyChangerDropdown } from "./CurrencyChangerDropdown";
import { NavigationMenu } from "./NavigationMenu";

const Header = () => {
  const [count, setCount] = useState(5);

  return (
    <>
      <div className="hidden mt-2 mb-2 lg:block">
        <div className="container">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="flex items-center gap-4">
              <AvatarDropdown />
              <CurrencyChangerDropdown />
            </div>
          </div>
        </div>
      </div>
      <hr className="hidden lg:flex lg-mb-2" />
      <div className="z-50 flex items-center justify-between h-16 px-8 py-4 lg:justify-around">
        <MobileMenu />

        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-6">
          <div className="cursor-pointer lg:hidden">
            <Search strokeWidth="1.5" width={25} height={25} />
          </div>
          {/* CART */}
          <Link href="/cart" className="flex items-center gap-2">
            <span className="hidden lg:block">عربة التسوق</span>
            <div className="relative">
              <ShoppingCart strokeWidth="1.5" width={25} height={25} />
              {count > 0 && (
                <span className="absolute -top-[0.35rem] -right-[0.45rem] flex items-center justify-center w-4 h-4 text-xs  font-thin text-white bg-red-500 rounded-full">
                  {count}
                </span>
              )}
            </div>
          </Link>

          {/* FAVORITES */}

          <Link href="/favorites" className="items-center hidden gap-2 lg:flex">
            <span className="hidden lg:block">مفضلتي</span>
            <div className="relative">
              <Heart strokeWidth="1.5" width={25} height={25} />
            </div>
          </Link>

          <Button className="hidden rounded-none lg:flex">
            إبدا البيع الأن
          </Button>
        </div>
      </div>

      {/* Navigation Menu */}
      {/* <NavigationMenu /> */}
    </>
  );
};

export default Header;
