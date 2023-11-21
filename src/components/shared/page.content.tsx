import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const PageContent = ({ children }: PropsType) => {
  return (
    <div className="w-[327px] sm:w-[689px] lg:w-[1111px] min-h-screen font-jost">
      {children}
    </div>
  );
};

export default PageContent;
