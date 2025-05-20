import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";

const LoginContainer = () => {
  const loginState = false;
  const navigate = useNavigate();
  return <LoginView navigate={navigate} loginState={loginState} />;
};

export default LoginContainer;
