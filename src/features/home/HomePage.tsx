import { useUnit } from "effector-react";
import { loginStore } from "../../entities/user/user";

const HomePage = () => {
  const login = useUnit(loginStore);
  console.log(login);
  return <div>wddwd</div>;
};

export default HomePage;
