import ProductSectionComp from "../productSection2";
const FeaturedProducts = async() => {
  const {baseUrl}=process.env
  const resp = await fetch(`${baseUrl}/api/fetch/featured`);
  const data = await resp.json();
  console.log(data)
  return (
    <div className='flex flex-col mt-6 pl-[15.625%] pr-[15.625%] gap-10'>
      <h3 className='font-inter font-semibold text-[32px]'>
        Featured Products</h3>
        <ProductSectionComp products={data}/>
    </div>
  )
}

export default FeaturedProducts;
