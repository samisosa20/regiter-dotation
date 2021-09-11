import React from "react";

const InputForm = React.lazy(() => import("./InputForm"));

const useInputs = () => {
  return { InputForm };
};

export default useInputs;
