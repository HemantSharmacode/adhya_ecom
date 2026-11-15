import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProductCard({ product }) {
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
                    <Button variant="secondary" size="sm">Add to Cart</Button>
                </div>
            </CardContent>
        </Card>
    );
}