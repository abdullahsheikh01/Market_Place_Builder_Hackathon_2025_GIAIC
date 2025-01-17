import Image from "next/image";
const CompaniesLogos = () => {
  return (
    <div className="mt-[65px] pl-[15.625%] pr-[15.625%] w-full h-[139px]
    flex justify-between md:gap-2">
        <div className="h-[200px] w-[200px]">
        <Image src="/companyLogo1.svg"
        width={85} height={87} alt="Zapier Logo"
        />
        </div>
        <div className="h-[200px] w-[200px]">
        <Image src="/companyLogo2.svg"
        width={107} height={109} alt="Pipe Drive Logo"
        />
        </div>
        <div className="h-[200px] w-[200px]">
        <Image src="/companyLogo3.svg"
        width={135} height={139} alt="CIB Bank Logo"
        />
        </div>
          <div className="h-[200px] w-[200px]">
          <Image src="/companyLogo4.svg"
        width={63} height={65} alt="Z Logo"
        />
          </div>
          <div className="h-[200px] w-[200px]">
          <Image src="/companyLogo5.svg"
        width={98} height={101} alt="Burn Toast Logo"
        />
          </div>
          <div className="h-[200px] w-[200px]">
          <Image src="/companyLogo6.svg"
        width={113} height={115} alt="Panda Doc Logo"
        />
          </div>
          <div className="h-[200px] w-[200px]">
          <Image src="/companyLogo7.svg"
        width={84} height={87} alt="Moz Logo"
        />
          </div>
    </div>
  )
}

export default CompaniesLogos;
