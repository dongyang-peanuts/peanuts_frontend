import { dateFormat } from "@/hook/dateFormat";
import UserInfo, { UserList } from "@/models/userInfo.model";
import { useNavigate } from "react-router-dom";

interface PropsType {
  data: UserList;
  isChecked: boolean;
  onCheck: (userKey: number, checked: boolean) => void;
}

const TableBody = ({ data, isChecked, onCheck }: PropsType) => {
  const navigate = useNavigate();
  return (
    <tbody className="bg-white">
      <tr className="h-14 border border-[#d9d9d9] items-center text-base font-medium">
        <td className="pl-[25px]">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => onCheck(data.userKey, e.target.checked)}
          />
        </td>
        <td
          onClick={() => {
            navigate(`/userinfo/detail?userKey=${data.userKey}`);
          }}
          className="text-center text-[#707070]"
        >
          {data.userEmail}
        </td>
        <td
          onClick={() => {
            navigate(`/userinfo/detail?userKey=${data.userKey}`);
          }}
          className="text-center text-[#707070]"
        >
          {data.userAddr}
        </td>
        <td
          onClick={() => {
            navigate(`/userinfo/detail?userKey=${data.userKey}`);
          }}
          className="text-center text-[#707070]"
        >
          {data.proNum}
        </td>
        <td
          onClick={() => {
            navigate(`/userinfo/detail?userKey=${data.userKey}`);
          }}
          className="text-center text-[#707070]"
        >
          {dateFormat(data.signupDate)}
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
