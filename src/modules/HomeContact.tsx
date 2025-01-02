"use client";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  preload: false,
  weight: "400",
});

const HomeContact = () => {
  return (
    <div className="grid grid-cols-12 my-[4rem] py-[4rem]">
      <motion.div
        className="col-span-5 bg-amber-400 rounded-full aspect-square flex items-center
       justify-center max-w-[280px] mx-auto"
        initial={{ rotate: 0 }}
        whileInView={{ rotate: [0, 5, -5, 0, 5, -5, 0] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <Image src="/catphone.png" alt="Contact" width={300} height={300} />
      </motion.div>
      <div className="flex flex-col gap-4 col-span-7">
        <h2 className="text-5xl font-bold">
          Tu apoyo es el primer paso hacia un mundo mejor para nuestros
          peluditos. ¡Contáctanos y únete a nuestra causa!
        </h2>
        <p>
          Si quieres donar, auspiciar o colaborar con nosotros, no dudes en
          contactarnos. También puedes escribirnos si tienes alguna duda o
        </p>
        <motion.button
          className={`border border-white text-white px-10 pt-3 pb-2 mt-2 
          ${bebasNeue.className} rounded-full text-3xl leading-none`}
          whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
          whileTap={{ scale: 0.95 }}
        >
          Contáctanos
        </motion.button>
      </div>
    </div>
  );
};

export default HomeContact;
