import ProductCard from "../components/ProductCard";

const homeProducts = [
  {
    id: 1,
    name: "Camiseta de algodón orgánico",
    price: "$100,00",
    category: "Hoodies",
    image: "/3.png",
  },
  {
    id: 2,
    name: "Saco de lana 100% unisex",
    price: "$30,00",
    category: "Sacos",
    image: "/4.png",
  },
  {
    id: 3,
    name: "Pantalón de mezclilla",
    price: "$20,00",
    category: "Camisetas",
    image: "/5.png",
  },
];

const HomeProducts = () => {
  return (
    <div className="py-[3rem]">
      <h2 className="text-5xl font-bold mt-8 mb-6">Our collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
