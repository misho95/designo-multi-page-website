import { Link } from "react-router-dom";
import WebDesignCard from "../webdesign/webdesign.card";
import webDesign from "../../assets/home/desktop/image-web-design-large.jpg";
import GrapDesign from "../../assets/home/desktop/image-graphic-design.jpg";
import ContentHeader from "../shared/content.header";
import ContentProjects from "../shared/content.projects";

const GraphicContent = () => {
  const data = [
    {
      id: 1,
      title: "tim brown",
      text: "A book cover designed for Tim Brown’s new release, ‘Change’",
      img: "/assets/graphic-design/desktop/image-change.jpg",
    },
    {
      id: 2,
      title: "boxed water",
      text: "A simple packaging concept made for Boxed Water",
      img: "/assets/graphic-design/desktop/image-boxed-water.jpg",
    },
    {
      id: 3,
      title: "science!",
      text: `A poster made in collaboration with 
      the Federal Art Project`,
      img: "/assets/graphic-design/desktop/image-science.jpg",
    },
  ];

  return (
    <>
      <ContentHeader
        title={"Graphic Design"}
        text={
          " We deliver eye-catching branding materials that are tailored to meet your business objectives."
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

export default GraphicContent;
