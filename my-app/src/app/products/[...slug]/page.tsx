import ProductsComp from "@/app/components/products_comp/page";
const Products = async(
  {params}:{params:Promise<{slug:string}>}
)  => {
  const slug = (await params).slug
  return(
    <ProductsComp slug={slug}/>
  )
};
export default Products;