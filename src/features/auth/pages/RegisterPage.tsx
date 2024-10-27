import FormContent from "../components/form-content/form-content";
import RegisterForm from "../components/register-form/register-form";
import { EFormModes } from "../utils/form-mode";

const RegisterPage = () => {
  return (
    <FormContent mode={EFormModes.REGISTER_FORM}>
      <RegisterForm />
    </FormContent>
  );
};

export default RegisterPage;
