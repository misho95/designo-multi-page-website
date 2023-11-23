import { Link } from "react-router-dom";
import WebDesignCard from "../webdesign/webdesign.card";
import webDesign from "../../assets/home/desktop/image-web-design-large.jpg";
import GrapDesign from "../../assets/home/desktop/image-graphic-design.jpg";

const AppDesignContent = () => {
  const data = [
    {
      id: 1,
      title: "airfilter",
      text: "Solving the problem of poor indoor air quality by filtering the air",
      img: "src/assets/app-design/desktop/image-airfilter.jpg",
    },
    {
      id: 2,
      title: "eyecam",
      text: "Product that lets you edit your favorite photos and videos at any time",
      img: "src/assets/app-design/desktop/image-eyecam.jpg",
    },
    {
      id: 3,
      title: "faceit",
      text: "Get to meet your favorite internet superstar with the faceit app",
      img: "src/assets/app-design/desktop/image-faceit.jpg",
    },
    {
      id: 4,
      title: "todo",
      text: "A todo app that features cloud sync with light and dark mode",
      img: "src/assets/app-design/desktop/image-todo.jpg",
    },
    {
      id: 5,
      title: "LOOPSTUDIOS",
      text: "A VR experience app made for Loopstudios",
      img: "src/assets/app-design/desktop/image-loopstudios.jpg",
    },
  ];

  return (
    <>
      <div className="bg-Peach w-full h-[252px] flex flex-col gap-3 justify-center items-center text-white rounded-2xl select-none p-[10px] text-center">
        <h1 className="text-[32px] sm:text-[48px]">App Design</h1>
        <p className="text-[15px] sm:text-[16px]">
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </div>
      <div className="flex flex-wrap gap-[20px]">
        {data.map((d) => {
          return (
            <WebDesignCard
              key={d.id}
              img={d.img}
              title={d.title}
              text={d.text}
            />
          );
        })}
      </div>
      <div className="flex flex-col lg:flex-row gap-[20px]">
        <Link
          to={"/webdesign"}
          className="w-full h-[250px] sm:h-[200px] lg:h-[308px] rounded-xl overflow-hidden relative group"
        >
          <div className="bg-Peach/70 w-full h-full absolute z-20 hidden group-hover:block"></div>
          <div className="w-full h-full absolute z-20 flex justify-center items-center flex-col gap-6 text-white select-none">
            <h1 className="text-[40px]">Web DESIGN</h1>
            <p>VIEW PROJECTS</p>
          </div>
          <img
            src={webDesign}
            className="w-full h-full object-cover absolute"
          />
        </Link>

        <Link
          to={"/graphicdesign"}
          className="w-full h-[250px] sm:h-[200px] lg:h-[308px] rounded-xl overflow-hidden relative group"
        >
          <div className="bg-Peach/70 w-full h-full absolute z-20 hidden group-hover:block"></div>
          <div className="w-full h-full absolute z-20 flex justify-center items-center flex-col gap-6 text-white select-none">
            <h1 className="text-[40px]">GRAPHIC DESIGN</h1>
            <p>VIEW PROJECTS</p>
          </div>
          <img
            src={GrapDesign}
            className="w-full h-full object-cover absolute"
          />
        </Link>
      </div>
    </>
  );
};

export default AppDesignContent;
