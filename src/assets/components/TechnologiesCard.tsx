import { IoMdStarOutline } from "react-icons/io";
import type { ITechnologiesType } from "./types/type";

interface TechnologiesCardProps {
  technology: ITechnologiesType;
}
const TechnologiesCard = ({ technology }: TechnologiesCardProps) => {
  return (
    <div>
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

      <button className="w-full mt-4 bg-[#0A0F1D] p-2.5 text-white rounded-2xl cursor-pointer hover:scale-105 transition duration-300">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologiesCard;
