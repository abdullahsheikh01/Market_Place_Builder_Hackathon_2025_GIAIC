import ProductSectionComp from "@/app/components/productSection2";
import ProductsHero from "@/app/components/products_hero/page";
const Products = async()=> {
  const {baseUrl}=process.env
  const resp = await fetch(`${baseUrl}/api/fetch/allProducts`);
  const data = await resp.json();
  return (
    <div>
        <div className="pl-[15.625%] pr-[15.6%] flex flex-col mt-[57px]">
      <h2 className="font-inter font-semibold text-[32px] text-[#272343]">All Products</h2>
      <div className="flex flex-col gap-20">
        <ProductSectionComp products={data}/>
      </div>
    </div>
    <ProductsHero/>
    </div>
  )
}

export default Products;