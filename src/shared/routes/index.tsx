import { createBrowserRouter, Navigate } from "react-router-dom";
import { ERoutesNames } from "../utils/routes-name";
import LoginPage from "../../features/auth/pages/LoginPage";
import ResetPage from "../../features/auth/pages/ResetPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import AuthLayout from "../views/components/auth-layout/auth-layout";
import Layout from "../views/components/layout/layout";
import DashboardLayout from "../views/components/dashboard-layout/dashboard-layout";
import DashboardUtilisateursPage from "../../features/dashboard/pages/dashboard-utilisateurs-page";
import DashboardBasePage from "../../features/dashboard/pages/dashboard-base-page";
import DashboardControle from "../../features/dashboard/pages/dashboard-controle";
import DashboardWorkflowPage from "../../features/dashboard/pages/dashboard-workflow-page";
import DashboardAlertsPage from "../../features/dashboard/pages/dashboard-alerts-page";
import DashboardRolesPage from "../../features/dashboard/pages/dashboard-roles-page";
import DashboardReferencesPage from "../../features/dashboard/pages/dashboard-references-page";
import DashboardCalendrierPage from "../../features/dashboard/pages/dashboard-calendrier-page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout>
        <Layout />
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
            element: <DashboardUtilisateursPage />,
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
    ],
  },
]);
