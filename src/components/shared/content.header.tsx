import pattern from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";
import patternMobile from "../../assets/shared/desktop/bg-pattern-two-circles.svg";

interface PropsType {
  title: string;
  text: string;
}

const ContentHeader = ({ title, text }: PropsType) => {
  return (
    <div className="bg-Peach w-full h-[252px] flex flex-col gap-3 justify-center items-center text-white rounded-2xl select-none p-[10px] text-center relative overflow-hidden">
      <img
        src={pattern}
        className="absolute w-full h-[252px] object-cover hidden lg:block"
      />
      <img
        src={patternMobile}
        className="absolute w-full h-[252px] object-cover lg:hidden"
      />
      <h1 className="text-[32px] sm:text-[48px]">{title}</h1>
      <p className="text-[15px] sm:text-[16px]">{text}</p>
    </div>
  );
};

export default ContentHeader;
