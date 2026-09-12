import { Suspense, useState } from "react";

// import TechnologiesCard from "./TechnologiesCardLayout";
import type { ITechnologiesType } from "./types/type";
import TechnologiesCardLayout from "./TechnologiesCardLayout";
import SelectedStack from "./SelectedStack";

const technologiesFetch = async (): Promise<ITechnologiesType[]> => {
  const res = await fetch("/public/Techmologies.json");
  const data = await res.json();
  return data;
};

const Technologies = () => {
  const [technologiesFetchPromise] = useState(technologiesFetch());

  const [selectedTechnology, setSelectedTechnology] = useState<
    ITechnologiesType[]
  >([]);
  const [count, setCount] = useState(0);
  const [addStack, setAddStack] = useState(false);

  return (
    <section className="">
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
      <div className=" grid grid-cols-12 mt-5 gap-5 justify-between ">
        {/* Technologies Card div */}
        <div className=" col-span-12 sm:col-span-6 md:col-span-8 lg:col-span-8">
          <Suspense fallback={<h1>loading....</h1>}>
            <TechnologiesCardLayout
              selectedTechnology={selectedTechnology}
              setSelectedTechnology={setSelectedTechnology}
              technologiesFetchPromise={technologiesFetchPromise}
              count={count}
              setCount={setCount}
              addStack={addStack}
              setAddStack={setAddStack}
            />
          </Suspense>
          {/* <Suspense fallback={<h1>Loading....</h1>}>
            <TechnologiesCard
              selectedTechnology={selectedTechnology}
              setSelectedTechnology={setSelectedTechnology}
              technologiesFetchPromise={technologiesFetchPromise}
              count={count}
              setCount={setCount}
              addStack={addStack}
              setAddStack={setAddStack}
            />
          </Suspense> */}
        </div>

        {/* Your Stack section  */}
        <div className=" col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
          <div className="p-5 border border-gray-300  rounded-2xl">
            <h1 className="text-[18px] font-bold text-[#0F172A]">Your Stack</h1>
            <p className="text-[14px] text-[#475569] mb-3">
              {count === 0 ? "No" : count} technologies selected{" "}
              {count === 0 ? "yet." : ""}
            </p>

            <SelectedStack
              selectedTechnology={selectedTechnology}
              setSelectedTechnology={setSelectedTechnology}
              count={count}
              setCount={setCount}
            />
            {selectedTechnology.length > 0 ? (
              <button
                className="w-full border border-red-300 py-1 rounded-lg mt-8 text-red-600 font-bold cursor-pointer btn "
                onClick={() => {
                  setSelectedTechnology([]);
                  setCount(0);
                }}
              >
                {" "}
                Remove All
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
