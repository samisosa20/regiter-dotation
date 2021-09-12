//Packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//Styles
import {
  StyledContentInput,
  StyledContentwarpperInput,
  StyledInput,
  StyledLabel,
} from "./Input.styles";

const InputForm = React.forwardRef((props, ref) => {
  const {
    id,
    placeholder,
    className,
    name,
    label,
    value,
    type,
    errors,
    defaultValue,
    disabled,
    onChange
  } = props;
  const [typeField, setTypeField] = useState();

  useEffect(() => {
    setTypeField(type);
  }, [type]);

  return (
    <StyledContentInput>
      <StyledContentwarpperInput>
        {label && (
          <StyledLabel className={`text-primary-500`}>{label}</StyledLabel>
        )}
        <StyledInput
          ref={ref}
          type={typeField}
          id={id}
          className={className}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
        />
        {type === "password" && typeField === "password" ? (
          <AiOutlineEyeInvisible
            className="absolute top-8 right-5 w-6 h-6 text-gray-300"
            onClick={() => {
              setTypeField("text");
            }}
          />
        ) : type === "password" && typeField !== "password" ? (
          <AiOutlineEye
            className="absolute top-8 right-5 w-6 h-6 text-gray-300"
            onClick={() => {
              setTypeField("password");
            }}
          />
        ) : null}
      </StyledContentwarpperInput>

      {errors && errors[name] && (
        <div className="text-red-500 text-xs font-normal pl-2">
          {errors[name]?.message}
        </div>
      )}
    </StyledContentInput>
  );
});

InputForm.propTypes = {
  /**
   * Input id
   */
  id: PropTypes.string.isRequired,
  /**
   * Input label
   */
  placeholder: PropTypes.string,
  /**
   * Input has label
   */
  label: PropTypes.string,

  searchMode: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

InputForm.defaultProps = {
  label: null,
  searchMode: false,
  type: "text",
  disabled: false,
  onChange: ()=>{}
};

export default InputForm;
