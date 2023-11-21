import { animated, useSpring } from "@react-spring/web";
import HomeBgPattern from "../assets/home/desktop/bg-pattern-hero-home.svg";
import HomeHeroPhone from "../assets/home/desktop/image-hero-phone.png";

const HomePage = () => {
  const animateHomePage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 5,
      friction: 120,
      tension: 100,
    },
  });

  return (
    <animated.section style={{ ...animateHomePage }}>
      <div className="w-full h-[703px] sm:h-[843px] lg:h-[640px] bg-Peach rounded-lg relative overflow-hidden flex flex-col gap-10 justify-start items-center lg:justify-center lg:items-start p-[10px] pt-20 sm:p-20 select-none">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center lg:items-start text-center ">
          <h1 className="text-[32px] sm:text-[48px] text-white">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-[15px] sm:text-[16px] text-white">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="w-[152px] h-[56px] bg-white rounded-lg">
            LEARN MORE
          </button>
        </div>
        <img
          src={HomeBgPattern}
          className="absolute -right-[100px] lg:right-0"
        />
        <img
          src={HomeHeroPhone}
          className="absolute -bottom-40 sm:w-4/5 sm:-bottom-[340px] lg:right-0 lg:top-10 lg:bottom-0 lg:w-1/2"
        />
      </div>
    </animated.section>
  );
};

export default HomePage;
