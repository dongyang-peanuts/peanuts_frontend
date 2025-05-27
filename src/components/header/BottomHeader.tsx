import { useNavigate } from "react-router-dom";

interface BottomHeader {
  page: string;
}

const BottomHeader = ({ page }: BottomHeader) => {
  const navigate = useNavigate();
  return (
    <div className="border-b bg-white">
      <div className="flex justify-between  max-w-[1116px] m-auto h-[81px]">
        <div className="flex items-center">
          <li
            className={`mr-[65px] list-none ${
              page == "all" ? "border-b-[3px] border-[#6A9850]" : null
            } h-[81px] flex items-center`}
            onClick={() => navigate("/all-monitoring")}
          >
            <div
              className={`text-sm font-bold  ${
                page == "all" ? "text-[#6A9850]" : null
              }  text-center `}
            >
              전체 모니터링
            </div>
          </li>
          <li
            className={`list-none ${
              page == "info" ? "border-b-[3px] border-[#6A9850]" : null
            } h-[81px] flex items-center`}
            onClick={() => {
              navigate("/userinfo");
            }}
          >
            <div
              className={`text-sm font-bold ${
                page == "info" ? "text-[#6A9850]" : null
              } text-center `}
            >
              사용자 정보
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
