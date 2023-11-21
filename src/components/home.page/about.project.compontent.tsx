import passionate from "../../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
import friendly from "../../assets/home/desktop/illustration-friendly.svg";
import AboutProjectCard from "./about.project.card";

const AboutProjectComponent = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center select-none pt-20 sm:pt-0">
      <AboutProjectCard
        img={passionate}
        title={"PASSIONATE"}
        text={` Each project starts with an in-depth brand research to ensure we only
        create products that serve a purpose. We merge art, design, and
        technology into exciting new solutions.`}
      />
      <AboutProjectCard
        img={resourceful}
        title={"RESOURCEFUL"}
        text={`Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.`}
      />
      <AboutProjectCard
        img={friendly}
        title={"FRIENDLY"}
        text={`We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.`}
      />
    </section>
  );
};

export default AboutProjectComponent;
