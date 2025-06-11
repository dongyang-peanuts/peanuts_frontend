interface TableHeader {
  data: Array<string>;
  isAllChecked: boolean;
  onCheckAll: (checked: boolean) => void;
}

const TableHeader = ({ data, isAllChecked, onCheckAll }: TableHeader) => {
  return (
    <thead className="border border-[#d9d9d9]">
      <tr className="bg-[#E4EFE7] h-14 text-[#707070]">
        <td className="pl-[25px]">
          <input
            type="checkbox"
            checked={isAllChecked}
            onChange={(e) => onCheckAll(e.target.checked)}
          />
        </td>
        {data.map((item) => (
          <td className="text-center text-base font-medium">{item}</td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
