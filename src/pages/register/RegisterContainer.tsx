import { useNavigate } from "react-router-dom";
import RegisterView from "./RegisterView";
import { useState } from "react";
import AdminInfo from "@/models/userInfo.model";
import axios from "axios";

const RegisterContainer = () => {
  const [data, setData] = useState<AdminInfo>();
  const [pwc, setPwc] = useState<boolean>(true);
  const navigate = useNavigate();

  const register = () => {
    if (pwc) {
      axios
        .post("http://kongback.kro.kr:8080/admin/signup", data)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <RegisterView
      navigate={navigate}
      data={data}
      setData={setData}
      pwc={pwc}
      setPwc={setPwc}
      register={register}
    />
  );
};

export default RegisterContainer;
