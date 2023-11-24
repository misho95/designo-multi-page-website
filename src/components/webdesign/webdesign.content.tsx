import { Link } from "react-router-dom";
import WebDesignCard from "./webdesign.card";
import appDesign from "../../assets/home/desktop/image-app-design.jpg";
import GrapDesign from "../../assets/home/desktop/image-graphic-design.jpg";
import ContentHeader from "../shared/content.header";
import ContentProjects from "../shared/content.projects";

const WebDesignContent = () => {
  const data = [
    {
      id: 1,
      title: "express",
      text: "A multi-carrier shipping website for ecommerce businesses",
      img: "/assets/web-design/desktop/image-express.jpg",
    },
    {
      id: 2,
      title: "transfer",
      text: "Site for low-cost money transfers and sending money within seconds",
      img: "/assets/web-design/desktop/image-transfer.jpg",
    },
    {
      id: 3,
      title: "photon",
      text: "A state-of-the-art music player with high-resolution audio and DSP effects",
      img: "/assets/web-design/desktop/image-photon.jpg",
    },
    {
      id: 4,
      title: "builder",
      text: "Connects users with local contractors based on their location",
      img: "/assets/web-design/desktop/image-builder.jpg",
    },
    {
      id: 5,
      title: "blogr",
      text: "Blogr is a platform for creating an online blog or publication",
      img: "/assets/web-design/desktop/image-blogr.jpg",
    },
    {
      id: 6,
      title: "camp",
      text: "Get expert training in coding, data, design, and digital marketing",
      img: "/assets/web-design/desktop/image-camp.jpg",
    },
  ];

  return (
    <>
      <ContentHeader
        title={"Web Design"}
        text={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
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
        <ContentProjects />
      </div>
    </>
  );
};

export default WebDesignContent;
