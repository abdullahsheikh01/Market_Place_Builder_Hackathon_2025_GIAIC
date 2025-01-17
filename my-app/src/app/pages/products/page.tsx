import ProductSectionComp from "@/app/components/ProductSection";
import { ProductSection3 } from "../../../../productsData";
import { ProductSection4 } from "../../../../productsData";
import { ProductSection5 } from "../../../../productsData";
import ProductsHero from "@/app/components/products_hero/page";
const Products = () => {
  return (
    <div>
        <div className="pl-[15.625%] pr-[15.6%] flex flex-col mt-[57px]">
      <h2 className="font-inter font-semibold text-[32px] text-[#272343]">All Products</h2>
      <div className="flex flex-col gap-20">
        <ProductSectionComp products={ProductSection3}/>
        <ProductSectionComp products={ProductSection4}/>
        <ProductSectionComp products={ProductSection5}/>
      </div>
    </div>
    <ProductsHero/>
    </div>
  )
}

export default Products
