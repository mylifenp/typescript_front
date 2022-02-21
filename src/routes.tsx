import { FC } from "react";
import { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingScreen";
import MainLayout from "./components/main-layout";
import DashboardLayout from "./components/dashboard/dashboard-layout";
import AuthGuard from "./components/AuthGuard";

interface Props {}

const Loadable = (Component: FC) => (props: Props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
// Authentication Pages
const LoginPage = Loadable(lazy(() => import("./pages/authentication/login")));
const RegisterPage = Loadable(
  lazy(() => import("./pages/authentication/register"))
);

// Authenticated Pages
const Dashboard = Loadable(lazy(() => import("./pages/dashboard")));
const Sensors = Loadable(lazy(() => import("./pages/dashboard/sensors")));
const Suppliers = Loadable(lazy(() => import("./pages/dashboard/supplier")));

// Other pages
const Home = Loadable(lazy(() => import("./pages/home")));

const routes = [
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "sensors", element: <Sensors /> },
      { path: "suppliers", element: <Suppliers /> },
    ],
  },
  {
    path: "*",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default routes;
