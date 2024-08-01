import BenefitsCard from "../components/BenefitsCard";

const HomeBenefits = () => {
  return (
    <div className="py-[3rem] sm:pr-[12rem]">
      <h2 className="text-5xl font-bold mt-8 mb-6">Why buy from us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <BenefitsCard
          className="bg-amber-400 col-span-2"
          title="Contribuimos a salvar vidas de animales"
          description="Al adquirir nuestros productos, no solo obtienes artículos de alta calidad, 
          sino que también contribuyes directamente al bienestar de los animales. "
        />
        <BenefitsCard
          className="bg-neutral-100"
          title="Calidad y Diseño Exclusivo"
          description="Nuestros productos, desde camisetas hasta hoodies, 
          están diseñados con frases motivacionales poderosas que inspiran confianza y empoderamiento. "
        />
        <BenefitsCard
          className="bg-neutral-100"
          title="Transparencia y Compromiso"
          description="Valoramos tu confianza y nos esforzamos por ser transparentes en todo lo que hacemos.
          Tu compra no solo es una elección de estilo, sino un acto de compromiso con un cambio positivo."
        />
      </div>
    </div>
  );
};

export default HomeBenefits;
