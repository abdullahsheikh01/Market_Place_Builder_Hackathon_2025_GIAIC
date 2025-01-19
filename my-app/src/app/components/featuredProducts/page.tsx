"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ProductSectionComp, { Product } from "../productSection2";
import axios from"axios";
const FeaturedProducts = () => {
  async function getData() {
    const resp = await axios.get("/api/fetch/featured");
    setData(resp.data)
    }
  const [data,setData] = useState<Product[]>([])
  useEffect(()=>{
    getData();
  })
  return (
    <div className='flex flex-col mt-6 pl-[15.625%] pr-[15.625%] gap-10'>
      <h3 className='font-inter font-semibold text-[32px]'>
        Featured Products</h3>
        <ProductSectionComp products={data}/>
    </div>
  )
}
export default FeaturedProducts;
