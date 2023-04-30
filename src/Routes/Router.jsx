/** @format */

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import NotFoundPage from "../components/NotFoundPage";
import Main from "../layout/Main";
import Destination from "../components/Destination";
import Home from "../layout/Home";
import Booking from "../components/Booking";
import BookingProcess from "../components/BookingProcess";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/booking/:id",
        element: <Booking />,
        loader: ({ params }) =>
          fetch(
            `https://re-travel-server-shajib-dv.vercel.app/data/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/destination",
    element: <Destination />,
    loader: () => fetch("https://re-travel-server-shajib-dv.vercel.app/data"),
  },
  {
    path: "/booking",
    element: (
      <PrivateRoute>
        <BookingProcess />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default Router;
