import PageAspect from "../page.aspect";
import footerPattern from "../../../assets/shared/desktop/bg-pattern-call-to-action.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-Black h-[393px] flex justify-center relative mt-[200px] pt-[200px]">
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
      <PageAspect customStyle={"text-white"}>footer</PageAspect>
    </footer>
  );
};

export default Footer;
