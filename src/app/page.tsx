import HomeHero from "../modules/HomeHero";
import HomeProducts from "../modules/HomeProducts";
import HomeBenefits from "../modules/HomeBenefits";
import HomeContact from "@/modules/HomeContact";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeProducts />
      <HomeBenefits />
      <HomeContact />
    </main>
  );
}
