import Image from "next/image";
const AboutUs = () => {
    interface bdDivsDataType{
        title:string,
        imgUrl:string,
        description:string,
        imgAlt:string
    };
    const bdDivsData:bdDivsDataType[] = [
        {
            title:"Next Day as Standard",
            imgUrl:"/deliveryLogo.svg",
            description:"Order before 3pm and get your order the next day as standard",
            imgAlt:"Delivery Icon"
        },
        {
            title:"Made by true artisans",
            imgUrl:"/checkmarkLogo.svg",
            description:"Handmade crafted goods made with real passion and craftmanship",
            imgAlt:"Check Mark Icon"
        },
        {
            title:"Unbeatable prices",
            imgUrl:"/purchaseLogo.svg",
            description:"For our materials and quality you &rsquo;find better prices anywhere",
            imgAlt:"Purchase Icon"
        },
        {
            title:"Recycled Packaging",
            imgUrl:"/plant.svg",
            description:"We use 100% recycled to ensure our footprint is more manageable",
            imgAlt:"Plant Icon"
        }
    ]
  return (
    <div className='2xl:px-[240px] mt-[90px] mb-[93px] xl:px-[206px] lg:px-[175px] md:px-[125px] sm:px-[106px] 
    exsm:px-[40px] exsm:mt-3'>
      <div className='grid grid-cols-2 xl:gap-4 lg:gap-3 md:flex md:justify-center sm:flex sm:justify-center exsm:flex exsm:justify-center'>
        <div className="w-auto h-auto bg-[#007580] pt-[30px] pl-10 pr-16">
            <div>
            <h3 className='text-white font-inter font-bold text-[32px]'>About Us-Comforty</h3>
            <p className='text-white font-inter text-[18px] exsm:mt-3'>
                At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, 
                premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. 
            </p>
            </div>
            <button className='w-[173px] mt-[133px] exsm:mt-8 bg-[rgba(249,249,249,0.15)] flex justify-center items-center mb-[44px] h-[50px]
            font-inter text-base text-white'>View Collection</button>
        </div>
        <div className="w-full md:hidden sm:hidden exsm:hidden">
            <img src="/product1.svg" alt="" className="w-full h-[468px]"/>
        </div>
      </div>
      <div className="mt-[121px] flex flex-col items-center">
        <div className=" font-inter font-semibold text-[32px]">
            <h4>What makes our Brand Different</h4>
        </div>
        <div className="mt-[38px] grid grid-cols-4 gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 exsm:grid-cols-1">
                {
                    bdDivsData.map((bdDiv, index) => {
                        return(
                            <div className="bg-[#F9F9F9] py-10 px-10 h-auto  w-auto text-[#007580] flex flex-col gap-2" key={index}>
                                <Image src={bdDiv.imgUrl} alt={bdDiv.imgAlt} height={20} width={20} 
                                />
                                <h5 className="font-inter text-[20px] ">{bdDiv.title}</h5>
                                <p className="font-inter text-base">{bdDiv.description}</p>
                            </div>
                        )
                    })
                }
        </div>
      </div>
      <div className="mt-[120px]">
        <h5 className="text-[#272343] font-inter font-semibold text-[32px]">Our Popular Products</h5>
        <div className="mt-[32px] flex gap-6 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-2 exsm:flex-col exsm:gap-10">
            <div>
            <Image src="/sofa.svg" height={365} width={505} alt="Long Green Sofa"
            />
            <div className="mt-4 text-[#2A254B] font-inter text-[18px]">
            <h6>The Popular suedo sofa</h6>
            <p>Price: $99.00</p>
            </div>
            </div>
            <div>
            <Image src="/blackChair.svg" height={365} width={240} alt="Black Chair"
            />
            <div className="mt-4 text-[#2A254B] font-inter text-[18px]">
            <h6>The Dandy Chair</h6>
            <p>Price: $99.00</p>
            </div>
            </div>
            <div>
            <Image src="/oldThemeChair.svg" height={365} width={240} alt="Old Theme Chair Pic"
            />
            <div className="mt-4 text-[#2A254B] font-inter text-[18px]">
            <h6>The Dandy Chair</h6>
            <p>Price: $99.00</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs;