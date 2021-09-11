import React from 'react'
import useSpinners from "./Spinners";
import useInputs from "./Inputs";

const Typography = React.lazy(() => import("./Typography"))
const Button = React.lazy(() => import("./Button"));
const Table = React.lazy(() => import("./Table"));

const useComponents = () => {
    return {useSpinners, Button, Typography, useInputs, Table}
}

export default useComponents