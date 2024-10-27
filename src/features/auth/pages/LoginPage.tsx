import FormContent from "../components/form-content/form-content";
import LoginForm from "../components/login-form/login-form";
import { EFormModes } from "../utils/form-mode";

const LoginPage = () => {
  return (
    <FormContent mode={EFormModes.LOGIN_FORM}>
      <LoginForm />
    </FormContent>
  );
};

export default LoginPage;
