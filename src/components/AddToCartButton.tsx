import { useCart } from "react-use-cart";
import { Product } from "../types/product";
interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  return (
    <button
      key={product.id}
      onClick={() => addItem(product)}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button>
  );
}
