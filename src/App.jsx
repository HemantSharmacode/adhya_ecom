// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { ShoppingCart } from "lucide-react";
// // import "./index.css";

// // export default function App() {
// //   return (
// //     <div className="min-h-screen bg-background text-foreground">
// //       {/* Navigation Bar */}
// //       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
// //         <div className="container mx-auto px-4 flex h-16 items-center justify-between">
// //           <div className="font-bold text-2xl tracking-tight">adhya.</div>
// //           <nav className="hidden md:flex gap-8">
// //             <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Shop</a>
// //             <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Categories</a>
// //             <a href="#" className="text-sm font-medium transition-colors hover:text-primary">About</a>
// //           </nav>
// //           <Button variant="outline" size="icon" className="relative">
// //             <ShoppingCart className="h-5 w-5" />
// //             <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
// //               0
// //             </span>
// //             <span className="sr-only">Cart</span>
// //           </Button>
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <main className="container mx-auto px-4 py-16 md:py-24">
// //         <div className="flex flex-col items-center text-center space-y-6 mb-20">
// //           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
// //             Redefining Your <br className="hidden sm:inline" /> Everyday Style
// //           </h1>
// //           <p className="text-muted-foreground text-lg max-w-[600px]">
// //             Discover our latest collection of premium quality essentials designed for the modern lifestyle.
// //           </p>
// //           <Button size="lg" className="h-12 px-8 text-base">
// //             Shop the Collection
// //           </Button>
// //         </div>

// //         {/* Featured Products Grid */}
// //         <div className="space-y-6">
// //           <div className="flex items-center justify-between">
// //             <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
// //             <a href="#" className="text-sm font-medium text-primary hover:underline">View all</a>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //             {[1, 2, 3, 4].map((item) => (
// //               <Card key={item} className="overflow-hidden group cursor-pointer border-0 shadow-sm hover:shadow-md transition-all">
// //                 <div className="h-72 bg-secondary/40 relative overflow-hidden transition-colors group-hover:bg-secondary/60">
// //                   {/* Image Placeholder */}
// //                   <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
// //                     Product Image {item}
// //                   </div>
// //                 </div>
// //                 <CardContent className="p-4">
// //                   <h3 className="font-semibold text-lg">Premium Item {item}</h3>
// //                   <p className="text-muted-foreground text-sm mb-4">Minimalist Design</p>
// //                   <div className="flex items-center justify-between">
// //                     <span className="font-bold text-lg">₹2,499</span>
// //                     <Button variant="secondary" size="sm">Add to Cart</Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShoppingCart } from "lucide-react";
// import "./index.css";

// // 1. Create the mock data array
// const mockProducts = [
//   {
//     id: 1,
//     title: "Minimalist White Tee",
//     description: "100% Organic Cotton",
//     price: "₹1,499",
//     imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
//   },
//   {
//     id: 2,
//     title: "Classic Denim Jacket",
//     description: "Vintage Wash",
//     price: "₹3,999",
//     imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=500&q=80",
//   },
//   {
//     id: 3,
//     title: "Canvas Sneakers",
//     description: "Everyday Comfort",
//     price: "₹2,499",
//     imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80",
//   },
//   {
//     id: 4,
//     title: "Leather Backpack",
//     description: "Premium Full-Grain",
//     price: "₹4,999",
//     imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
//   }
// ];

// export default function App() {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       {/* Navigation Bar */}
//       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container mx-auto px-4 flex h-16 items-center justify-between">
//           <div className="font-bold text-2xl tracking-tight">adhya.</div>
//           <nav className="hidden md:flex gap-8">
//             <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Shop</a>
//             <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Categories</a>
//             <a href="#" className="text-sm font-medium transition-colors hover:text-primary">About</a>
//           </nav>
//           <Button variant="outline" size="icon" className="relative">
//             <ShoppingCart className="h-5 w-5" />
//             <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
//               0
//             </span>
//             <span className="sr-only">Cart</span>
//           </Button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="container mx-auto px-4 py-16 md:py-24">
//         <div className="flex flex-col items-center text-center space-y-6 mb-20">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
//             Redefining Your <br className="hidden sm:inline" /> Everyday Style
//           </h1>
//           <p className="text-muted-foreground text-lg max-w-[600px]">
//             Discover our latest collection of premium quality essentials designed for the modern lifestyle.
//           </p>
//           <Button size="lg" className="h-12 px-8 text-base">
//             Shop the Collection
//           </Button>
//         </div>

//         {/* Featured Products Grid */}
//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
//             <a href="#" className="text-sm font-medium text-primary hover:underline">View all</a>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {/* 2. Loop through the mockProducts array */}
//             {mockProducts.map((product) => (
//               <Card key={product.id} className="overflow-hidden group cursor-pointer border border-neutral-200/50 shadow-sm hover:shadow-md transition-all">                <div className="h-72 bg-secondary/40 relative overflow-hidden">
//                 {/* 3. Render the image from the URL */}
//                 <img
//                   src={product.imageUrl}
//                   alt={product.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//                 <CardContent className="p-4">
//                   {/* 4. Display the specific product data */}
//                   <h3 className="font-semibold text-lg">{product.title}</h3>
//                   <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="font-bold text-lg">{product.price}</span>
//                     <Button variant="secondary" size="sm">Add to Cart</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/data/products";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <Hero />

        {/* Featured Products Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
            <a href="#" className="text-sm font-medium text-primary hover:underline">View all</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}