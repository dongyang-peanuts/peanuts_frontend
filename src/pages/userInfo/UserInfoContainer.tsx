import { useState } from "react";
import UserInfoView from "./UserInfoView";

const UserInfoContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <UserInfoView currentPage={currentPage} setCurrentPage={setCurrentPage} />
  );
};

export default UserInfoContainer;
