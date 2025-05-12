import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { router } from "./pages/router.tsx";

const hashRouter = createHashRouter(router);

createRoot(document.getElementById("root")!).render(<RouterProvider router={hashRouter} />);
