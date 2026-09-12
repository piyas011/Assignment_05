import { IoMdStarOutline } from "react-icons/io";
import type { ITechnologiesType } from "./types/type";
import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa6";

interface TechnologiesCardProps {
  technology: ITechnologiesType;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  selectedTechnology: ITechnologiesType[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnologiesType[]>>;
  addStack: boolean;
  setAddStack: Dispatch<SetStateAction<boolean>>;
}
const TechnologiesCard = ({
  technology,
  count,
  setCount,
  selectedTechnology,
  setSelectedTechnology,
  setAddStack,
}: TechnologiesCardProps) => {
  // Add To Stack Button Click

  const handleAddToStack = (click: boolean) => {
    setCount(count + 1);
    setAddStack(click);
    setSelectedTechnology([...selectedTechnology, technology]);
    toast.success(`${technology.name} Added to Stack`);
  };

  return (
    <div
      className={`border border-gray-200 m-2 rounded-[10px] p-5 shadow-md hover:shadow-lg transition duration-300 ${selectedTechnology.some((tech) => tech.id === technology.id) ? "border-red-200 border-3" : ""}  `}
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
          className={` py-0.5  px-3 border  rounded-3xl bg-gray-50 border-gray-300`}
        >
          {technology.badge}
        </small>
      </div>
      {/* technology Name */}
      <h3 className="my-4 text-3xl font-bold">{technology.name}</h3>
      <p className="text-[#64748B] my-5">{technology.description}</p>
      <div className="flex justify-between items-center text-[#475569] text-sm">
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
        className="w-full border bg-[#0A0F1D] border-red-300 py-1 rounded-lg mt-8 text-white font-bold cursor-pointer btn disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-red-200 disabled:text-red-600   "
        onClick={() => handleAddToStack(true)}
        disabled={selectedTechnology.some((tech) => tech.id === technology.id)}
      >
        {selectedTechnology.some((tech) => tech.id === technology.id) ? (
          <span className="flex items-center justify-center gap-2">
            <FaCheck />
            Added to Stack
          </span>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechnologiesCard;
