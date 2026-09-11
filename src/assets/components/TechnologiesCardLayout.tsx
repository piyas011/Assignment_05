import { use } from "react";
import type { ITechnologiesType } from "./types/type";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologiesCardLayoutProps {
  technologiesFetchPromise: Promise<ITechnologiesType[]>;
}

const TechnologiesCardLayout = ({
  technologiesFetchPromise,
}: TechnologiesCardLayoutProps) => {
  const technologies = use(technologiesFetchPromise);

  return (
    <div className="grid grid-cols-3 gap-4">
      {technologies.map((technology) => (
        <div className="border border-gray-300  p-5 rounded-3xl">
          <TechnologiesCard technology={technology} />
        </div>
      ))}
      ;
    </div>
  );
};

export default TechnologiesCardLayout;
