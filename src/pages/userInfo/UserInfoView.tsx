import MainButton from "@/components/buttons/MainButton";
import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";
import TableBody from "@/components/table/TableBody";
import TableHeader from "@/components/table/TableHeader";

import SearchIcon from "@/assets/icons/Search.png";
import PageNation from "@/components/PageNation";
import { UserList } from "@/models/userInfo.model";

interface PropsType {
  currentPage: number;
  data: Array<UserList>;
  isAllChecked: boolean;
  checkedUserKeys: number[];
  setCurrentPage: (page: number) => void;
  handleCheckAll: (checked: boolean) => void;
  handleCheckOne: (userKey: number, checked: boolean) => void;
  handleDelete: () => void;
  setSearch: (text: string) => void;
  onClickSearchBtn: () => void;
}

const UserInfoView = ({
  currentPage,
  data,
  isAllChecked,
  checkedUserKeys,
  setCurrentPage,
  handleCheckAll,
  handleCheckOne,
  handleDelete,
  setSearch,
  onClickSearchBtn,
}: PropsType) => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen pb-14">
      <Header />
      <BottomHeader page="info" />
      <div>
        <div className="w-[1116px] m-auto">
          <div className="font-bold text-2xl mt-[34px] mb-[14px]">
            전체 사용자 정보 조회
          </div>
          <div className="flex">
            <div className="border w-[926px] h-14 mr-6 border-[#d9d9d9] flex items-center pr-4">
              <input
                type="text"
                className="border-none w-[100%] h-[48px] outline-none bg-[#F6F7FB] border pl-2"
                onChange={(e) => setSearch(e.target.value)}
              />
              <img src={SearchIcon} className="w-7 h-7 " />
            </div>
            <MainButton
              text="검색"
              color="white"
              borderColor="none"
              backgroundColor="#6A9850"
              width="166px"
              height="56px"
              onClick={onClickSearchBtn}
            />
          </div>
          <button
            onClick={handleDelete}
            className="mt-[14px] mb-2 border border-[#6A9850] rounded-lg w-[95px] h-[38px] text-[#6A9850]"
          >
            삭제
          </button>
          <div>
            <table className="w-[1116px] border-[#d9d9d9] rounded-lg overflow-hidden">
              <TableHeader
                isAllChecked={isAllChecked}
                onCheckAll={handleCheckAll}
                data={["이메일", "주소", "기기번호", "가입일"]}
              />
              {data &&
                data.map((item) => (
                  <TableBody
                    isChecked={checkedUserKeys.includes(item.userKey)}
                    onCheck={handleCheckOne}
                    data={item}
                  />
                ))}
            </table>
          </div>
          {/* <PageNation
            totalPages={5}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default UserInfoView;
