interface MainButton {
  text: string;
  color: string;
  borderColor: string;
  backgroundColor: string;
  width: string;
  height: string;
}

const MainButton = ({
  text,
  color,
  borderColor,
  backgroundColor,
  width,
  height,
}: MainButton) => {
  return (
    <button
      style={{
        color: color,
        border:
          borderColor !== "none" ? `1px solid ${borderColor}` : borderColor,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
      }}
    >
      {text}
    </button>
  );
};

export default MainButton;
