import Image from "next/image";

const ShopHero = () => {
  return (
    <div className="bg-neutral-200 px-[8rem] rounded-lg h-[400px] grid grid-cols-4 items-end justify-center">
      <h1 className="text-4xl font-bold uppercase text-neutral-950 col-span-2 self-center">
        Compra antes del 30 de agosto y recibe un 10% de descuento en tu primera
        compra. 🎁
      </h1>
      <Image src="/model.png" alt="Shop" width={200} height={200} />
      <Image src="/modelright.png" alt="Shop" width={400} height={400} />
    </div>
  );
};
export default ShopHero;
