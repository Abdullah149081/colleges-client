import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import ErrorPage from "../components/ErrorPgae/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
      },
    ],
  },
]);

export default router;
