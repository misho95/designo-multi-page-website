import { animated, useSpring } from "@react-spring/web";
import FrameComponent from "../components/home.page/frame.component";
import ProjectsComponent from "../components/home.page/projects.component";
import AboutProjectComponent from "../components/home.page/about.project.compontent";

const HomePage = () => {
  const animatedPage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 5,
      friction: 120,
      tension: 100,
    },
  });

  return (
    <animated.section
      style={{ ...animatedPage }}
      className={"flex flex-col gap-[100px]"}
    >
      <FrameComponent />
      <ProjectsComponent />
      <AboutProjectComponent />
    </animated.section>
  );
};

export default HomePage;
