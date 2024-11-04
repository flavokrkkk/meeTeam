import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ERoutesNames } from "../../utils/routes-name";
import LoginPage from "../../../features/auth/pages/LoginPage";
import Layout from "../../../features/dashboard/views/layout/layout";

interface IAuthLayout {
  children: React.ReactNode;
}

const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("token");
  const { pathname } = useLocation();

  const publicRoutes = [
    ERoutesNames.LOGIN,
    ERoutesNames.REGISTER,
    ERoutesNames.RESET,
  ];

  useEffect(() => {
    if (!isAuth && !publicRoutes.includes(pathname as ERoutesNames)) {
      navigate(ERoutesNames.LOGIN, { replace: true });
    } else if (isAuth && publicRoutes.includes(pathname as ERoutesNames)) {
      navigate(ERoutesNames.DASHBOARD, { replace: true });
    }
  }, [isAuth, pathname]);

  return (
    <div>
      {isAuth ? (
        <Layout>{children}</Layout>
      ) : publicRoutes.includes(pathname as ERoutesNames) ? (
        children
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default AuthLayout;
