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
      <div className="w-full h-[640px] bg-Peach rounded-lg relative overflow-hidden flex flex-col gap-10 justify-center items-start p-20">
        <div className="w-1/2 flex flex-col gap-6">
          <h1 className="text-[48px] text-white">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-[16px] text-white">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="w-[152px] h-[56px] bg-white rounded-lg">
            LEARN MORE
          </button>
        </div>
        <img src={HomeBgPattern} className="absolute right-0" />
        <img src={HomeHeroPhone} className="absolute right-0 top-10 w-1/2" />
      </div>
    </animated.section>
  );
};

export default HomePage;
