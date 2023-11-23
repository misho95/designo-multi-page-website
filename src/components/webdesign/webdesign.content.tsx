import { Link } from "react-router-dom";
import WebDesignCard from "./webdesign.card";
import appDesign from "../../assets/home/desktop/image-app-design.jpg";
import GrapDesign from "../../assets/home/desktop/image-graphic-design.jpg";

const WebDesignContent = () => {
  const data = [
    {
      id: 1,
      title: "express",
      text: "A multi-carrier shipping website for ecommerce businesses",
      img: "src/assets/web-design/desktop/image-express.jpg",
    },
    {
      id: 2,
      title: "transfer",
      text: "Site for low-cost money transfers and sending money within seconds",
      img: "src/assets/web-design/desktop/image-transfer.jpg",
    },
    {
      id: 3,
      title: "photon",
      text: "A state-of-the-art music player with high-resolution audio and DSP effects",
      img: "src/assets/web-design/desktop/image-photon.jpg",
    },
    {
      id: 4,
      title: "builder",
      text: "Connects users with local contractors based on their location",
      img: "src/assets/web-design/desktop/image-builder.jpg",
    },
    {
      id: 5,
      title: "blogr",
      text: "Blogr is a platform for creating an online blog or publication",
      img: "src/assets/web-design/desktop/image-blogr.jpg",
    },
    {
      id: 6,
      title: "camp",
      text: "Get expert training in coding, data, design, and digital marketing",
      img: "src/assets/web-design/desktop/image-camp.jpg",
    },
  ];

  return (
    <>
      <div className="bg-Peach w-full h-[252px] flex flex-col gap-3 justify-center items-center text-white rounded-2xl select-none p-[10px] text-center">
        <h1 className="text-[32px] sm:text-[48px]">Web Design</h1>
        <p className="text-[15px] sm:text-[16px]">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
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
          to={"/appdesign"}
          className="w-full h-[250px] sm:h-[200px] lg:h-[308px] rounded-xl overflow-hidden relative group"
        >
          <div className="bg-Peach/70 w-full h-full absolute z-20 hidden group-hover:block"></div>
          <div className="w-full h-full absolute z-20 flex justify-center items-center flex-col gap-6 text-white select-none">
            <h1 className="text-[40px]">APP DESIGN</h1>
            <p>VIEW PROJECTS</p>
          </div>
          <img
            src={appDesign}
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

export default WebDesignContent;
