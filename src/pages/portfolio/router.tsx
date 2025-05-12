import type { RouteObject } from "react-router-dom";
import Portfolio from "./index";
export const portfolioRouter: RouteObject[] = [
  {
    path: "portfolio",
    element: <Portfolio />,
  },
];
