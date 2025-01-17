import Image from "next/image";
import Link from "next/link";
const EndFooter = () => {
  return (
    <div className='pl-[15.625%] pr-[15.625%] flex h-[75px] w-full items-center justify-between xl:px-[206px] lg:px-[175px] md:px-[80px] sm:px-[106px] exsm:px-[40px]'>
        <div className='font-poppins text-[14px] opacity-60 flex w-full'>
            <p>@ 2021 - Blogy - Designed & Develop by <span className="footSpan">
                <Link href="">Zakirsoft</Link></span></p>
        </div>
        <div>
            <Image src="/cards.svg" alt="Cards" className="opacity-40"
            height={27} width={210}
            />
        </div>
    </div>
  )
};
export default EndFooter;
