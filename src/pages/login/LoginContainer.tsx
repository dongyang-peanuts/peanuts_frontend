import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";
import axios from "axios";
import { useState } from "react";
import AdminInfo from "@/models/userInfo.model";

const LoginContainer = () => {
  const [data, setData] = useState<AdminInfo | undefined>();
  const [idState, setIdState] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = () => {
    axios
      .post("http://kongback.kro.kr:8080/admin/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("id", data.adminId);
        navigate("/all-monitoring");
      })
      .catch((err) => {
        if (err.status === 400) {
          setIdState(true);
        }
        console.log(err);
      });
  };
  return (
    <LoginView
      navigate={navigate}
      idState={idState}
      data={data}
      setData={setData}
      login={login}
    />
  );
};

export default LoginContainer;
