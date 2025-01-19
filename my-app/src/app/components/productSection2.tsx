import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
export interface Product {
    image: {
      _type: string;
      asset: {
        _ref: string;
      };
    };
    title: string;
    priceWithoutDiscount: number | null;
    price: number;
    id: string;
    badge: string | null;
  }
const ProductSectionComp = (prop:{
    products:Product[],
}) => {
    return (
    <div className="grid grid-cols-4  mt-10  gap-8 sm:gap-20 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 exsm:grid-cols-1">
      {
        prop.products.map(
            (product:Product,index:number)=>{
                const labelContent= product.badge?<div className={`h-[26px]
                    ${product.badge=="New"?"bg-[#01AD5A] w-[49px]"
                    :"bg-[#F5813F] w-[54px]"}
                    rounded-[4px] flex items-center justify-center
                    mt-5 ml-5 font-inter font-medium text-[13px] text-white`}>
                        <p>{product.badge}</p>
                    </div>:<></>;
                const oldPriceSpan = product.priceWithoutDiscount?<span 
                className="font-inter text-[14px]
                 text-[#9A9CAA]">
                    ${product.priceWithoutDiscount}</span>:<></>
                    // console.log(product)
                return(
                    <div key={index}>
                        <Link href={`/products/${product.id}`}>
                        <div key={index} className="flex flex-col">
                        <div className="h-[249.6px] w-[249.6px] flex bg-cover"
                        style={{backgroundImage:`url(${urlFor(product.image).url()})`}}>
                            {labelContent}
                        </div>
                        <div className="w-[249.6px] h-[51px] flex 
                        items-center mt-[14px] justify-between">
                            <div>
                                <p 
                                className={`font-inter text-base 
                                    ${index==0?"text-[#007580]":"text-[#272343]"}`}
                                >{product.title}</p>
                                <p className="font-inter font-semibold text-[18px]">
                                    ${product.price} {oldPriceSpan}</p>
                            </div>
                            <div className={`flex h-[44px] w-[44px]
                              rounded-[8px] items-center
                              justify-center
                               ${index==0?"bg-[#029FAE]":"bg-[#F0F2F3]"}`}>
                                <Image src={`${index==0?"/buy2.svg":"/buy1.svg"}`} alt=""
                                height={24} width={24} 
                                /> 
                            </div>
                        </div>
                    </div>
                        </Link>
                    </div>
                )
            }
        )
      }
    </div>
  )
};
export default ProductSectionComp;