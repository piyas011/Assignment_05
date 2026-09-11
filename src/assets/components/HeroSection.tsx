import HeroImg from "../banner-stack.png";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ">
      {/* content Side */}
      <div className=" flex justify-center sm:justify-start items-center sm:items-start flex-col p-5 sm:p-0">
        <h1 className="text-[60px] font-bold leading-17">
          Build Your Ideal <br />{" "}
          <span className=" bg-linear-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-center sm:text-left my-10">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="w-3/5 flex gap-2">
          <button className="btn w-2/4 bg-linear-to-r from-[#F97316] to-[#EC4899]  text-white ">
            Explore Technologies
          </button>
          <button className="btn w-2/4">Learn More</button>
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
