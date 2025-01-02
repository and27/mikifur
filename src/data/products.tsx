export interface Iproduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  category: string;
}

const products: Iproduct[] = [
  {
    id: "1",
    name: "Sudadera con Capucha Gatito Cósmico",
    description:
      "Sudadera con capucha de algodón suave con un diseño galáctico de gatito.",
    price: 45,
    image: "/clothes/hoodie.png",
    category: "sudaderas",
  },
  {
    id: "2",
    name: "Sudadera con Capucha Gatito Estelar",
    description:
      "Sudadera con capucha con estampado de un gatito entre las estrellas.",
    price: 50,
    image: "/clothes/hoodie.png",
    category: "sudaderas",
  },
  {
    id: "3",
    name: "Sudadera con Capucha Gatito Lunar",
    description: "Sudadera con capucha con la imagen de un gatito en la luna.",
    price: 42,
    image: "/clothes/hoodie.png",
    category: "sudaderas",
  },
  {
    id: "4",
    name: "Camiseta Gatito Aventurero",
    description: "Camiseta de algodón con un gatito listo para la aventura.",
    price: 20,
    image: "/clothes/tshirt.png",
    category: "camisetas",
  },
  {
    id: "5",
    name: "Camiseta Gatito Explorador",
    description:
      "Camiseta con un diseño minimalista de un gatito explorando el mundo.",
    price: 22,
    image: "/clothes/tshirt.png",
    category: "camisetas",
  },
  {
    id: "6",
    name: "Camiseta Gatito Relajado",
    description:
      "Camiseta de algodón suave con un gatito disfrutando de un día tranquilo.",
    price: 25,
    image: "/clothes/tshirt.png",
    category: "camisetas",
  },
  {
    id: "7",
    name: "Camiseta Gatito Urbano",
    description: "Camiseta con un gatito con estilo callejero.",
    price: 28,
    image: "/clothes/tshirt.png",
    category: "camisetas",
  },
  {
    id: "8",
    name: "Taza Gatita Coqueta",
    description: "Taza de cerámica con una gatita con una mirada pícara.",
    price: 12,
    image: "/clothes/girl.png",
    category: "tazas",
  },
  {
    id: "9",
    name: "Taza Gatita Elegante",
    description: "Taza de cerámica con una gatita con un lazo.",
    price: 15,
    image: "/clothes/girl.png",
    category: "tazas",
  },
  {
    id: "10",
    name: "Taza Gatita Soñadora",
    description: "Taza de cerámica con una gatita mirando las estrellas.",
    price: 18,
    image: "/clothes/girl.png",
    category: "tazas",
  },
  {
    id: "11",
    name: "Taza Gatita Divertida",
    description: "Taza de cerámica con una gatita jugando.",
    price: 14,
    image: "/clothes/girl.png",
    category: "tazas",
  },
];

export default products;
