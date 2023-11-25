import laptop from "../../assets/home/desktop/image-web-design-large.jpg";
import appDesign from "../../assets/home/desktop/image-app-design.jpg";
import GrapDesign from "../../assets/home/desktop/image-graphic-design.jpg";
import { Link } from "react-router-dom";

const ProjectsComponent = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-[20px] h-[640px] select-none">
      <Link
        to={"/webdesign"}
        className="h-[250px] sm:h-[200px] lg:h-full col-span-1 row-span-2 rounded-xl overflow-hidden relative group"
      >
        <div className="bg-Peach/70 w-full h-full absolute z-20 opacity-0 group-hover:opacity-100 duration-300"></div>
        <div className="w-full h-full absolute z-20 flex justify-center items-center flex-col gap-6 text-white select-none">
          <h1 className="text-[40px]">WEB DESIGN</h1>
          <p>VIEW PROJECTS</p>
        </div>
        <img src={laptop} className="w-full h-full object-cover absolute" />
      </Link>

      <Link
        to={"/appdesign"}
        className="w-full h-[250px] sm:h-[200px] lg:h-[308px] rounded-xl overflow-hidden relative group"
      >
        <div className="bg-Peach/70 w-full h-full absolute z-20 opacity-0 group-hover:opacity-100 duration-300"></div>
        <div className="w-full h-full absolute z-20 flex justify-center items-center flex-col gap-6 text-white select-none">
          <h1 className="text-[40px]">APP DESIGN</h1>
          <p>VIEW PROJECTS</p>
        </div>
        <img src={appDesign} className="w-full h-full object-cover absolute" />
      </Link>

      <Link
        to={"/graphicdesign"}
        className="w-full h-[250px] sm:h-[200px] lg:h-[308px] rounded-xl overflow-hidden relative group"
      >
        <div className="bg-Peach/70 w-full h-full absolute z-20 opacity-0 group-hover:opacity-100 duration-300"></div>
        <div className="w-full h-full absolute z-20 flex justify-center items-center flex-col gap-6 text-white select-none">
          <h1 className="text-[40px]">GRAPHIC DESIGN</h1>
          <p>VIEW PROJECTS</p>
        </div>
        <img src={GrapDesign} className="w-full h-full object-cover absolute" />
      </Link>
    </div>
  );
};

export default ProjectsComponent;
