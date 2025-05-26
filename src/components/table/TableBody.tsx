import UserInfo from "@/models/userInfo.model";

interface PropsType {
  data: UserInfo;
}

const TableBody = ({ data }: PropsType) => {
  return (
    <tbody className="bg-white">
      <tr className="h-14 border border-[#d9d9d9] items-center text-base font-medium">
        <td className="pl-[25px]">
          <input type="checkbox" />
        </td>
        <td className="text-center text-[#707070]">{data.email}</td>
        <td className="text-center text-[#707070]">{data.address}</td>
        <td className="text-center text-[#707070]">{data.adviceNo}</td>
        <td className="text-center text-[#707070]">{data.createdAt}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
