import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Elements";
import NotFound from "../pages/Notfound";
import AuthLayout from "../component/AuthLayout";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
