interface PropsType {
  img: string;
  title: string;
  text: string;
}

const AboutProjectCard = ({ img, title, text }: PropsType) => {
  return (
    <div className="w-full lg:w-[350px] h-[412px] flex-col sm:h-[202px] lg:h-[412px] flex sm:flex-row lg:flex-col justify-center items-center gap-[26px] text-center">
      <img src={img} />
      <div className="flex flex-col gap-[26px]">
        <h1 className="font-semibold">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutProjectCard;
