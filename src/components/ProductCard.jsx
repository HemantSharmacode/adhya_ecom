import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingBag, Check } from "lucide-react";

export function ProductCard({ product }) {
    const addToCart = useCartStore((state) => state.addToCart);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);

        // Reset the button back to normal after 1.5 seconds
        setTimeout(() => {
            setIsAdded(false);
        }, 1500);
    };

    return (
        <Card className="overflow-hidden group cursor-pointer border border-neutral-200/50 shadow-sm hover:shadow-md transition-all">
            <div className="h-72 bg-secondary/40 relative overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{product.price}</span>
                    <Button
                        className={`h-10 px-4 text-sm font-medium rounded-xl transition-all duration-300 active:scale-95 ${isAdded
                            ? "bg-green-600 hover:bg-green-600 text-white"
                            : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900"
                            }`}
                        onClick={handleAddToCart}
                    >
                        {isAdded ? (
                            <>
                                <Check className="h-4 w-4 mr-1.5 animate-in zoom-in-50" /> Added!
                            </>
                        ) : (
                            <>
                                <ShoppingBag className="h-4 w-4 mr-1.5" /> Add to Cart
                            </>
                        )}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}