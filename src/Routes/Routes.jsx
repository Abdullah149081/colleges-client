import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../components/ErrorPgae/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
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
        path: "/collage-details/:id",
        element: (
          <PrivateRoutes>
            <CollageDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/collage/${params.id}`),
      },
    ],
  },
]);

export default router;
