import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/useCartStore";
import { Trash2, Plus, Minus, ArrowLeft, CheckCircle2, ShoppingBag } from "lucide-react";

export function CheckoutPage() {
    const cart = useCartStore((state) => state.cart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const clearCart = useCartStore((state) => state.clearCart);

    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "", email: "", address: "", city: "", pincode: "", phone: ""
    });

    const totalPrice = cart.reduce((sum, item) => {
        const cleanPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
        return sum + cleanPrice * item.quantity;
    }, 0);

    const handleCheckoutSubmit = (e) => {
        e.preventDefault();
        setIsSuccess(true);
        clearCart();
    };

    if (isSuccess) {
        return (
            <div className="container mx-auto px-4 py-24 max-w-md text-center space-y-6">
                <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto animate-in zoom-in-50" />
                <h1 className="text-3xl font-extrabold tracking-tight">Order Placed Successfully!</h1>
                <p className="text-muted-foreground">
                    Thank you for shopping with adhya. Your order has been placed successfully.
                </p>
                <Button asChild className="w-full h-11 text-base">
                    <Link to="/">Continue Shopping</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10 max-w-6xl">
            <Button variant="ghost" asChild className="mb-6 gap-2">
                <Link to="/">
                    <ArrowLeft className="h-4 w-4" /> Back to Store
                </Link>
            </Button>

            <h1 className="text-3xl font-extrabold tracking-tight mb-8">Checkout & Review</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Shipping Form */}
                <div className="lg:col-span-7">
                    <Card className="border border-border/50 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-xl">Shipping Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleCheckoutSubmit} id="checkout-form" className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input
                                            id="fullName" required placeholder="Hemant Sharma"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email" type="email" required placeholder="hemant@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">Street Address</Label>
                                    <Input
                                        id="address" required placeholder="104, MG Road"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                            id="city" required placeholder="Indore"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="pincode">Pincode</Label>
                                        <Input
                                            id="pincode" required placeholder="452001"
                                            value={formData.pincode}
                                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        id="phone" type="tel" required placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Cart Items CRUD Summary */}
                <div className="lg:col-span-5">
                    <Card className="border border-border/50 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-xl flex items-center justify-between">
                                <span>Order Summary</span>
                                <span className="text-sm font-normal text-muted-foreground">{cart.length} items</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {cart.length === 0 ? (
                                <div className="text-center py-8 text-muted-foreground space-y-2">
                                    <ShoppingBag className="h-12 w-12 mx-auto stroke-1 opacity-40" />
                                    <p>Your cart is empty.</p>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link to="/">Start Shopping</Link>
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <div className="divide-y max-h-[350px] overflow-y-auto pr-2 space-y-4">
                                        {cart.map((item) => (
                                            <div key={item.id} className="pt-4 first:pt-0 flex items-center gap-4">
                                                <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-md bg-secondary" />
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-sm">{item.title}</h4>
                                                    <p className="text-sm font-medium text-primary">{item.price}</p>

                                                    <div className="flex items-center gap-2 mt-2">
                                                        <Button type="button" variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, -1)}>
                                                            <Minus className="h-3 w-3" />
                                                        </Button>
                                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                        <Button type="button" variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, 1)}>
                                                            <Plus className="h-3 w-3" />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => removeFromCart(item.id)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t pt-4 space-y-2">
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>Subtotal</span>
                                            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>Shipping</span>
                                            <span className="text-green-600 font-medium">FREE</span>
                                        </div>
                                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                                            <span>Total Amount</span>
                                            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>

                                    <Button type="submit" form="checkout-form" className="w-full h-11 text-base font-medium">
                                        Place Order (COD)
                                    </Button>
                                </>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}