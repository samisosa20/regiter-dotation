import React from "react";

const InputForm = React.lazy(() => import("./InputForm"));
const CustomSelect = React.lazy(() => import("./Select"));

const useInputs = () => {
  return { InputForm, CustomSelect };
};

export default useInputs;
