import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/shared/NotFound";
import Documentation from "../pages/resources/Documentation";
import HelpCenter from "../pages/resources/HelpCenter";
import Community from "../pages/resources/Community";
import Status from "../pages/resources/Status";

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
      {
        path: "/documentation",
        Component: Documentation,
      },
      {
        path: "/help-center",
        Component: HelpCenter,
      },
      {
        path: "/community",
        Component: Community,
      },
      {
        path: "/status",
        Component: Status,
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
