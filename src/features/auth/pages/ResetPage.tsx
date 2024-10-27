import FormContent from "../components/form-content/form-content";
import ResetForm from "../components/reset-form/reset-form";
import { EFormModes } from "../utils/form-mode";

const ResetPage = () => {
  return (
    <FormContent mode={EFormModes.RESET_FORM}>
      <ResetForm />
    </FormContent>
  );
};

export default ResetPage;
