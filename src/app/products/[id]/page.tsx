"use client";
import { Iproduct } from "@/data/products";
import { getProductById } from "@/utils/api/products";
import { formatPrice } from "@/utils/priceFormat";
import Image from "next/image";
import { useParams } from "next/navigation";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams();
  const product: Iproduct = getProductById(id as string);
  return (
    <>
      <div className="py-[3rem] flex gap-20">
        <Image src={product.image} width="500" height="500" alt="" />
        <div className="pt-3">
          <p
            className={`px-5 py-2 border-2 border-white text-neutral-200 rounded-full 
            inline `}
          >
            {product.category}
          </p>
          <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
          <p className="">{product.description}</p>
          <p>{"★★★★★"}</p>
          <p className="text-5xl font-bold pt-8">
            {formatPrice(product.price)}
          </p>
          <button
            className="mt-8 px-5 py-2 border-2 bg-white text-neutral-900 text-neutral-200 rounded-full 
           text-2xl font-bold inline "
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
