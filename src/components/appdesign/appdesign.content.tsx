import WebDesignCard from "../webdesign/webdesign.card";
import ContentHeader from "../shared/content.header";
import ContentProjects from "../shared/content.projects";
import { appDesigneData } from "../shared/data.helper";

const AppDesignContent = () => {
  return (
    <>
      <ContentHeader
        title={"App Design"}
        text={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />

      <div className="flex flex-wrap gap-[20px]">
        {appDesigneData.map((d) => {
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
