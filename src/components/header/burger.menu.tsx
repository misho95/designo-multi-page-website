import { Link } from "react-router-dom";
import { links } from "./header.helper";
import { animated, useSpring } from "@react-spring/web";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const BurgerMenu = () => {
  useLockBodyScroll();
  const animatedBurgerMenu = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 5,
      friction: 10,
      tension: 30,
    },
  });

  return (
    <nav className="sm:hidden w-full min-h-screen bg-black/30 fixed top-[96px] left-0 backdrop-blur-3xl z-50 select-none overflow-hidden">
      <animated.div
        style={{ ...animatedBurgerMenu }}
        className=" bg-Black py-10 flex flex-col items-center gap-[26px]"
      >
        {links.map((l, index) => {
          return (
            <Link key={index} to={l.link} className="text-white text-[24px]">
              {l.name.toUpperCase()}
            </Link>
          );
        })}
      </animated.div>
    </nav>
  );
};

export default BurgerMenu;
