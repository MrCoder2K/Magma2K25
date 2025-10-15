"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        // const section = document.getElementById(id || "");
        let section: HTMLElement | null = null;

        if (typeof document !== 'undefined') {
          section = document.getElementById(id || '');
        }

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setOpen(false);
        }

      }
    };
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container max-w-7xl mx-auto flex h-14 items-center justify-between py-1">
        <div className="font-bold text-xl p-2">
          <img
            src="/images/Magma.png"
            alt="MAGMA'25 Logo"
            className="mx-auto h-12 w-auto md:h-12"
          />
        </div>

        {/* Desktop Navbar */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {["Home", "Why Attend", "About", "Events", "Contact"].map((item) => (
              <NavigationMenuItem key={item}>
                <Link href={`#${item.toLowerCase()}`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    {item}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navbar */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle className="text-left">
                <img
                  src="/images/Magma.png"
                  alt="MAGMA'25 Logo"
                  className="mx-auto h-10 w-auto md:h-12" />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col py-4">
              {["Home", "Why Attend", "About", "Events", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
