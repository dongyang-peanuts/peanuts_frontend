interface Input {
  width: string;
  height: string;
  name: string;
  placeholder: string;
  type: string | undefined;
  onChange: (e: any) => void;
}

const Input = ({ width, height, placeholder, onChange, name, type }: Input) => {
  return (
    <input
      className="border border-solid border-[#d9d9d9] pl-[8px] placeholder-[#d9d9d9]"
      style={{
        width: width,
        height: height,
      }}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      type={type}
    />
  );
};

export default Input;
