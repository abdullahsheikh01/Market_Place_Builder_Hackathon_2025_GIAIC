import ProductSectionComp from "../productSection2";

const OurProducts = async ()=> {
  const {baseUrl}=process.env
  const resp = await fetch(`${baseUrl}/api/fetch/ourProducts`);
  const data = await resp.json();
  return (
    <div className='mt-[173px] px-[15.625%]'>
      <div className='flex justify-center'>
        <h3 className='font-inter font-semibold text-[32px]'>
          Our Products
        </h3>
      </div>
      <div className='mt-[73px] grid  mb-[134px]'>
        <ProductSectionComp products={data} />
      </div>
    </div>
  );
};

export default OurProducts;