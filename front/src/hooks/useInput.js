import React, { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  return { value, onchange };
};

export default useInput;
