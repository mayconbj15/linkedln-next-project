import ProductsList from "@/components/ProductsList";
import { products } from "@/data/product-data";

export default function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <ProductsList products={products}></ProductsList>
    </>
  );
}
