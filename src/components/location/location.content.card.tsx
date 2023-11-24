import pattern from "../../assets/shared/desktop/bg-pattern-two-circles.svg";

interface PropsType {
  align: string;
  title: string;
  pHead: string;
  pText: string;
  pHead2: string;
  pText2: string;
  img: string;
}

const LocationContentCard = ({
  align,
  title,
  pHead,
  pText,
  pHead2,
  pText2,
  img,
}: PropsType) => {
  return (
    <div className="flex flex-col lg:flex-row gap-[20px] w-full">
      <img
        src={img}
        className="rounded-lg lg:hidden h-[320px] sm:h-[326px] object-cover"
      />
      {align === "left" && (
        <img src={img} className="rounded-lg hidden lg:block" />
      )}
      <div className="flex flex-col bg-[#FDF3F0] rounded-lg w-full justify-center items-center relative h-[326px]">
        <img src={pattern} className="absolute left-0" />
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
          <h1 className="text-[40px] text-Peach">{title}</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="w-[205px]">
              <h3 className="font-semibold">{pHead}</h3>
              <p>{pText}</p>
            </div>
            <div className="w-[205px]">
              <h3 className="font-semibold">{pHead2}</h3>
              <p>{pText2}</p>
            </div>
          </div>
        </div>
      </div>
      {align === "right" && (
        <img src={img} className="rounded-lg hidden lg:block" />
      )}
    </div>
  );
};

export default LocationContentCard;
