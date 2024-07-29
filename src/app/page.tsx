import HomeHero from "./modules/HomeHero";
import HomeProducts from "./modules/HomeProducts";
import HomeBenefits from "./modules/HomeBenefits";
import Navbar from "./modules/Navbar";

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-5 sm:mx-auto ">
      <Navbar />
      <HomeHero />
      <HomeProducts />
      <HomeBenefits />
    </main>
  );
}
