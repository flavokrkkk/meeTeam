import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { ERoutesNames } from "../utils/routes-name";
import LoginPage from "../../features/auth/pages/LoginPage";
import ResetPage from "../../features/auth/pages/ResetPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import DashboardUtilisateursPage from "../../features/dashboard/pages/dashboard-utilisateurs-page/dashboard-utilisateurs-page";
import DashboardBasePage from "../../features/dashboard/pages/dashboard-base-page/dashboard-base-page";
import DashboardWorkflowPage from "../../features/dashboard/pages/dashboard-workflow-page";
import DashboardAlertsPage from "../../features/dashboard/pages/dashboard-alerts-page";
import DashboardRolesPage from "../../features/dashboard/pages/dashboard-roles-page";
import DashboardReferencesPage from "../../features/dashboard/pages/dashboard-references-page";
import DashboardCalendrierPage from "../../features/dashboard/pages/dashboard-calendrier-page";
import DashboardLayout from "../../features/dashboard/views/dashboard-layout/dashboard-layout";
import AuthLayout from "../views/auth-layout/auth-layout";
import DashboardEdition from "../../features/dashboard/pages/dashboard-utilisateurs-page/dashboard-edition/dashboard-edition";
import DashboardControle from "../../features/dashboard/pages/dashboard-controle-page/dashboard-controle";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "",
        element: <Navigate to={ERoutesNames.DASHBOARD} replace />,
      },
      {
        path: ERoutesNames.DASHBOARD,
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: (
              <Navigate to={ERoutesNames.DASHBOARD_UTILISATEURS} replace />
            ),
          },
          {
            path: ERoutesNames.DASHBOARD_UTILISATEURS,
            element: <Outlet />,
            children: [
              {
                path: ERoutesNames.DASHBOARD_UTILISATEURS,
                element: <DashboardUtilisateursPage />,
              },
              {
                path: ERoutesNames.DASHBOARD_EDITION,
                element: <DashboardEdition />,
              },
            ],
          },
          {
            path: ERoutesNames.DASHBOARD_BASE,
            element: <DashboardBasePage />,
          },
          {
            path: ERoutesNames.DASHBOARD_CONTROLE,
            element: <DashboardControle />,
          },
          {
            path: ERoutesNames.DASHBOARD_WORKFLOW,
            element: <DashboardWorkflowPage />,
          },
          {
            path: ERoutesNames.DASHBOARD_ALERTES,
            element: <DashboardAlertsPage />,
          },
          {
            path: ERoutesNames.DASHBOARD_ROLES,
            element: <DashboardRolesPage />,
          },
          {
            path: ERoutesNames.DASHBOARD_PREFERENCES,
            element: <DashboardReferencesPage />,
          },
          {
            path: ERoutesNames.DASHBOARD_CALENDRIER,
            element: <DashboardCalendrierPage />,
          },
          {
            path: "*",
            element: <DashboardUtilisateursPage />,
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
      {
        path: "*",
        element: <Navigate to={ERoutesNames.DASHBOARD} replace />,
      },
    ],
  },
]);
