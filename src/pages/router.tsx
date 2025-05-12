import { Outlet, type RouteObject } from "react-router-dom";
import ErrorBoundary from "../layouts/ErrorBoundary";
import { portfolioRouter } from "./portfolio/router";
export const router: RouteObject[] = [
  {
    path: "nhthuc.it/",
    element: (
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    ),
    children: [...portfolioRouter],
  },
  {
    path: "*",
    element: <>404</>,
  },
];
