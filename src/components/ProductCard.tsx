"use client";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { Iproduct } from "@/data/products";
import Link from "next/link";

const bebasNeue = Bebas_Neue({
  preload: false,
  weight: "400",
});

const ProductCard = (product: Iproduct) => {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        className="relative bg-neutral-100 rounded-3xl h-[500px]"
      >
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
      </motion.div>
    </Link>
  );
};

export default ProductCard;
