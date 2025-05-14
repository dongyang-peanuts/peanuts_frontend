interface Input {
  width: string;
  height: string;
  placeholder: string;
}

const Input = ({ width, height, placeholder }: Input) => {
  return (
    <input
      className="border border-solid border-[#d9d9d9]"
      style={{
        width: width,
        height: height,
      }}
      placeholder={placeholder}
    />
  );
};

export default Input;
