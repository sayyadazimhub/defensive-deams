import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/layouts/AppLayout";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import Login, { LOGIN_MODAL_ID } from "./components/Login";
import PageLoader from "./components/common/PageLoader";
import ScrollToTop from "./components/routing/ScrollToTop";
import { ROUTE_PATHS } from "./constants/routes";

const Home = lazy(() => import("./home/Home"));
const Signup = lazy(() => import("./components/Signup"));
const Contact = lazy(() => import("./contact/Contact"));
const About = lazy(() => import("./about/About"));
const Strategies = lazy(() => import("./strategies/Strategies"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route
              path={ROUTE_PATHS.STRATEGY}
              element={
                <ProtectedRoute>
                  <Strategies />
                </ProtectedRoute>
              }
            />
            <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
            <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
            <Route path={ROUTE_PATHS.SIGNUP} element={<Signup />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Login modalId={LOGIN_MODAL_ID} />
      <Toaster />
    </>
  );
}

export default App;
