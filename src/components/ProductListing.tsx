import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Product } from "../../types/products";
import Link from "next/link";

const ProductListing = ({ products }: { products: Product }) => {
  return (
    <>
      <div className=" bg-white mt-8  border rounded-lg shadow-md p-4 hover:shadow-lg  flex flex-col items-center overflow-hidden  ">
        <Link href={`/pages/product/${products.slug.current}`}>
          {products.image && (
            <Image
              src={urlFor(products.image).url()}
              alt={products.name}
              width={300}
              height={300}
              className="h-[200px] w-[300px] object-fill transition duration-200 hover:scale-105"
            />
          )}
          <h1 className="text-lg font-medium mt-4 text-center ">
            {products.name}
          </h1>
          <p className="text-gray-400 mt-2 text-center">${products.price}</p>
        </Link>
      </div>
    </>
  );
};

export default ProductListing;
