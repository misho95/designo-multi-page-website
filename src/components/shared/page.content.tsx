import { ReactNode, useEffect } from "react";
import PageAspect from "./page.aspect";
import { useLocation } from "react-router-dom";

interface PropsType {
  children: ReactNode;
}

const PageContent = ({ children }: PropsType) => {
  const location = useLocation();

  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <PageAspect customStyle="min-h-screen">{children}</PageAspect>;
};

export default PageContent;
