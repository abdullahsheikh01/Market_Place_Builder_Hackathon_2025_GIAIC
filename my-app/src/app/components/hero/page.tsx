import Image from "next/image"
const Hero = () => {
    return (
        <div className="pl-[15.625%] pr-[15.6%]  xl:pl-[206px] lg:pl-[175px] md:pl-[125px] sm:pl-[106px] exsm:pl-[40px] xl:pr-[205px] lg:pr-[173px]
        md:pr-[122px] sm:pr-[102px] exsm:pr-[35px]">
            <div className="bg-[#F0F2F3] h-auto w-full rounded-b-[48px]
      flex items-center justify-between pb-[284px] sm:pb-[40px] exsm:pb-[40px] 2xl:h-[850px]
      ">
                <div className="ml-[50px] leading-[66px] exsm:leading-0 sm:leading-0 mt-[239px] exsm:mt-0 sm:mt-0">
                    <h2 className="font-inter text-[14px] text-[#272343] 
             tracking-[2]">
                        Welcome to chairy
                    </h2>
                    <h1 className="font-inter font-bold 2xl:text-[60px] xl:text-[50px] md:text-[40px] 
                    lg:text-5xl sm:text-[30px] exsm:text-[40px]
                    text-[#272343] mt-6 mb-[49px] exsm:mt-2 ">
                        Best Furniture<br />Collection for your interior.
                    </h1>
                    <button className="flex text-white font-inter text-base 
            font-semibold h-[52px] w-[160px] px-[20px] py-[11px] bg-[#029FAE]
            items-center gap-4 rounded-[8px]">
                        <p>Shop Now</p>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="mr-[10px] flex-shrink-0">
                    <Image src="/chair.png" height={364} width={454} layout="responsive"
                    alt="chair.png" className="object-contain exsm:hidden mt-[239px] sm:hidden"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
