import Hero from "@/app/components/hero/page";
import CompaniesLogos from "@/app/components/companiesLogos/page";
import FeaturedProducts from "@/app/components/featuredProducts/page";
import Categories from "@/app/components/categories/page";
import PopularStyles from "@/app/components/popularStyles/page";
import OurProducts from "@/app/components/ourProducts/page";
export default function Home(){
  return (
    <div>
      <Hero/>
      <CompaniesLogos/>
      <FeaturedProducts/>
      <Categories/>
      <PopularStyles/>
      <div>
      <OurProducts/>
      <div className="h-[0.5px] w-full bg-[#F0F2F3]"/>
      </div>
    </div>
  );
}
