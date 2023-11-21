import { ReactNode } from "react";
import PageAspect from "./page.aspect";

interface PropsType {
  children: ReactNode;
}

const PageContent = ({ children }: PropsType) => {
  return <PageAspect customStyle="min-h-screen">{children}</PageAspect>;
};

export default PageContent;
