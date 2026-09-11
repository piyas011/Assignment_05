import { Suspense, useState } from "react";
import TechnologiesCard from "./TechnologiesCardLayout";
import type { ITechnologiesType } from "./types/type";

const technologiesFetch = async (): Promise<ITechnologiesType[]> => {
  const res = await fetch("/public/Techmologies.json");
  const data = await res.json();
  return data;
};

const Technologies = () => {
  const [technologiesFetchPromise] = useState(technologiesFetch());

  return (
    <section>
      <h2 className="font-extrabold text-center leading-10 md:text-left md:leading-12 text-[36px] mb-5">
        Explore the{" "}
        <span className=" bg-linear-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-center md:text-left px-4">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* Explore the Technologies Main Div */}
      <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 mt-5 gap-5">
        {/* Technologies Card div */}
        <div className="  sm:col-span-2">
          <Suspense fallback={<h1>Loading....</h1>}>
            <TechnologiesCard
              technologiesFetchPromise={technologiesFetchPromise}
            />
          </Suspense>
        </div>

        {/* Your Stack section  */}
        <div className=" w-full">
          <div className="p-5 border  border-gray-300  rounded-2xl">
            <h1 className="text-[18px] font-bold text-[#0F172A]">Your Stack</h1>
            <p className="text-[14px] text-[#475569] mb-3">
              No No technologies selected yet.
            </p>
            <div className="flex justify-center items-center  p-5  rounded-2xl border  border-gray-300 min-h-20">
              Your Stack is empty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
