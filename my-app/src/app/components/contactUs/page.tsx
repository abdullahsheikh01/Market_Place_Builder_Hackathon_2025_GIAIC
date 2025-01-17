import Image from "next/image";
import Form from "../form/page";
import ContactPageBanner from "../contactPageBanner/page";
const ContactUs = () => {
  return (
    <div className='px-[218.4px] lg:px-[218.4px] md:px-2 flex flex-col items-center mt-[20px] sm:px-2 exsm:px-2'>
      <div className='mt-[20px]'>
        <h1 className='font-poppins text-black text-4xl font-semibold text-center'
        >Get in Touch With Us</h1>
        <p className='font-poppins text-base text-[#9F9F9F] text-center'>
        For More Information About Our Product & Services. 
        Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
      <div className='mt-[82px] 2xl:w-[846.4px] xl:w-[846.4px] lg:w-[846.4px] flex justify-between md:w-auto md:flex-row 2xl:flex-row
      xl:flex-row lg:flex-row sm:flex-col exsm:flex-col md:gap-5'>
        <div className="flex flex-col gap-[57px] sm:items-center exsm:items-center">
        <div className="flex gap-3 relative">
            <Image src="/locationIcon.svg"
            height={24} width={20} alt="Location Icon" className="absolute top-0 left-0"/>
            <div className="ml-[40px]">
            <h3 className="font-poppins font-medium text-2xl"
            >Address</h3>
           <p className="font-inter text-base">
           236 5th SE Avenue, New <br />York NY10000, United <br />States
           </p>
          </div>
        </div>
        <div className="flex gap-3 relative">
            <Image src="/phoneIcon.svg"
            height={24} width={20} alt="Location Icon" className="absolute top-0 left-0"/>
            <div className="ml-[40px]">
            <h3 className="font-poppins font-medium text-2xl"
            >Phone</h3>
           <p className="font-inter text-base">
           Mobile: +(84) 546-6789 <br />
           Hotline: +(84) 456-678
           </p>
           </div>
        </div>
        <div className="flex gap-3 relative">
            <Image src="/clock.svg"
            height={24} width={20} alt="Location Icon" className="absolute top-0 left-0"/>
            <div className="ml-[40px]">
            <h3 className="font-poppins font-medium text-2xl"
            >Working Time</h3>
           <p className="font-inter text-base">
           Monday-Friday: 9:00 <br /> - 22:00 
           Saturday-Sunday: 9:00 <br /> - 21:00
           </p>
           </div>
        </div>
        </div>
        <Form />
      </div>
      <ContactPageBanner />
    </div>
  )
}

export default ContactUs;
