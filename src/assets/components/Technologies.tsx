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
      <h2 className="font-extrabold text-[36px]">
        Explore the{" "}
        <span className=" bg-linear-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p>Pick one technology per category to build your ideal stack.</p>

      {/* Explore the Technologies Main Div */}
      <div className="grid grid-cols-4 h-100 mt-5 gap-5">
        {/* Technologies Card div */}
        <div className=" col-span-3">
          <Suspense fallback={<h1>Loading....</h1>}>
            <TechnologiesCard
              technologiesFetchPromise={technologiesFetchPromise}
            />
          </Suspense>
        </div>

        {/* Your Stack section  */}
        <div className="bg-red-50 rounded-2xl"></div>
      </div>
    </section>
  );
};

export default Technologies;
