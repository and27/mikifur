import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  preload: false,
  weight: "400",
});

const HomeContact = () => {
  return (
    <div
      className="grid grid-cols-12 gap-10 text-lg 
    items-center my-[4rem] py-[4rem] w-full h-full"
    >
      <div className="col-span-7 flex flex-col gap-4">
        <h2 className="text-5xl font-bold">Contáctanos</h2>
        <p>
          Si quieres donar, auspiciar o colaborar con nosotros, no dudes en
          contactarnos. También puedes escribirnos si tienes alguna duda o
        </p>
        <button
          className={`border border-white text-white px-10 pt-3 pb-2 mt-2 
          ${bebasNeue.className} rounded-full text-3xl leading-none`}
        >
          Compra ahora
        </button>
      </div>
      <div className="col-span-5 bg-neutral-950 rounded-full aspect-square flex items-center justify-center">
        <Image src="/catphone.png" alt="Contact" width={300} height={300} />
      </div>
    </div>
  );
};

export default HomeContact;
