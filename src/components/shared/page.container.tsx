import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

import img from "../../assets/shared/desktop/bg-pattern-leaf.svg";

const PageContainer = ({ children }: PropsType) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center relative gap-[20px]">
      <img src={img} className="absolute top-[550px] left-0 -z-10" />
      {children}
    </div>
  );
};

export default PageContainer;
