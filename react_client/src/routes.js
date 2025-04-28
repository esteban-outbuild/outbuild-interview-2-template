import { createBrowserRouter } from "react-router";
import App from "./App";
import Gantts from "./views/gantts";

export const router = createBrowserRouter([
  {
    Component: App,
    children: [{ path: "/", Component: Gantts }],
  },
]);
