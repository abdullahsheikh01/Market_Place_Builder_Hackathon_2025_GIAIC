import ProductsComp from "@/app/components/products_comp/page";
const Products = async(
  {params}:{params:Promise<{slug:string}>}
)  => {
  const slugg = (await params).slug
  return(
    <ProductsComp params={{slug:slugg}}/>
  )
};
export default Products;