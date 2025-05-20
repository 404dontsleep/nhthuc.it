import type { RouteObject } from "react-router-dom";
import InternFrontendDeveloperPage from "./InternFrontendDeveloperPage";
import InternAndroidDeveloperPage from "./InternAndroidDeveloperPage";
import InternVRDeveloperPage from "./InternVRDeveloperPage";
export const portfolioRouter: RouteObject[] = [
  {
    path: "portfolio/frontend",
    element: <InternFrontendDeveloperPage />,
  },
  {
    path: "portfolio/android",
    element: <InternAndroidDeveloperPage />,
  },
  {
    path: "portfolio/vr",
    element: <InternVRDeveloperPage />,
  },
];
