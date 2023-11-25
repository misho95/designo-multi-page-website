import { Link, useLocation } from "react-router-dom";
import webDesign from "../../assets/home/desktop/image-web-design-large.jpg";
import GrapDesign from "../../assets/home/desktop/image-graphic-design.jpg";
import appDesign from "../../assets/home/desktop/image-app-design.jpg";

const ContentProjects = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/webdesign" && (
        <Link
          to={"/webdesign"}
          className="w-full h-[250px] sm:h-[200px] lg:h-[308px] rounded-xl overflow-hidden relative group"
        >
          <div className="bg-Peach/70 w-full h-full absolute z-20 opacity-0 group-hover:opacity-100 duration-300"></div>
          <div className="w-full h-full absolute z-20 flex justify-center items-center flex-col gap-6 text-white select-none">
            <h1 className="text-[40px]">Web DESIGN</h1>
            <p>VIEW PROJECTS</p>
          </div>
          <img
            src={webDesign}
            className="w-full h-full object-cover absolute"
          />
        </Link>
      )}
      {location.pathname !== "/appdesign" && (
        <Link
          to={"/appdesign"}
          className="w-full h-[250px] sm:h-[200px] lg:h-[308px] rounded-xl overflow-hidden relative group"
        >
          <div className="bg-Peach/70 w-full h-full absolute z-20 opacity-0 group-hover:opacity-100 duration-300"></div>
          <div className="w-full h-full absolute z-20 flex justify-center items-center flex-col gap-6 text-white select-none">
            <h1 className="text-[40px]">APP DESIGN</h1>
            <p>VIEW PROJECTS</p>
          </div>
          <img
            src={appDesign}
            className="w-full h-full object-cover absolute"
          />
        </Link>
      )}

      {location.pathname !== "/graphicdesign" && (
        <Link
          to={"/graphicdesign"}
          className="w-full h-[250px] sm:h-[200px] lg:h-[308px] rounded-xl overflow-hidden relative group"
        >
          <div className="bg-Peach/70 w-full h-full absolute z-20 opacity-0 group-hover:opacity-100 duration-300"></div>
          <div className="w-full h-full absolute z-20 flex justify-center items-center flex-col gap-6 text-white select-none">
            <h1 className="text-[40px]">GRAPHIC DESIGN</h1>
            <p>VIEW PROJECTS</p>
          </div>
          <img
            src={GrapDesign}
            className="w-full h-full object-cover absolute"
          />
        </Link>
      )}
    </>
  );
};

export default ContentProjects;
