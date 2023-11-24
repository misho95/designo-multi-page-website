import { Link } from "react-router-dom";
import WebDesignCard from "../webdesign/webdesign.card";
import webDesign from "../../assets/home/desktop/image-web-design-large.jpg";
import GrapDesign from "../../assets/home/desktop/image-graphic-design.jpg";
import pattern from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";
import patternMobile from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import ContentHeader from "../shared/content.header";
import ContentProjects from "../shared/content.projects";

const AppDesignContent = () => {
  const data = [
    {
      id: 1,
      title: "airfilter",
      text: "Solving the problem of poor indoor air quality by filtering the air",
      img: "/assets/app-design/desktop/image-airfilter.jpg",
    },
    {
      id: 2,
      title: "eyecam",
      text: "Product that lets you edit your favorite photos and videos at any time",
      img: "/assets/app-design/desktop/image-eyecam.jpg",
    },
    {
      id: 3,
      title: "faceit",
      text: "Get to meet your favorite internet superstar with the faceit app",
      img: "/assets/app-design/desktop/image-faceit.jpg",
    },
    {
      id: 4,
      title: "todo",
      text: "A todo app that features cloud sync with light and dark mode",
      img: "/assets/app-design/desktop/image-todo.jpg",
    },
    {
      id: 5,
      title: "LOOPSTUDIOS",
      text: "A VR experience app made for Loopstudios",
      img: "/assets/app-design/desktop/image-loopstudios.jpg",
    },
  ];

  return (
    <>
      <ContentHeader
        title={"App Design"}
        text={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
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

export default AppDesignContent;
