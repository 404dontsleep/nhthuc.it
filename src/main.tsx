import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./pages/router.tsx";

const rootRouter = createBrowserRouter(router);

createRoot(document.getElementById("root")!).render(<RouterProvider router={rootRouter} />);
