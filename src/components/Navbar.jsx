import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ShoppingCart, Menu, Trash2, Plus, Minus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";

export function Navbar() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const navigate = useNavigate();

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => {
        const cleanPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
        return sum + cleanPrice * item.quantity;
    }, 0);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">

                {/* Mobile Menu */}
                <div className="flex items-center md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="mr-2">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] bg-white dark:bg-zinc-950">
                            <SheetHeader>
                                <SheetTitle className="text-left font-bold text-2xl">adhya.</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-6 mt-8">
                                <Link to="/" onClick={() => setIsCartOpen(false)} className="text-lg font-medium hover:text-primary">Shop</Link>
                                <a href="#" className="text-lg font-medium hover:text-primary">Categories</a>
                                <a href="#" className="text-lg font-medium hover:text-primary">About</a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo (Clicks back to home) */}
                <Link to="/" className="font-bold text-2xl tracking-tight">adhya.</Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-8">
                    <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Shop</Link>
                    <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Categories</a>
                    <a href="#" className="text-sm font-medium transition-colors hover:text-primary">About</a>
                </nav>

                {/* Cart Trigger & Drawer */}
                <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="relative cursor-pointer">
                            <ShoppingCart className="h-5 w-5" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold animate-in zoom-in-50">
                                    {totalItems}
                                </span>
                            )}
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[350px] sm:w-[450px] bg-white dark:bg-zinc-950 flex flex-col justify-between px-6 py-6">
                        <SheetHeader>
                            <SheetTitle className="text-left font-bold text-xl flex items-center gap-2">
                                <ShoppingCart className="h-5 w-5" /> Your Shopping Bag ({totalItems})
                            </SheetTitle>
                        </SheetHeader>

                        <div className="flex-1 overflow-y-auto py-6 space-y-4">
                            {cart.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground space-y-2">
                                    <ShoppingCart className="h-12 w-12 stroke-1 opacity-40" />
                                    <p>Your bag is empty.</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                                        <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-md bg-secondary" />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-sm">{item.title}</h4>
                                            <p className="text-sm font-medium text-primary">{item.price}</p>

                                            <div className="flex items-center gap-2 mt-2">
                                                <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, -1)}>
                                                    <Minus className="h-3 w-3" />
                                                </Button>
                                                <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, 1)}>
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeFromCart(item.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="border-t pt-4 space-y-4">
                                <div className="flex items-center justify-between font-semibold text-lg">
                                    <span>Total:</span>
                                    <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                                </div>
                                <Button
                                    className="w-full h-12 text-base font-medium rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-200 active:scale-[0.98] shadow-sm"
                                    onClick={() => {
                                        setIsCartOpen(false);
                                        navigate("/checkout");
                                    }}
                                >
                                    Proceed to Checkout
                                </Button>
                            </div>
                        )}
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}


