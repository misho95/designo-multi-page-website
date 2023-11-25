import { Link } from "react-router-dom";
import bgPattern from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

interface PropsType {
  img: string;
  title: string;
}

const LocationCard = ({ img, title }: PropsType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
      <span className="w-[202px] h-[202px] relative">
        <img src={bgPattern} className="absolute" />
        <img src={img} />
      </span>

      <h1 className="text-[20px]">{title.toUpperCase()}</h1>
      <Link
        to="/locations"
        className="w-[152px] h-[56px] bg-Peach rounded-lg text-white flex justify-center items-center hover:opacity-80 duration-200"
      >
        SEE LOCATION
      </Link>
    </div>
  );
};

export default LocationCard;
