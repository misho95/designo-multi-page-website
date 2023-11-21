import PageAspect from "../shared/page.aspect";
import footerPattern from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";
import { animated, useSpring } from "@react-spring/web";
import Logo from "../../assets/shared/desktop/logo-light.png";
import { links } from "../header/header.helper";
import { Link } from "react-router-dom";
import fbIcon from "../../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import pinterestIcon from "../../assets/shared/desktop/icon-pinterest.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import youtubeIcon from "../../assets/shared/desktop/icon-youtube.svg";

const Footer = () => {
  const animatedFooter = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 5,
      friction: 120,
      tension: 100,
    },
  });

  return (
    <animated.footer
      style={{ ...animatedFooter }}
      className="w-full bg-Black h-[815px] sm:h-[423px] lg:h-[393px] flex justify-center relative mt-[200px] pt-[200px]"
    >
      <PageAspect
        customStyle={
          "bg-Peach absolute h-[379px] sm:h-[350px] lg:h-[292px] rounded-lg top-0 -translate-y-1/2 select-none"
        }
      >
        <img
          src={footerPattern}
          className="absolute w-full h-full object-cover"
        />

        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-[100px] text-white absolute z-20 w-full h-full gap-3 sm:gap-10">
          <div className="flex flex-col gap-1 w-full lg:w-1/2 text-center">
            <h1 className="text-[32px] sm:text-[40px] ">
              Let’s talk about your project
            </h1>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className="bg-white text-Black active:bg-LightPeach active:text-white w-[152px] h-[56px] rounded-lg">
            GET IN TOUCH
          </button>
        </div>
      </PageAspect>
      <PageAspect
        customStyle={
          "text-white flex flex-col gap-[30px] justify-center items-center text-center sm:text-left sm:justify-start sm:items-stretch"
        }
      >
        <section className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between gap-[20px]">
          <img src={Logo} className="w-[202px] h-[27px]" />
          <nav className="flex flex-col sm:flex-row gap-[30px]">
            {links.map((l, index) => {
              return (
                <Link key={index} to={l.link}>
                  {l.name.toUpperCase()}
                </Link>
              );
            })}
          </nav>
        </section>
        <span className="w-full h-[1px] bg-DarkGrey"></span>
        <section className="flex flex-col sm:flex-row justify-between gap-[20px]">
          <div className="text-white/50 w-[223px]">
            <h1 className="font-semibold">Designo Central Office</h1>
            <p>3886 Wellington Street Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="text-white/50 w-[223px] font-semibold">
            <h1>Contact Us (Central Office)</h1>
            <p>P : +1 253-863-8967 M : contact@designo.co</p>
          </div>
          <div className={"flex gap-3 justify-center items-end select-none"}>
            <img src={fbIcon} className="w-[24px] h-[24px]" />
            <img src={youtubeIcon} className="w-[24px] h-[24px]" />
            <img src={twitterIcon} className="w-[24px] h-[24px]" />
            <img src={pinterestIcon} className="w-[24px] h-[24px]" />
            <img src={instagramIcon} className="w-[24px] h-[24px]" />
          </div>
        </section>
      </PageAspect>
    </animated.footer>
  );
};

export default Footer;
