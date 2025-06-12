import { useEffect, useState } from "react";
import UserInfoView from "./UserInfoView";
import axios from "axios";

const UserInfoContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [checkedUserKeys, setCheckedUserKeys] = useState<number[]>([]);
  const [search, setSearch] = useState<string>("");
  const isAllChecked =
    userList.length > 0 && checkedUserKeys.length === userList.length;

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

  const onClickSearchBtn = () => {
    console.log(search);
  };

  const handleDelete = () => {
    console.log("선택된 userKey 목록:", checkedUserKeys);

    checkedUserKeys.map((item) => {
      axios
        .delete(`/admin/users/${item}`)
        .then((res) => {
          console.log("삭제에 성공하였습니다", res);
          setCheckedUserKeys([]);
          alert("사용자 삭제를 성공하였습니다.");
        })
        .catch((err) => {
          console.log(err);
          alert("사용자 삭제를 실패하였습니다.");
        });
    });
  };

  const filteredData = userList.filter((item) => {
    if (!search) return true;
    return item.userEmail?.toLowerCase().includes(search.toLowerCase());
  });

  if (!userList) {
    return <div>로딩중....</div>;
  }

  return (
    <UserInfoView
      currentPage={currentPage}
      data={filteredData}
      setCurrentPage={setCurrentPage}
      isAllChecked={isAllChecked}
      checkedUserKeys={checkedUserKeys}
      handleCheckAll={handleCheckAll}
      handleCheckOne={handleCheckOne}
      handleDelete={handleDelete}
      setSearch={setSearch}
      onClickSearchBtn={onClickSearchBtn}
    />
  );
};

export default UserInfoContainer;
