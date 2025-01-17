import Image from "next/image";
import Link from "next/link";
const MainFooter = () => {
  return (
    <div className="flex h-[329px] items-center px-[15.625%] 2xl:px-[240px] xl:px-[206px] lg:px-[175px] md:px-[80px] sm:px-[106px] exsm:px-[40px] exsm:mb-[300px] ">
        <div className="flex justify-between w-screen lg:gap-6 md:gap-6 sm:grid sm:grid-cols-3 sm:mt-[350px] sm:gap-6 exsm: exsm:grid-cols-3 exsm:mt-[350px] exsm:gap-6 exsm:ml-0 2xl:mt-0 xl:mt-0">
            <div className="flex flex-col gap-6">
                <div className="flex gap-1 exsm:hidden">
                <Image src="/logo.png"
                alt="logo"
                height={40} width={40}
                />
                <h2 className="font-semibold font-inter text-[26px]">Comforty</h2>
                </div>
                <div className="font-inter text-base text-[rgba(39,35,67,0.6)] exsm:hidden">
                    <p>
                    Vivamus tristique odio sit amet velit semper, <br /> eu posuere turpis interdum. <br />
                    Cras egestas purus 
                    </p>
                </div>
                <div className="flex gap-1">
                    <Link href="">
                    <Image src="/faceBookLogo.svg"
                    alt="Facebook Logo"
                    height={38} width={38}
                    />
                    </Link>
                    <Link href="">
                    <Image src="/skypeLogo.svg"
                    alt="Skype Logo"
                    height={38} width={38}
                    />
                    </Link>
                    <Link href="">
                    <Image src="/instagramLogo.svg"
                    alt="Instagram Logo"
                    height={38} width={38}
                    />
                    </Link>
                    <Link href="">
                    <Image src="/pintrestLogo.svg"
                    alt="Pintrest Logo"
                    height={38} width={38}
                    />
                    </Link>
                    <Link href="">
                    <Image src="/youtubeLogo.svg"
                    alt="Youtube Logo"
                    height={38} width={38}
                    />
                    </Link>
                </div>
            </div>
            <div>
                <h5 className="font-inter font-medium text-[14px] text-[#9A9CAA] tracking-[1px]">
                    CATEGORY
                </h5>
                <ul className="mt-5 font-inter text-base text-[#272343]
                flex flex-col gap-[5px]">
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">Sofa</li>
                    </Link>
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">ArmChair</li>
                    </Link>
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">Wing Chair</li>
                    </Link>
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">Desk Chair</li>
                    </Link>
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">wooden Chair</li>
                    </Link>
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">Park Bench</li>
                    </Link>
                </ul>
            </div>
            <div>
                <h5 className="font-inter font-medium text-[14px] text-[#9A9CAA] tracking-[1px]">
                    SUPPORT
                </h5>
                <ul className="mt-5 font-inter text-base text-[#272343]
                flex flex-col gap-[5px]">
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">Help & Support</li>
                    </Link>
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">Terms & Condition</li>
                    </Link>
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">Privacy Policy</li>
                    </Link>
                    <Link href="">
                    <li className="hover:text-[#007580] hover:underline">Help</li>
                    </Link>
                </ul>
            </div>
            <div className="flex flex-col">
                <h5 className="font-inter font-medium text-[14px] text-[#9A9CAA] tracking-[1px]">
                    NEWSLETTER
                </h5>
                <div>
                    <input type="text" 
                    className="h-11 w-[228px] rounded-[8px] border-2 mt-4 border-[#E1E3E5] pl-3 footerButton sm:w-10 exsm:w-10"
                    placeholder="Your email"
                    />
                    <button type="submit" className="h-11 w-[101.6px] bg-[#029FAE] rounded-[8px] 
                    font-inter font-semibold text-base text-white ml-3">Subscribe
                    </button>
                </div>
                <div className="font-inter text-[15px] text-[#272343] opacity-60 mt-5 exsm:hidden">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Nullam tincidunt erat enim.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainFooter
