import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import { links } from "./header.helper";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import IconHamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import IconHamburgerClose from "../../assets/shared/mobile/icon-close.svg";
import BurgerMenu from "./burger.menu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const animatedHeader = useSpring({
    from: { y: -200 },
    to: { y: 0 },
    config: {
      mass: 5,
      friction: 20,
      tension: 30,
    },
  });

  const [animateIcon, runAnimateIcon] = useSpring(() => ({
    from: { opacity: 1 },
    config: {
      mass: 5,
      friction: 20,
      tension: 30,
    },
  }));

  const iconAnimationHandler = () => {
    runAnimateIcon.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 390 && openMenu) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openMenu]);

  return (
    <>
      {openMenu && <BurgerMenu />}
      <animated.header
        style={{ ...animatedHeader }}
        className="w-full h-[24px]  my-[36px] flex justify-between bg-white select-none"
      >
        <Link to="/">
          <img src={Logo} className="h-[24px]" />
        </Link>
        <span className="hidden sm:block">
          <div className="flex gap-[50px] text-DarkGrey">
            {links.map((l, index) => {
              return (
                <Link key={index} to={l.link}>
                  {l.name.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </span>
        <span className="block sm:hidden">
          <button
            onClick={() => {
              setOpenMenu(!openMenu), iconAnimationHandler();
            }}
          >
            <animated.img
              style={{ ...animateIcon }}
              src={openMenu ? IconHamburgerClose : IconHamburger}
            />
          </button>
        </span>
      </animated.header>
    </>
  );
};

export default Header;
