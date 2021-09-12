// Packages
import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Select from "react-select";
// Components
import { StyledLabel, StyledSelectWarpper } from "./CustomSelect.styles";

const CustomSelect = (props) => {
  const {
    className,
    id,
    name,
    placeholder,
    label,
    options,
    multiple,
    disabled,
    defaultValue,
    onChange
  } = props;

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "black" : "var(--color-white)",
      background: state.isSelected ? "var(--color-primary-500)" : "var(--color-white)",
    }),
    dropdownIndicator: () => ({
      width: "1.75rem",
      height: "1.5rem",
    }),
  };

  return (
    <Fragment>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelectWarpper>
      <Select
          options={options}
          placeholder={placeholder}
          valueName={"selectedValue"}
          instanceId={id}
          isMulti={multiple}
          isDisabled={disabled}
          styles={customStyles}
          classNamePrefix="react-select"
          className={className}
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
          />
      </StyledSelectWarpper>
    </Fragment>
  );
};

CustomSelect.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  ref: PropTypes.any,
  defaultValue: PropTypes.any,
};

CustomSelect.defaultProps = {
  className: "StyledSelect",
  multiple: false,
  onChange: () => {},
  placeholder: "",
  label: "",
  disabled: false,
  ref: React.createRef(),
  defaultValue: "",
};

export default CustomSelect;
