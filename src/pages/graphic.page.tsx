import { animated, useSpring } from "@react-spring/web";
import AppDesignContent from "../components/appdesign/appdesign.content";
import GraphicContent from "../components/graphic/graphic.content";

const GraphicPage = () => {
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
      className={"flex flex-col gap-[60px]"}
    >
      <GraphicContent />
    </animated.section>
  );
};

export default GraphicPage;
