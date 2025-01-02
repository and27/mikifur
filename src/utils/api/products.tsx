import products, { Iproduct } from "@/data/products";

export const getProducs = () => {
  return products;
};

export const getProductById = (id: string): Iproduct => {
  const product: Iproduct = products.filter((product) => product.id === id)[0];
  return product;
};
