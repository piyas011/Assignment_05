import type { Dispatch, SetStateAction } from "react";
import type { ITechnologiesType } from "./types/type";
import { RxCross2 } from "react-icons/rx";
import Technologies from "./Technologies";

interface SelectedStackProps {
  selectedTechnology: ITechnologiesType[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnologiesType[]>>;
}

const SelectedStack = ({ selectedTechnology }: SelectedStackProps) => {
  //   console.log(selectedTechnology);
  if (selectedTechnology.length === 0)
    return (
      <div className="text-center border border-gray-300 py-5 rounded-[10px]">
        <p>Your Stack is Empty</p>
      </div>
    );
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
            <button className="cursor-pointer">
              <RxCross2 />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedStack;
