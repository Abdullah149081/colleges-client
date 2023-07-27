import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Admission from "../components/Admisstion/Admisstion";
import CollageRoute from "../components/CollageRoute/CollageRoute";
import ErrorPage from "../components/ErrorPgae/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import MyCollage from "../components/MyCollage/MyCollage";
import CollageDetails from "../components/collageDetails/CollageDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Register />,
      },
      {
        path: "/colleges",
        element: <CollageRoute />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/my-College",
        element: <MyCollage />,
      },
      {
        path: "/collage-details/:id",
        element: (
          <PrivateRoutes>
            <CollageDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://collage-server-delta.vercel.app/collage/${params.id}`),
      },
    ],
  },
]);

export default router;
