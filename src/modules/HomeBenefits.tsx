"use client";
import Image from "next/image";
import BenefitsCard from "../components/BenefitsCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const benefits = [
  {
    title: "Contribuimos a salvar vidas de animales",
    description:
      "Al adquirir nuestros productos, no solo obtienes artículos de alta calidad, sino que también contribuyes directamente al bienestar de los animales.",
  },
  {
    title: "Calidad y Diseño Exclusivo",
    description:
      "Nuestros productos, desde camisetas hasta hoodies, están diseñados con frases motivacionales poderosas que inspiran confianza y empoderamiento.",
  },
  {
    title: "Transparencia y Compromiso",
    description:
      "Valoramos tu confianza y nos esforzamos por ser transparentes en todo lo que hacemos. Tu compra no solo es una elección de estilo, sino un acto de compromiso con un cambio positivo.",
  },
];

const HomeBenefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const benefitContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.6,
        delay: 0.3,
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
    <div className="py-[3rem] sm:pr-[12rem]">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mt-8 mb-6"
      >
        Why buy from us?
      </motion.h2>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
        variants={benefitContainer}
        initial="hidden"
        animate={controls}
      >
        {benefits.map((benefit, index) => {
          const className =
            index === 0 ? "bg-amber-400 col-span-2" : "bg-neutral-100";

          return (
            <BenefitsCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              className={className}
            />
          );
        })}
        <div
          className="bg-amber-400 aspect-square flex items-center justify-center
         rounded-full w-[100px] h-[100px] absolute top-0 right-0"
        >
          <Image src="/paw.svg" alt="Cat Paw" width={60} height={60} />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeBenefits;
