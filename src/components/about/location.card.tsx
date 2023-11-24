import bgPattern from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

const LocationCard = ({ img, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
      <span className="w-[202px] h-[202px] relative">
        <img src={bgPattern} className="absolute" />
        <img src={img} />
      </span>

      <h1 className="text-[20px]">{title.toUpperCase()}</h1>
      <button className="w-[152px] h-[56px] bg-Peach rounded-lg text-white">
        SEE LOCATION
      </button>
    </div>
  );
};

export default LocationCard;
