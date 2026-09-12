import { use, type Dispatch, type SetStateAction } from "react";
import type { ITechnologiesType } from "./types/type";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologiesCardLayoutProps {
  technologiesFetchPromise: Promise<ITechnologiesType[]>;
  selectedTechnology: ITechnologiesType[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnologiesType[]>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const TechnologiesCardLayout = ({
  technologiesFetchPromise,
  count,
  setCount,
  selectedTechnology,
  setSelectedTechnology,
}: TechnologiesCardLayoutProps) => {
  const technologies = use(technologiesFetchPromise);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
        {technologies.map((technology) => (
          <div key={technology.id}>
            <TechnologiesCard
              technology={technology}
              count={count}
              setCount={setCount}
              selectedTechnology={selectedTechnology}
              setSelectedTechnology={setSelectedTechnology}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TechnologiesCardLayout;
