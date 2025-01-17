import { ProductSection6 } from "../../../../productsData";
import Image from "next/image";
const ProductsHero = () => {
  return (
    <div className="h-[754px] w-full bg-[#F0F2F3] mt-[173px] px-[15.625%] flex-col ">
      <div className="flex justify-center pt-[100px]">
      <div>
        <div className="flex justify-center">
        <h1 className="flex text-[50px] font-medium capitalize font-roboto">
        Or subscribe to the newsletter</h1>
        </div>
        <div className="flex mt-[74px] gap-[25.98px]">
        <input type="text" className="w-[514px] bg-inherit border-b-[2px]
         border-black outline-none placeholder:font-roboto placeholder:font-semibold
         placeholder:text-base :font-roboto font-semibold
         text-base"
         placeholder="Email Address..."
         />
        <button className="border-b-[2px]
         border-[#1E2832] w-[72.8px] text-center font-sans text-base
         text-[#1E2832]">
          SUBMIT
        </button>
        </div>
      </div>
      </div>
      <div>
        <div className="flex justify-center pt-[70px]">
        <div>
        <h1 className="flex text-[50px] font-medium capitalize font-roboto">
        Follow products and discounts on Instagram</h1>
        </div>
        </div>
        <div className="flex justify-between mt-20">
          {
            ProductSection6.map(
              (img:{imgUrl:string,id:number, title:string})=>{
                return(
                  <Image key={img.id} src={img.imgUrl}
                  width={148.8} height={148.8} alt={img.title}
                  />
                )
              }
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsHero
