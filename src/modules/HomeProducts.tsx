"use client";
import { useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { motion, useAnimation, useInView } from "framer-motion";
import products from "@/data/products";

const HomeProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const productContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.8,
        staggerChildren: 0.5,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [controls, isInView]);

  return (
    <div className="py-[3rem]">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mt-8 mb-6"
      >
        Our collection
      </motion.h2>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={productContainer}
        initial="hidden"
        animate={controls}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </motion.div>
    </div>
  );
};

export default HomeProducts;
