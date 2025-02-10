import ProductsList from "@/components/ProductsList";
import { products } from "@/data/product-data";

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <ProductsList products={products} />
    </div>
  );
}
