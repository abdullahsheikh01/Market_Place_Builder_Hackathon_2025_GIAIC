"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { Product } from "@/app/components/productSection2";
import { addToCart } from "@/app/features/cartSlice";
import { useDispatch } from "react-redux";
import FeaturedProducts from "./featuredProducts/page";
import Loading from "./loading/page";
const ProductsComp = ( params :  { slug: string } ) => {
    const [data,setData] = useState<Product|null>();
        const dispatch = useDispatch();
        async function getData(){
        const query = `*[_type=="product"&&id=="${params.slug}"]{
          title,image,description,price,priceWithoutDiscount,id
          }[0]`;
          const dataa= await client.fetch(query);
          setData(dataa)
        }
        const img = data?urlFor(data.image).url():"";
        useEffect(
          ()=>{
              getData()
          },[]
        )
          function handleAddToCart(param:Product) {
            dispatch(
              addToCart({
                title:param.title,
                id:param.id,
                image:param.image,
                quantity:1,
                price:param.price})
            )
          }
        return (
          <div>
            {
              data?<div>
              <div className="pl-[208px] flex  gap-[88px] exsm:gap-[22px] pr-[268px] 2xl:pl-[208px] xl:pl-[179px] lg:pl-[152px] md:pl-[108px] sm:pl-[92px] exsm:pl-[35px] exsm:mt-3
              2xl:pr-[268px] xl:pr-[231px] lg:pr-[195px] md:pr-[140px] sm:pr-[118px] exsm:pr-[45px] md:flex-col lg:pt-6 pt-6
              exsm:flex-col
">
                <Image
                  src={img}
                  alt={data.title}
                  height={500}
                  width={540}
                  className="md:h-[350px] md:w-[378px] lg:h-[350px] lg:w-[378px] exsm:h-[250px] exsm:w-[270px]"
                />
                <div className="flex-col">
                  <div className="h-[246px] border-b-[1px] border-b-[#D9D9D9] md:h-[170px] lg:h-[170px] exsm:h-[150px]">
                    <h1 className="font-inter text-6xl font-bold text-[#272343] exsm:text-[50px]">
                      {data.title}
                    </h1>
                    <button
                      className="w-[115.2px] h-9 bg-[#029FAE] rounded-[100px] font-inter font-semibold text-base text-white mt-9"
                    >
                      ${data.price}
                    </button>
                    <del>{data.priceWithoutDiscount?`$${data.priceWithoutDiscount}`:""}</del>
                  </div>
                  <div className="mt-[30px]">
                    <p className="font-inter text-[17px] opacity-60 text-[rgb(39,35,67)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                      Nullam tincidunt erat enim. Lorem ipsum dolor <br /> sit amet,
                      consectetur adipiscing
                    </p>
                    <button
                      className="w-[169.6px] h-[50.4px] bg-[#029FAE] rounded-[8px] mt-8 flex items-center justify-center gap-2"
                      onClick={()=>{handleAddToCart(data)}}
                    >
                      <Image src="/buy2.svg" alt="Cart" height={21} width={21} />
                      <p className="font-inter text-[17px] text-white">Add to Cart</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-52 mb-6">
              <FeaturedProducts />
              </div>
            </div>:<div className="flex justify-center">
            {/* <h1 className="font-bold text-[40px] font-inter text-center">An Unknown Error Occurred</h1> */}
            <Loading/>
            </div>
            }
          </div>
  )
}

export default ProductsComp
