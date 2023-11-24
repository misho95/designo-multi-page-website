import WebDesignCard from "../webdesign/webdesign.card";

import ContentHeader from "../shared/content.header";
import ContentProjects from "../shared/content.projects";
import { graphicData } from "../shared/data.helper";

const GraphicContent = () => {
  return (
    <>
      <ContentHeader
        title={"Graphic Design"}
        text={
          " We deliver eye-catching branding materials that are tailored to meet your business objectives."
        }
      />
      <div className="flex flex-wrap gap-[20px]">
        {graphicData.map((d) => {
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
