import { Products } from "../../../productsData";
import Image from "next/image";
import Link from "next/link";
const ProductSectionComp = (prop:{
    products:Products[],
}) => {
    return (
    <div className="grid grid-cols-4  mt-10  gap-8 sm:gap-20 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 exsm:grid-cols-1">
      {
        prop.products.map(
            (product:Products,index:number)=>{
                const labelContent= product.label?<div className={`h-[26px]
                    ${product.label=="New"?"bg-[#01AD5A] w-[49px]"
                    :"bg-[#F5813F] w-[54px]"}
                    rounded-[4px] flex items-center justify-center
                    mt-5 ml-5 font-inter font-medium text-[13px] text-white`}>
                        <p>{product.label}</p>
                    </div>:<></>;
                const oldPriceSpan = product.oldPrice?<span 
                className="font-inter text-[14px]
                 text-[#9A9CAA]">
                    {product.oldPrice}</span>:<></>
                return(
                    <div key={index}>
                        <Link href={`/products/${product.imgUrl}`}>
                        <div key={index} className="flex flex-col">
                        <div className="h-[249.6px] w-[249.6px] flex bg-cover"
                        style={{backgroundImage:`url(${product.imgUrl})`}}>
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
                                    {product.price} {oldPriceSpan}</p>
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