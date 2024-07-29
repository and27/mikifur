import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { bebasNeue } from "../layout";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const ProductCard = (product: ProductCardProps) => {
  return (
    <div className="relative bg-neutral-100 rounded-3xl h-[500px]">
      <Image
        src={product.image}
        alt={product.name}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-3xl"
      />
      <h3 className="absolute bg-white uppercase bottom-2 mx-2 px-8 py-5 text-neutral-950 rounded-3xl text-4xl font-bold">
        {product.name}
      </h3>
      <p className="absolute top-3 left-3 px-5 py-3 bg-white text-neutral-950 rounded-full">
        {product.category}
      </p>
      <p
        className={`absolute top-3 right-3 px-5 py-2 bg-white text-neutral-950 rounded-full 
        text-2xl font-bold ${bebasNeue.className} `}
      >
        {product.price}
      </p>
    </div>
  );
};

export default ProductCard;
