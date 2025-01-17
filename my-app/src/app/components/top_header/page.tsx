import Link from 'next/link';
const TopHeader = () => {
    return (
        <div className="flex items-center h-[45px] w-full bg-[#272343] 
    px-[15.625%] text-white justify-between text-[13px] font-inter font-normal exsm:text-[8px]">
            <div className="flex gap-2 items-center">
                <div>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3334 1.5L5.00008 8.83333L1.66675 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p>
                    Free shipping on all orders over $50
                </p>
            </div>
            <div className="flex items-center gap-[19.2px] exsm:gap-2">
                <div className="flex items-center gap-1">
                    <p>Eng</p>
                    <div>
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.75L4.5 4.25L1 0.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center">
                    <Link href="/components/faqsPage">Faqs</Link>
                </div>
                <div className="flex gap-1 items-center">
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7" clipPath="url(#clip0_1_883)">
                                <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 5.33337V8.00004" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 10.6666H8.00615" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_883">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>Need Help</p>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
