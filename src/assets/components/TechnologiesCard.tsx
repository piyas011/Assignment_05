import { IoMdStarOutline } from "react-icons/io";
import type { ITechnologiesType } from "./types/type";
import { useState, type Dispatch, type SetStateAction } from "react";

interface TechnologiesCardProps {
  technology: ITechnologiesType;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  selectedTechnology: ITechnologiesType[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnologiesType[]>>;
}
const TechnologiesCard = ({
  technology,
  count,
  setCount,
  selectedTechnology,
  setSelectedTechnology,
}: TechnologiesCardProps) => {
  // Add To Stack Button Click
  const [addStack, setAddStack] = useState(false);

  const handleAddToStack = (click: boolean) => {
    setCount(count + 1);
    setAddStack(click);
    setSelectedTechnology([...selectedTechnology, technology]);
  };

  return (
    <div
      className={`border border-gray-300 ${addStack === true ? "border-red-300 border-3 " : ""} m-2 rounded-3xl p-5`}
    >
      <div className="flex justify-between items-center">
        <div>
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-12 h-12 object-contain"
          />
        </div>
        <small
          style={{ color: technology.color }}
          className={` py-0.5  px-3 border text-[${technology.color}] rounded-3xl bg-gray-50 border-gray-300`}
        >
          {technology.badge}
        </small>
      </div>
      {/* technology Name */}
      <h3 className="my-4 text-3xl font-bold">{technology.name}</h3>
      <p className="text-[#64748B] my-5">{technology.description}</p>
      <div className="flex justify-between items-center text-[#64748B]">
        <p>{technology.category}</p>
        <p>{technology.difficulty}</p>
        <p className="flex  justify-center items-center">
          <span className="text-yellow-600 text-2xl">
            <IoMdStarOutline />{" "}
          </span>
          {technology.rating}
        </p>
      </div>
      <button
        className="w-full mt-4 bg-[#0A0F1D] p-2.5 text-white rounded-2xl cursor-pointer
             hover:scale-105 transition duration-300
             disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed
             disabled:hover:scale-100"
        onClick={() => handleAddToStack(true)}
        disabled={addStack}
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologiesCard;
