import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../../types/products";

import ProductDetails from "@/components/ProductDetails";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProducts(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            _type,
            name,
            price,
            description,
            stockLevel,
            discountPercentage,
            isFeaturedProduct,
            image,
            }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProducts(slug);

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
