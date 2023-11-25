import { animated, useSpring } from "@react-spring/web";
import WebDesignContent from "../components/webdesign/webdesign.content";

const WebDesignPage = () => {
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
      <WebDesignContent />
    </animated.section>
  );
};

export default WebDesignPage;
