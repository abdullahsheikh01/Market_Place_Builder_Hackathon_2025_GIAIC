"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { urlFor } from "@/sanity/lib/image";
const Categories = () => {
  interface Category{
    id: string;
    title: string;
    image: {
      _type: string;
      asset: {
        _ref: string;
      };
    },
    _id:string
  }
  const [categories,setCategories] = useState<Category[]>([]);
  async function getData(path:string,set:boolean){
    const resp= await axios.get(path);
    if(set){ 
    setCategories(resp.data);
    }
    else{
      return resp.data.length;
    }
  }
  useEffect(
    ()=>{
      getData("/api/fetch/category",true);
    }
  )
    return (
      <div className='flex flex-col mt-[140.5px] pl-[15.625%] pr-[15.625%] gap-10 2xl:px-[15.625%] xl:px-[206px] lg:px-[175px] md:px-[100px] sm:px-[106px] exsm:px-[40px]'>
        <h3 className='font-inter font-semibold text-[32px]'>
        Categories</h3>
        <div className="grid grid-cols-3 gap-3 xl:gap-[200px] lg:grid-cols-2 md:grid-cols-2 md:gap-[100px] sm:grid-cols-2 sm:gap-[100px] exsm:flex exsm:flex-col exsm:items-center exsm:gap-6">
        {
            categories.map((category:Category,index:number)=>{
              const imgUrl = urlFor(category.image);
                return(
                    <div key={index}>
                        <Link href={`/components/categoryItem/${category._id}?category=${category.title}`}>
                        <div className="h-[339.2px] w-[339.2px] flex bg-cover
                    rounded-[14px] flex-col justify-end sm:h-[250px] sm:w-[250px] exsm:h-[250px] exsm:w-[250px]"
                        style={{backgroundImage:`url(${imgUrl})`}}>
                            <div className="flex w-full h-[68px] bg-[rgba(0,0,0,0.7)] 
                            rounded-b-[14px]">
                            <div className="flex flex-col gap-1 m-3">
                            <p className="text-white font-inter
                             text-[20px] font-semibold">{category.title}</p>
                            <p className="font-inter text-white 
                            text-[14px]"></p>
                            </div>
                            </div>
                    </div>
                    </Link>
                    </div>
                )
            })
        }
        </div>
      </div>
    )
  }
  
export default Categories;
  