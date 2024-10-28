import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ERoutesNames } from "../../../utils/routes-name";
import LoginPage from "../../../../features/auth/pages/LoginPage";

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
      console.log("object");
    } else if (isAuth && publicRoutes.includes(pathname as ERoutesNames)) {
      navigate(ERoutesNames.HOME, { replace: true });
      console.log("object");
    }
    console.log("obsssject");
  }, [isAuth, pathname]);

  return <div>{isAuth ? children : <LoginPage />}</div>;
};

export default AuthLayout;
