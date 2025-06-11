import { useEffect, useState } from "react";
import UserInfoView from "./UserInfoView";
import axios from "axios";

const UserInfoContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [checkedUserKeys, setCheckedUserKeys] = useState<number[]>([]);

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
  }, [checkedUserKeys]);

  const isAllChecked =
    userList.length > 0 && checkedUserKeys.length === userList.length;

  const handleCheckAll = (checked: boolean) => {
    if (checked) {
      setCheckedUserKeys(userList.map((item) => item.userKey));
    } else {
      setCheckedUserKeys([]);
    }
  };

  const handleCheckOne = (userKey: number, checked: boolean) => {
    setCheckedUserKeys((prev) =>
      checked ? [...prev, userKey] : prev.filter((key) => key !== userKey)
    );
  };

  const handleDelete = () => {
    console.log("선택된 userKey 목록:", checkedUserKeys);

    checkedUserKeys.map((item) => {
      axios
        .delete(`/admin/users/${item}`)
        .then((res) => {
          console.log("삭제에 성공하였습니다", res);
          setCheckedUserKeys([]);
          alert("사용자 삭제를 성공하였습니다");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <UserInfoView
      currentPage={currentPage}
      data={userList}
      setCurrentPage={setCurrentPage}
      isAllChecked={isAllChecked}
      checkedUserKeys={checkedUserKeys}
      handleCheckAll={handleCheckAll}
      handleCheckOne={handleCheckOne}
      handleDelete={handleDelete}
    />
  );
};

export default UserInfoContainer;
