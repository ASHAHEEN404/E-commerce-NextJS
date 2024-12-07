import { ProductGallery } from "@/components/product-gallery";
import { ProductInfo } from "@/components/product-info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productData } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";

export default function ProductPage() {
  return (
    <div className="container py-8 mx-auto">
      <nav className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
        <a href="/" className="hover:text-primary">
          الصفحة الرئيسية
        </a>
        <ChevronLeft className="w-4 h-4" />
        <span className="text-foreground">المنتاجات</span>
        <ChevronLeft className="w-4 h-4" />
        <span className="text-foreground">{productData.name}</span>
      </nav>
      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery images={productData.images} />
        <ProductInfo product={productData} />
      </div>

      <Separator className="my-8" />

      <Tabs defaultValue="description" className="space-y-4">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-4">
          <h2 className="text-2xl font-bold">Product Description</h2>
          <p className="text-muted-foreground">{productData.description}</p>
        </TabsContent>

        <TabsContent value="features">
          <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
          <ul className="grid gap-2">
            {productData.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="specifications">
          <h2 className="mb-4 text-2xl font-bold">Technical Specifications</h2>
          <dl className="grid gap-2">
            {Object.entries(productData.specifications).map(([key, value]) => (
              <div key={key} className="grid grid-cols-2 py-2">
                <dt className="font-medium text-muted-foreground">{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </TabsContent>
      </Tabs>
    </div>
  );
}
