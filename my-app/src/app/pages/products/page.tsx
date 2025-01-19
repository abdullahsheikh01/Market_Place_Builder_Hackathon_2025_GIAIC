"use client";
// import { getData } from "@/app/components/featuredProducts/page";
import ProductSectionComp, { Product } from "@/app/components/productSection2";
import ProductsHero from "@/app/components/products_hero/page";
import axios from "axios";
import { useEffect, useState } from "react";
const Products =()=> {
  const [data,setData] = useState<Product[]>([]);
  async function getData() {
    const resp = await axios.get("/api/fetch/allProducts");
    setData(resp.data);
    }
  useEffect(()=>{
      getData()
    })
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