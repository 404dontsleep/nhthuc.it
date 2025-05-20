import type { RouteObject } from "react-router-dom";
import InternFrontendDeveloperPage from "./InternFrontendDeveloperPage";
import InternAndroidDeveloperPage from "./InternAndroidDeveloperPage";
export const portfolioRouter: RouteObject[] = [
  {
    path: "portfolio/frontend",
    element: <InternFrontendDeveloperPage />,
  },
  {
    path: "portfolio/android",
    element: <InternAndroidDeveloperPage />,
  },
];
