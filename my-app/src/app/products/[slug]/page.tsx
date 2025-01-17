"use client";
import Image from "next/image";
import { ProductSection7 } from "../../../../productsData";
import Link from "next/link";
import { Params } from "next/dist/server/request/params";
import { useParams } from "next/navigation";
const Products = () => {
  const data : Params = useParams();
  return (
    <div>
      <div className="pl-[208px] flex pt-[132px] gap-[88px] pr-[268px]">
        <Image
          src={`/${data.slug}`}
          alt="Image"
          height={500}
          width={540}
        />
        <div className="flex-col">
          <div className="h-[246px] border-b-[1px] border-b-[#D9D9D9]">
            <h1 className="font-inter text-6xl font-bold text-[#272343]">
              Library Stool Chair
            </h1>
            <button
              className="w-[115.2px] h-9 bg-[#029FAE] rounded-[100px] font-inter font-semibold text-base text-white mt-9"
            >
              $20.00 USD
            </button>
          </div>
          <div className="mt-[30px]">
            <p className="font-inter text-[17px] opacity-60 text-[rgb(39,35,67)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Nullam tincidunt erat enim. Lorem ipsum dolor <br /> sit amet,
              consectetur adipiscing
            </p>
            <button
              className="w-[169.6px] h-[50.4px] bg-[#029FAE] rounded-[8px] mt-8 flex items-center justify-center gap-2"
              
            >
              <Image src="/buy2.svg" alt="Cart" height={21} width={21} />
              <p className="font-inter text-[17px] text-white">Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
      <div className="px-[12.29%] mt-[123px]">
        <div className="flex justify-between">
          <h3 className="font-inter font-bold text-2xl tracking-wide">
            FEATURED PRODUCTS
          </h3>
          <button
            className="font-inter font-bold text-[14px] w-[60px] border-b-[2px] border-b-black"
          >
            View All
          </button>
        </div>
        <div className="mt-[69px] grid grid-cols-5 gap-7 mb-[141px]">
          {ProductSection7.map((product, index) => {
            return (
              <Link
                href={`/products/${product.imgUrl}`}
                className="w-[210.4px] h-[244.8px]"
                key={index}
              >
                <Image
                  src={product.imgUrl}
                  width={210.4}
                  height={210.4}
                  alt={product.title}
                />
                <p className="mt-5 flex justify-between">
                  <span className="font-inter text-base text-[#272343]">
                    {product.title}
                  </span>
                  <span className="font-inter text-[14px] text-black font-bold">
                    $99
                  </span>
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;