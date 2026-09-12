import type { Dispatch, SetStateAction } from "react";
import type { ITechnologiesType } from "./types/type";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify/unstyled";

interface SelectedStackProps {
  selectedTechnology: ITechnologiesType[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnologiesType[]>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const SelectedStack = ({
  selectedTechnology,
  setSelectedTechnology,
  count,
  setCount,
}: SelectedStackProps) => {
  //   console.log(selectedTechnology);
  if (selectedTechnology.length === 0)
    return (
      <div className="text-center border border-gray-300 py-5 rounded-[10px]">
        <p>Your Stack is Empty</p>
      </div>
    );

  const handleRemoveFromStack = (technology: ITechnologiesType) => {
    const updatedStack = selectedTechnology.filter(
      (tech) => tech.id !== technology.id,
    );
    setSelectedTechnology(updatedStack);
    setCount(count - 1);
  };

  return (
    <div>
      {selectedTechnology.map((technology) => {
        return (
          <div
            key={technology.id}
            className="flex justify-between items-center my-5 border p-2
          rounded-[10px] border-gray-300 "
          >
            <div className="flex gap-4 justify-start items-center leading-4 font-bold">
              <img width={40} src={technology.icon} alt={technology.name} />
              <div>
                <h4 style={{ color: technology.color }}>{technology.name}</h4>
                <small>{technology.category}</small>
              </div>
            </div>
            <button
              className="cursor-pointer text-red-600 text-2xl hover:scale-110 transition duration-300"
              onClick={() => handleRemoveFromStack(technology)}
            >
              <RxCross2 />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedStack;
