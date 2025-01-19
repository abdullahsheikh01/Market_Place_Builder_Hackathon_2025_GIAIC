"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ProductSectionComp, { Product } from "../../productSection2";
import { useParams, useSearchParams } from "next/navigation";

const CategoryItem = () => {
    const {id} = useParams();
    console.log(id);
    const i = useSearchParams();
    const param = i.get("category")
    async function getData() {
        const resp = await axios.get(`/api/fetch/categoryItem/${id}`);
        setData(resp.data);
        console.log(resp.data)
        }
      const [data,setData] = useState<Product[]>([])
      useEffect(()=>{
        getData();
      })
  return (
    <div className='mt-[73px] px-[15.625%]'>
      <div className='flex justify-center'>
        <h1 className='font-inter font-bold text-[60px]'>
         {param}s
        </h1>
      </div>
      <div className='mt-[73px] grid  mb-[134px]'>
        <ProductSectionComp products={data} />
      </div>
    </div>
  )
}

export default CategoryItem
