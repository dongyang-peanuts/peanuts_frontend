import { useParams, useSearchParams } from "react-router-dom";
import UserInfoDetailView from "./UserInfoDetailView";
import axios from "axios";
import { useEffect, useState } from "react";

const UserInfoDetailContainer = () => {
  const [data, setData] = useState();
  const [param] = useSearchParams();
  const userKey = param.get("userKey");

  console.log(userKey);

  useEffect(() => {
    axios
      .get(`http://kongback.kro.kr:8080/admin/users/${userKey}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <UserInfoDetailView data={data} />;
};

export default UserInfoDetailContainer;
