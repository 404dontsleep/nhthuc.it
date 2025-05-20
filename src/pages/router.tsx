import { Link, Outlet, type RouteObject } from "react-router-dom";
import ErrorBoundary from "../layouts/ErrorBoundary";
import { portfolioRouter } from "./portfolio/router";
import { mainRouter } from "./main/router";
export const router: RouteObject[] = [
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    ),
    children: [...mainRouter, ...portfolioRouter],
  },
  {
    path: "*",
    element: (
      <>
        <Link to='/'>Go to home</Link>
      </>
    ),
  },
];
