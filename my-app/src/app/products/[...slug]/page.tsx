import ProductsComp from "@/app/components/ProductsComp";
const Products = async(
  {params}:{params:Promise<{slug:string}>}
) => {
  const slugg = (await params).slug
 return( <div>
  <ProductsComp slug={slugg}/>
  </div>
);
};

export default Products;