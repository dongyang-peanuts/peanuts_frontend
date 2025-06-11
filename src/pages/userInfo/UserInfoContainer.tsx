import { useEffect, useState } from "react";
import UserInfoView from "./UserInfoView";
import axios from "axios";

const UserInfoContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/users")
      .then((res) => {
        console.log(res);
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserInfoView
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      data={userList}
    />
  );
};

export default UserInfoContainer;
