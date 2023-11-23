interface PropsType {
  img: string;
  title: string;
  text: string;
}

const WebDesignCard = ({ img, title, text }: PropsType) => {
  return (
    <div className="w-full flex flex-col sm:flex-row lg:flex-col lg:w-[350px] h-[478px] sm:h-[310px] lg:h-[478px] overflow-hidden group cursor-pointer">
      <img
        src={img}
        className="rounded-t-lg sm:rounded-l-lg lg:rounded-t-lg w-full sm:w-1/2 lg:w-full"
      />
      <div
        className={`w-full sm:w-1/2 lg:w-full bg-[#FDF3F0] group-hover:bg-Peach p-[10px] text-center rounded-b-lg sm:rounded-r-lg lg:rounded-b-lg flex justify-center items-center flex-col`}
      >
        <h1 className="text-Peach group-hover:text-white text-[20px] ">
          {title.toUpperCase()}
        </h1>
        <p className="text-Black group-hover:text-white">{text}</p>
      </div>
    </div>
  );
};

export default WebDesignCard;
