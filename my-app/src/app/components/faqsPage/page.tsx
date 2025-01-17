import { faqsData } from "@/app/faqsData";
const FaqsPage = () => {
  return (
    <div className='px-[260px] mt-[20px] flex flex-col gap-[65px] mb-[120px]  xl:px-[224px] lg:px-[190px] md:px-[135px] sm:px-[115px] exsm:px-[43px] exsm:mt-3
'>
        <div className="flex flex-col items-center">
        <h1 className="font-worksans font-bold text-[45px] text-center">Questions Look Here</h1>
        <p className="font-inter text-base text-[#4F4F4F]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the 
        </p>
        </div>
        <div className="grid grid-cols-2 gap-[20px] sm:grid-cols-1 exsm:grid-cols-1">
            {faqsData.map((faq, index) => {
                return (
                    <div  key={index} className="w-auto h-auto bg-[#F7F7F7] rounded-[8px] px-4 py-4">
                        <div className="flex justify-between">
                            <h4 className="font-inter text-[18px] font-bold text-[#333333]">{faq.question}</h4>
                            <button className="text-[23px]">+</button>
                        </div>
                        <div>
                            <p className="font-inter text-base text-[#4F4F4F]">{faq.answer}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FaqsPage;