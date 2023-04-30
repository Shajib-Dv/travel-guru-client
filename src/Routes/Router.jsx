/** @format */

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import NotFoundPage from "../components/NotFoundPage";
import Main from "../layout/Main";
import Destination from "../components/Destination";
import Home from "../layout/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "destination",
        element: <Destination />,
        loader: () =>
          fetch("https://re-travel-server-shajib-dv.vercel.app/data"),
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default Router;
