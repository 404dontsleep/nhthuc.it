import type { RouteObject } from "react-router-dom";
import InternFrontendDeveloperPage from "./InternFrontendDeveloperPage";
export const portfolioRouter: RouteObject[] = [
  {
    path: "portfolio",
    element: <InternFrontendDeveloperPage />,
  },
];
