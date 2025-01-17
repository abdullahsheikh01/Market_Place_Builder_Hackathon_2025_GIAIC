import MainFooter from "../mainFooter/page";
import EndFooter from "../end_footer/page";

const Footer = () => {
  return (
    <div className='mt-0'>
      <div className="h-[0.5px] w-full bg-[#F0F2F3] exsm:flex exsm:flex-col" />
      <MainFooter />
      <EndFooter />
    </div>
  );
};

export default Footer;