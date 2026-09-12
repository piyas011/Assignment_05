import HeroImg from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-20 ">
      {/* content Side */}
      <div className=" md: text-left flex-col p-5 sm:p-0">
        <h1 className=" text-[30px] md:text-[45px] lg:text-[60px] font-bold leading-8 sm:leading-10 text-center sm:text-center md:text-left lg:leading-17 ">
          Build Your Ideal <br />{" "}
          <span className=" bg-linear-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#475569] mt-5 mb-5 text-center sm:text-center md:text-left">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex justify-center sm:justify-start gap-3 flex-nowrap ">
          <button className="btn text-[10px] sm:text-[13px] md:text-[13px] lg:text-[20px] w-1/3 sm:w-1/2 borderborder-gray-200 text-[#475569] hover:bg-linear-to-r from-[#F97316] to-[#EC4899] hover:text-white transition duration-300">
            Explore Technologies
          </button>
          <button className="btn text-[10px] sm:text-[13px] md:text-[13px] lg:text-[20px] w-1/3 sm:w-1/2 border border-gray-200 text-[#475569] hover:bg-linear-to-r from-[#F97316] to-[#EC4899] hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Images Side */}
      <div className="flex justify-center items-center">
        <img src={HeroImg} alt="Hero Images" />
      </div>
    </div>
  );
};

export default HeroSection;
