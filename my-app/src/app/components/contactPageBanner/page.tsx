import Image from "next/image";
const ContactPageBanner = () => {
    const divsData=[
        {
            title: 'High Quality',
            image: '/trophy1.svg',
            text: 'crafted from top materials',
            imageAlt: 'Trophy Icon'
        },
        {
            title: 'Warranty Protection',
            image: '/guranteeLogo.svg',
            text: 'Over 2 years',
            imageAlt: 'Gurantee Icon'
        },
        {
            title: '24/7 Support',
            image: '/customerSupport.svg',
            text: 'Dedicated Support',
            imageAlt: 'Clock Icon'
        }
    ]
  return (
    <div className='w-[1056px] flex gap-[105.6px] items-center mt-[80px] bg-[#F4F4F4] 2xl:h-[250px] xl:h-[250px]  lg:h-[250px] 
    px-[52.8px] 2xl:flex-row xl:flex-row md:h-[250px] 
    lg:flex-row  exsm:flex-col exsm:h-auto  sm:h-auto sm:flex-col sm:gap-4 exsm:gap-4 md:gap-4 sm:w-full  exsm:w-full md:justify-between
     md:w-full md:px-2 sm:py-2 exsm:py-2'>
      {
        divsData.map((divInfo, index) => {
            return (
                <div className='flex gap-3 relative' key={index}>
                <Image src={divInfo.image} height={40} width={40} alt={divInfo.imageAlt} className="absolute top-0 left-0"/>
                <div className="ml-[50px]">
                    <h3 className="font-poppins font-medium text-2xl">{divInfo.title}</h3>
                    <p className="font-inter text-base">{divInfo.text}</p>
                </div>
                </div>
            )
            })
      }
    </div>
  )
}

export default ContactPageBanner
