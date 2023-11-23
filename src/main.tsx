import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home.page";
import Header from "./components/header/header";
import PageContainer from "./components/shared/page.container";
import PageContent from "./components/shared/page.content";
import Footer from "./components/footer/footer";
import WebDesignPage from "./pages/webdesign.page";
import AppDesignPage from "./pages/appdesign.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <HomePage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
  {
    path: "/webdesign",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <WebDesignPage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
  {
    path: "/appdesign",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <AppDesignPage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
