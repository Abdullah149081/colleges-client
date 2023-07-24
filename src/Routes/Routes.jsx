import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
      },
    ],
  },
]);

export default router;
