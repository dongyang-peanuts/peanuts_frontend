interface MainButton {
  text: string;
  color: string;
  borderColor: string;
  backgroundColor: string;
  width: string;
  height: string;
  onClick: () => void;
}

const MainButton = ({
  text,
  color,
  borderColor,
  backgroundColor,
  width,
  height,
  onClick,
}: MainButton) => {
  return (
    <button
      className="font-[700] text-[16px]"
      style={{
        color: color,
        border:
          borderColor !== "none" ? `1px solid ${borderColor}` : borderColor,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
