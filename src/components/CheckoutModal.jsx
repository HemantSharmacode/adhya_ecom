import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartStore } from "@/store/useCartStore";
import { CheckCircle2, ShoppingBag } from "lucide-react";

export function CheckoutModal({ isOpen, onClose, totalPrice }) {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: "", address: "", phone: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order placement
        setIsSubmitted(true);
        clearCart();
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setFormData({ name: "", address: "", phone: "" });
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-zinc-950">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">
                        {isSubmitted ? "Order Confirmed!" : "Checkout"}
                    </DialogTitle>
                    <DialogDescription>
                        {isSubmitted
                            ? "Thank you for shopping with adhya. Your order has been placed successfully."
                            : "Enter your shipping details below to complete your purchase."}
                    </DialogDescription>
                </DialogHeader>

                {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-6 space-y-4 text-center">
                        <CheckCircle2 className="h-16 w-16 text-green-500 animate-in zoom-in-50" />
                        <p className="text-sm text-muted-foreground">We'll send a confirmation email with tracking details shortly.</p>
                        <Button onClick={handleClose} className="w-full mt-4">
                            Continue Shopping
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 py-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            id="name"
                            <Input
                                id="name"
                                placeholder="Hemant Sharma"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address">Delivery Address</Label>
                            <Input
                                id="address"
                                placeholder="104, MG Road, Indore"
                                required
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="+91 98765 43210"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div className="border-t pt-4 mt-4 flex items-center justify-between font-semibold text-base">
                            <span>Total Amount:</span>
                            <span className="text-primary">₹{totalPrice.toLocaleString('en-IN')}</span>
                        </div>

                        <DialogFooter className="pt-2">
                            <Button type="submit" className="w-full h-11">
                                Place Order (COD)
                            </Button>
                        </DialogFooter>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}