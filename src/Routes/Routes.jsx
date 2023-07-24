import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import ErrorPage from "../components/ErrorPgae/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login/Login";

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
    ],
  },
]);

export default router;
