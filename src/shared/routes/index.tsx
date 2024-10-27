import { createBrowserRouter, Navigate } from "react-router-dom";
import { ERoutesNames } from "../utils/routes-name";
import LoginPage from "../../features/auth/pages/LoginPage";
import HomePage from "../../features/home/HomePage";
import Layout from "../views/layout";
import ResetPage from "../../features/auth/pages/ResetPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Navigate to={ERoutesNames.HOME} replace />,
      },
      {
        path: ERoutesNames.HOME,
        element: <HomePage />,
      },
    ],
  },
  {
    path: ERoutesNames.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: ERoutesNames.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ERoutesNames.RESET,
    element: <ResetPage />,
  },
]);
