
"use client";
import React from 'react';
import { Package2, Bell, ShoppingCart, Package, Users, LineChart, Home, Settings, Workflow } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation'

export default function Layout({ children } : { children: React.ReactNode }) {
    const pathname = usePathname()
    return (
        <html lang="en">
            <body className="antialiased">
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <BrandtIcon className="h-6 w-6" />
              <span className="">Brandt</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard"
                className={ pathname === "/dashboard" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" }
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className={ pathname === "/dashboard/orders" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" }
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="/dashboard/automatisations"
                className={ pathname === "/dashboard/automatisations" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" }
              >
                <Workflow className="h-4 w-4" />
                Automatisations{" "}
              </Link>
              <Link
                href="#"
                
                className={ pathname === "/dashboard/customer" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" }

              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className={ pathname === "/dashboard/analytics" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" }
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href="/dashboard/settings"
                className={ pathname === "/dashboard/settings" ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" }
              >
              <Settings className="h-4 w-4" />
              Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <BrandtIcon className="h-6 w-6" />
                  <span className="sr-only">Brandt</span>
                </Link>
                <Link
                  href="#"
                  className={ pathname === "/dashboard" ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground" : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground" }
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main>
                {children}
        </main>

        </div>
        </div>
            </body>
        </html>
    );
}


function BrandtIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="87px"
        height="92px"
        viewBox="0 0 87 92"
        style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd' }}
      >
        <g>
          <path
            style={{ opacity: 0.956 }}
            fill="000000"
            d="M -0.5,1.5 C 27.1667,1.5 54.8333,1.5 82.5,1.5C 82.5,29.1667 82.5,56.8333 82.5,84.5C 54.8333,84.5 27.1667,84.5 -0.5,84.5C -0.5,80.5 -0.5,76.5 -0.5,72.5C 9.17241,72.6665 18.8391,72.4998 28.5,72C 39.5997,71.6526 48.4331,67.1526 55,58.5C 57.7779,48.2337 53.9445,41.7337 43.5,39C 52.2697,37.7219 57.6031,32.8885 59.5,24.5C 59.7205,21.2089 58.3872,18.7089 55.5,17C 52.3522,15.3953 49.0189,14.3953 45.5,14C 30.1703,13.5001 14.837,13.3334 -0.5,13.5C -0.5,9.5 -0.5,5.5 -0.5,1.5 Z"
          />
        </g>
        <g>
          <path
            style={{ opacity: 0.909 }}
            fill="#000000"
            d="M 19.5,20.5 C 25.2896,20.0962 30.9562,20.5962 36.5,22C 40.3069,26.9518 39.3069,30.9518 33.5,34C 26.3387,36.1783 19.0053,37.0116 11.5,36.5C 12.5065,32.1421 13.6731,27.8088 15,23.5C 16.4087,22.2189 17.9087,21.2189 19.5,20.5 Z"
          />
        </g>
        <g>
          <path
            style={{ opacity: 0.94 }}
            fill="#000000"
            d="M 8.5,43.5 C 15.5079,43.3337 22.5079,43.5004 29.5,44C 35.1963,47.8267 36.0296,52.66 32,58.5C 29.7417,60.4296 27.2417,61.9296 24.5,63C 17.5079,63.4996 10.5079,63.6663 3.5,63.5C 5.16667,56.8333 6.83333,50.1667 8.5,43.5 Z"
          />
        </g>
      </svg>
    );
  }
