import Image from "next/image";
import { popularProducts } from "../../../../popularProducts";
import { popularProduct } from "../../../../popularProducts";
import Link from "next/link";
const PopularStyles = () => {
  return (
    <div className="flex gap-0 px-[15.625%] mt-[229px]">
      <div className="flex justify-center">
        <p className="popular_text font-poppins text-[34px]">
          Explore new and popular styles</p>
      </div>
      <div className="grid grid-cols-2">
      <Link href="/products/popularChair1.svg">
      <Image src="/popularChair1.svg"
      alt="Orange Chair"
      height={518.4} width={518.4}
      className="rounded-none"
      />
      </Link>
      <div className="grid grid-cols-2 grid-rows-2">
        {
          popularProducts.map(
            (product:popularProduct,index:number)=>{
              return(
                <Link href={`/products/${product.imgUrl}`}
                key={index}>
                <Image src={product.imgUrl}
                alt={product.title}
                width={250}
                height={250}
                />
                </Link>
              )
            }
          )
        }
      </div>
      </div>
    </div>
  )
}

export default PopularStyles;
