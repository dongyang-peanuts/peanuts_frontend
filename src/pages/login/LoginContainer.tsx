import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";
import axios from "axios";
import { useState } from "react";
import AdminInfo from "@/models/userInfo.model";

const LoginContainer = () => {
  const loginState = false;
  const navigate = useNavigate();
  const [data, setData] = useState<AdminInfo | undefined>();

  const login = () => {
    axios
      .post("http://kongback.kro.kr:8080/admin/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <LoginView
      navigate={navigate}
      loginState={loginState}
      data={data}
      setData={setData}
      login={login}
    />
  );
};

export default LoginContainer;
