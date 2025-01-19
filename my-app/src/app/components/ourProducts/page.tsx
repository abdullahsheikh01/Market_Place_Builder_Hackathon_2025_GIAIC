"use client";
import { useEffect, useState } from "react";
import ProductSectionComp, { Product } from "../productSection2";
import axios from "axios";
// import { getData } from "../featuredProducts/page";
const OurProducts = ()=> {
  const [data,setData] = useState<Product[]>([]);
  async function getData() {
    const resp = await axios.get("/api/fetch/ourProducts");
    setData(resp.data);
    }
  useEffect(()=>{
      getData()
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