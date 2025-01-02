import ProductCard from "@/components/ProductCard";
import ShopHero from "@/components/ShopHero";
import products from "@/data/products";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  preload: false,
  weight: "400",
});

const filters = [
  "All",
  "Hoodies",
  "Sacos",
  "Camisetas",
  "Pantalones",
  "Gorras",
];

const Shop = () => {
  return (
    <div className="">
      <ShopHero />
      <div className="py-[3rem]">
        <h2 className="text-5xl font-bold mt-8 mb-6">Our collection</h2>
        <div className="flex gap-4 mb-4">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 border-2 border-white text-neutral-200 rounded-full 
           text-3xl font-bold ${bebasNeue.className} `}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Shop;
