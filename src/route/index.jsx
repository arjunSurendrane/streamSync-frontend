import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HistoryPage, HomePage, LandingPage, StreamingPage } from "./Elements";
import NotFound from "../pages/Notfound";
import AuthLayout from "../component/AuthLayout";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/stream",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "history",
          element: <HistoryPage />,
        },
        {
          path: "online",
          element: <StreamingPage />,
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
