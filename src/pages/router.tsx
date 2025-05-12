import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/tailwind/MainLayout";
import ErrorBoundary from "../layouts/ErrorBoundary";
import { portfolioRouter } from "./portfolio/router";
export const router: RouteObject[] = [
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    ),
  },
  ...portfolioRouter,
];
