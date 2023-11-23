import { Link } from "react-router-dom";
import WebDesignCard from "../webdesign/webdesign.card";
import webDesign from "../../assets/home/desktop/image-web-design-large.jpg";
import GrapDesign from "../../assets/home/desktop/image-graphic-design.jpg";

const GraphicContent = () => {
  const data = [
    {
      id: 1,
      title: "tim brown",
      text: "A book cover designed for Tim Brown’s new release, ‘Change’",
      img: "src/assets/graphic-design/desktop/image-change.jpg",
    },
    {
      id: 2,
      title: "boxed water",
      text: "A simple packaging concept made for Boxed Water",
      img: "src/assets/graphic-design/desktop/image-boxed-water.jpg",
    },
    {
      id: 3,
      title: "science!",
      text: `A poster made in collaboration with 
      the Federal Art Project`,
      img: "src/assets/graphic-design/desktop/image-science.jpg",
    },
  ];

  return (
    <>
      <div className="bg-Peach w-full h-[252px] flex flex-col gap-3 justify-center items-center text-white rounded-2xl select-none p-[10px] text-center">
        <h1 className="text-[32px] sm:text-[48px]">Graphic Design</h1>
        <p className="text-[15px] sm:text-[16px]">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
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

export default GraphicContent;
