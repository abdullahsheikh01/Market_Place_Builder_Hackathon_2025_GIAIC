"use client";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { cart } from "@/app/cart";
const BottomHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex items-center  h-[84px]  
    bg-[#F0F2F3] justify-between 2xl:px-[15.625%] xl:px-[206px] lg:px-[175px] md:px-[125px] sm:px-[106px] exsm:px-[40px]">
            <div className="flex gap-1">
                <Image src="/logo.png" height={40} width={40} alt="Logo"
                />
                <h2 className="font-medium font-inter text-[26px] ">Comforty</h2>
            </div>
            <div className="flex items-center gap-2">
            <Link href="/components/cart" className="flex items-center h-11  bg-[#fff] 
            rounded-[8px] px-3 gap-2 w-auto">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="exsm:hidden">
                    <path d="M2.52081 2.97913L4.42748 3.30913L5.31023 13.826C5.34414 14.2399 5.53284 14.6257 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3417 17.743 15.1986 18.0435 14.9382C18.344 14.6778 18.5403 14.3177 18.5964 13.9241L19.4672 7.91263C19.4904 7.75275 19.4819 7.58987 19.4421 7.43329C19.4023 7.27671 19.3321 7.12951 19.2354 7.00011C19.1387 6.8707 19.0174 6.76163 18.8785 6.67913C18.7396 6.59663 18.5858 6.54231 18.4259 6.51929C18.3672 6.51288 4.73365 6.50829 4.73365 6.50829" stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.9479 9.89539H15.4898" stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5578 18.5194C6.62502 18.5165 6.69213 18.5272 6.75509 18.551C6.81805 18.5747 6.87556 18.611 6.92414 18.6575C6.97273 18.704 7.01139 18.7599 7.03781 18.8218C7.06422 18.8837 7.07784 18.9503 7.07784 19.0176C7.07784 19.0849 7.06422 19.1515 7.03781 19.2133C7.01139 19.2752 6.97273 19.3311 6.92414 19.3777C6.87556 19.4242 6.81805 19.4605 6.75509 19.4842C6.69213 19.5079 6.62502 19.5187 6.5578 19.5158C6.42936 19.5103 6.30801 19.4554 6.21908 19.3626C6.13015 19.2697 6.08051 19.1461 6.08051 19.0176C6.08051 18.889 6.13015 18.7654 6.21908 18.6726C6.30801 18.5798 6.42936 18.5249 6.5578 18.5194Z" fill="#272343" stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z" fill="#272343" stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-inter font-medium text-[12px]">
                    Cart
                </p>
                <div className="flex h-5 w-5 rounded-[50%] bg-[#173917]
                 text-white text-[10px] items-center 
                  font-inter justify-center">
                    <p>{cart.length}</p>
                </div>
            </Link>
            <div className="2xl:hidden xl:hidden lg:hidden md:flex sm:flex exsm:flex">
      <div className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#007580] focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <ul className="absolute top-[150px] left-0 w-full bg-white shadow-md  flex-col items-center gap-5 py-4 text-[#636270] font-inter font-medium text-[14px] hidden md:flex sm:flex exsm:flex">
          <Link href="/pages/home" onClick={()=>setIsOpen(!isOpen)}>
            <li className="hover:text-[#007580]">Home</li>
          </Link>
          <Link href="" onClick={()=>setIsOpen(!isOpen)}>
            <li className="hover:text-[#007580]">Shop</li>
          </Link>
          <Link href="/pages/products" onClick={()=>setIsOpen(!isOpen)}>
            <li className="hover:text-[#007580]">Product</li>
          </Link>
          <Link href="">
            <li className="hover:text-[#007580]" onClick={()=>setIsOpen(!isOpen)}>Pages</li>
          </Link>
          <Link href="/components/aboutUs" onClick={()=>setIsOpen(!isOpen)}>
            <li className="hover:text-[#007580]">About</li>
          </Link>
          <Link href="/components/contactUs" onClick={()=>setIsOpen(!isOpen)}>
            <li className="hover:text-[#007580]">Contact: (808) 555-0111</li>
          </Link>
        </ul>
      )}
    </div>
            </div>
        </div>
    )
}

export default BottomHeader
