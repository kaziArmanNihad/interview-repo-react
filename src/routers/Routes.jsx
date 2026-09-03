import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/shared/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/about",
        Component: About,
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
