import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const PageContainer = ({ children }: PropsType) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default PageContainer;
