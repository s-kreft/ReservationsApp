import { useState } from "react";

export function useFormInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
    className: "input",
    type: "text",
  };

  return inputProps;
}
