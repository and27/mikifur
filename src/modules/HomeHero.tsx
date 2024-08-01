import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import Paw from "../../public/paw.svg";

const bebasNeue = Bebas_Neue({
  preload: false,
  weight: "400",
});

const HomeHero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgb(223, 163, 21) 0%, #fbbf24 100%)",
      }}
      className="bg-amber-400 relative rounded-3xl h-[calc(100vh-150px)] flex flex-col justify-center mb-[50px]"
    >
      <div className="flex flex-col gap-4 text-lg text-center items-center max-w-2xl mx-auto">
        {/* <p className="text-neutral-900 uppercase tracking-wider">
          Haz la Diferencia
        </p> */}
        <Image src={Paw} alt="Paw" width={50} height={50} />
        <h1 className="text-3xl sm:text-6xl font-bold text-neutral-950">
          Viste con Corazón: <br /> Moda que Cambia Vidas
        </h1>
        <p className="text-neutral-950">
          Descubre nuestra colección única de camisetas, hoodies y gorras que
          reflejan tu fuerza y amor. En Mikifur, cada compra no solo te viste
          bien, sino que también ayuda a mejorar la vida de nuestros amigos
          peludos.
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
