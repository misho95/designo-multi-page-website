import aboutHero from "../../assets/about/desktop/image-about-hero.jpg";
import worldClassImg from "../../assets/about/desktop/image-world-class-talent.jpg";
import bgPatternHero from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";

const AboutContent = () => {
  return (
    <>
      <div className="bg-Peach flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <img
          src={aboutHero}
          className="block lg:hidden h-[320px] object-cover object-center"
        />
        <div className="relative text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-[50px]">
          <img src={bgPatternHero} className="absolute left-0 -top-40" />
          <h1 className="text-[32px] sm:text-[48px]">About Us</h1>
          <p className="text-[15px] sm:text-[16px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <img src={aboutHero} className="hidden lg:block" />
      </div>
      <div className="bg-[#FDF3F0] flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <img
          src={worldClassImg}
          className="h-[320px] lg:h-[640px] object-cover object-center"
        />
        <div className="relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-[50px] gap-[30px]">
          <h1 className="text-[32px] sm:text-[48px] text-Peach">
            World-class talent
          </h1>
          <p className="text-[15px] sm:text-[16px] text-Black">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="text-[15px] sm:text-[16px] text-Black">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
