import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-30 grid grid-cols-4 gap-2 *:md:grid-cols-2 md:gap-10 md:mt-20 md:mb-10 mb-20 justify-around ">
      <div className="flex flex-col gap-4 col-span-4 md:col-span-1 justify-center items-center md:items-start">
        <img src={Logo} alt="DevStack" className="w-50" />
        <p className="my-4 text-[14px] text-[#64748B]  text-center md:text-left ">
          Curated tools, technologies, and resources for developers building
          modern software.
        </p>
        <div className="flex gap-4 text-[#64748B] text-[14px] flex-row  ">
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
          <a href="#">Linkedin</a>
        </div>
      </div>

      <div className="hidden  md:flex flex-col gap-2 text-[#64748B] text-[14px]">
        <h4>PRODUCT</h4>
        <a href="#">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
      </div>

      <div className="hidden  md:flex flex-col gap-2 text-[#64748B] text-[14px]">
        <h4>COMPANY</h4>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
      </div>
      <div className="hidden  md:flex flex-col gap-2 text-[#64748B] text-[14px]">
        <h4>LEGAL</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
