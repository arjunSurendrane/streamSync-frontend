import { Suspense, lazy } from "react";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback="loading">
      <Component {...props} />
    </Suspense>
  );

export const HomePage = Loadable(lazy(() => import("../pages/Home")));
export const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
export const HistoryPage = Loadable(lazy(() => import("../pages/History")));
export const StreamingPage = Loadable(
  lazy(() => import("../pages/StreamingPage"))
);
