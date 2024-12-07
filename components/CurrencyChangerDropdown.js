"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function CurrencyChangerDropdown() {
  const [currency, setCurrency] = React.useState("USD");

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              className="bg-transparent border-none rounded-none shadow-none outline-none hover:bg-transparent "
              variant="outline"
            >
              العملة: {currency}
            </Button>
            <ChevronDown size={15} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="text-end">
            اختر العملة
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={currency} onValueChange={setCurrency}>
            <DropdownMenuRadioItem value="USD" className="text-end">
              Dollar (USD)
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="EUR" className="text-end">
              Euro (EUR)
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
