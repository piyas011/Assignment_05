import HeroImg from "../banner-stack.png";

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
        <p className="text-center sm:text-left my-10">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="w-full lg:w-5/7 flex gap-4 justify-center">
          <button className="btn text-[10px] sm:text-[13px] md:text-[13px] w-1/3 sm:w-1/2 bg-linear-to-r from-[#F97316] to-[#EC4899]  text-white ">
            Explore Technologies
          </button>
          <button className="btn text-[10px] sm:text-[13px] md:text-[13px] w-1/3 sm:w-1/2">
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
