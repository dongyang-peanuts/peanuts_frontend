import UserInfo from "@/models/userInfo.model";

interface PropsType {
  data: UserInfo;
}

const TableBody = ({ data }: PropsType) => {
  return (
    <tbody>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{data.email}</td>
        <td>{data.address}</td>
        <td>{data.adviceNo}</td>
        <td>{data.createdAt}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
