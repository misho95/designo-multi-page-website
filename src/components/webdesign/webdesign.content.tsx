import WebDesignCard from "./webdesign.card";
import ContentHeader from "../shared/content.header";
import ContentProjects from "../shared/content.projects";
import { webDesignData } from "../shared/data.helper";

const WebDesignContent = () => {
  return (
    <>
      <ContentHeader
        title={"Web Design"}
        text={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <div className="flex flex-wrap gap-[20px]">
        {webDesignData.map((d) => {
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
