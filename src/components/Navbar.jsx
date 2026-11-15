// import { Button } from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react";

// export function Navbar() {
//     return (
//         <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//             <div className="container mx-auto px-4 flex h-16 items-center justify-between">
//                 <div className="font-bold text-2xl tracking-tight">adhya.</div>
//                 <nav className="hidden md:flex gap-8">
//                     <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Shop</a>
//                     <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Categories</a>
//                     <a href="#" className="text-sm font-medium transition-colors hover:text-primary">About</a>
//                 </nav>
//                 <Button variant="outline" size="icon" className="relative">
//                     <ShoppingCart className="h-5 w-5" />
//                     <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
//                         0
//                     </span>
//                     <span className="sr-only">Cart</span>
//                 </Button>
//             </div>
//         </header>
//     );
// }




import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ShoppingCart, Menu } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">

                {/* Mobile Hamburger Menu */}
                <div className="flex items-center md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="mr-2">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white dark:bg-zinc-950">
                            <SheetHeader>
                                <SheetTitle className="text-left font-bold text-2xl tracking-tight">adhya.</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-6 mt-8">
                                <a href="#" className="text-lg font-medium transition-colors hover:text-primary">Shop</a>
                                <a href="#" className="text-lg font-medium transition-colors hover:text-primary">Categories</a>
                                <a href="#" className="text-lg font-medium transition-colors hover:text-primary">About</a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo */}
                <div className="font-bold text-2xl tracking-tight">adhya.</div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex gap-8">
                    <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Shop</a>
                    <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Categories</a>
                    <a href="#" className="text-sm font-medium transition-colors hover:text-primary">About</a>
                </nav>

                {/* Cart Icon */}
                <Button variant="outline" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                        0
                    </span>
                    <span className="sr-only">Cart</span>
                </Button>
            </div>
        </header>
    );
}


