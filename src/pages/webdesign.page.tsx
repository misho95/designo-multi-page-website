import { animated, useSpring } from "@react-spring/web";
import WebDesignContent from "../components/webdesign/webdesign.content";

const WebDesignPage = () => {
  const animateWebDesignPage = useSpring({
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
      style={{ ...animateWebDesignPage }}
      className={"flex flex-col gap-[60px]"}
    >
      <WebDesignContent />
    </animated.section>
  );
};

export default WebDesignPage;
