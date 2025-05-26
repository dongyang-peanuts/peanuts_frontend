interface TableHeader {
  data: Array<string>;
}

const TableHeader = ({ data }: TableHeader) => {
  return (
    <thead>
      <tr className="bg-[#E4EFE7]">
        <th>
          <input
            type="checkbox"
            // checked={isAllChecked}
            // onChange={(e) => onCheckAll(e.target.checked)}
          />
        </th>
        {data.map((item) => (
          <th>{item}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
