import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Redefining Your <br className="hidden sm:inline" /> Everyday Style
            </h1>
            <p className="text-muted-foreground text-lg max-w-[600px]">
                Discover our latest collection of premium quality essentials designed for the modern lifestyle.
            </p>
            <Button size="lg" className="h-12 px-8 text-base">
                Shop the Collection
            </Button>
        </div>
    );
}