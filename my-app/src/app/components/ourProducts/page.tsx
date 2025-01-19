"use client";
import { useEffect, useState } from "react";
import ProductSectionComp, { Product } from "../productSection2";
import { getData } from "../featuredProducts/page";
const OurProducts = ()=> {
  const [data,setData] = useState<Product[]>([]);
  useEffect(()=>{
        getData("/api/fetch/ourProducts",setData)
      })
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