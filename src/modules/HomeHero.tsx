import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  preload: false,
  weight: "400",
});

const HomeHero = () => {
  return (
    <div className="bg-amber-400 relative rounded-3xl h-[calc(100vh-150px)] flex flex-col justify-center mb-[50px]">
      <div className="flex flex-col gap-4 text-lg text-center items-center max-w-2xl mx-auto">
        <p className="text-neutral-900 uppercase tracking-wider">
          Live your fashion
        </p>
        <h1 className="text-3xl sm:text-6xl font-bold text-neutral-950">
          Viste con Inspiración
        </h1>
        <p className="text-neutral-950">
          Explora nuestra colección exclusiva de camisetas, hoodies y gorras con
          mensajes poderosos que reflejan tu fuerza interior. En Mikifur, cada
          prenda está diseñada para motivar y marcar la diferencia, con un
          porcentaje de cada venta destinado a mejorar la vida de nuestros
          amigos peludos.
        </p>
        <button
          className={`bg-black text-white px-10 pt-3 pb-2 mt-2 
          ${bebasNeue.className} rounded-full text-3xl leading-none`}
        >
          Compra ahora
        </button>
      </div>
      <Image
        src="/catsit.png"
        width={260}
        height={260}
        alt="Hero Image"
        className="rounded-lg absolute bottom-0 -left-10"
      />
      <Image
        src="/catpaw.png"
        width={120}
        height={120}
        alt="Hero Image"
        className="rounded-lg absolute"
        style={{ bottom: 0, right: 0 }}
      />
      <Image
        src="/cattail.png"
        width={220}
        height={220}
        alt="Hero Image"
        className="rounded-lg absolute "
        style={{ top: -20, left: 0 }}
      />
      <Image
        src="/catdown.png"
        width={200}
        height={200}
        alt="Hero Image"
        className="rounded-lg absolute"
        style={{ top: -32, right: -10 }}
      />
    </div>
  );
};

export default HomeHero;
