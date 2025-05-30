import { useState } from "react";

const useInput = ({ initialValue }: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
};

export default useInput;
