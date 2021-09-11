//Packages
import React from "react";
import PropTypes from "prop-types";

//Styles
import { StyledButton, StyledButtonIcon } from "./Button.styles";

/**
 * Button component
 */
const Button = (props) => {
  const {
    type,
    variant,
    label,
    icon,
    iconImg,
    size,
    className,
    onClick,
    fullWidth,
    disabled,
    children,
    rounded,
    iconCenter,
  } = props;
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      icon={icon}
      iconImg={iconImg}
      onClick={onClick}
      className={className}
      fullWidth={fullWidth}
      disabled={disabled}
      rounded={rounded}
      iconCenter={iconCenter}
    >
      {icon && <StyledButtonIcon>{icon}</StyledButtonIcon>}
      {iconImg && <StyledButtonIcon><img src={iconImg} alt={'icono'}/></StyledButtonIcon>}
      <p className="text-2xl font-bold StyledText tracking-wider">{label}</p>
      {children && children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * What type of button
   */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "default",
    "border",
    "danger",
    "outline-red",
    "label",
  ]),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Button's icon
   */
  icon: PropTypes.element,
  /**
   * Size of button
   *

   */
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Button 100%
   */
  fullWidth: PropTypes.bool,
  /**
   * icon children center
   */
  iconCenter: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
  icon: null,
  iconImg: null,
  size: "large",
  onClick: () => {},
  fullWidth: false,
  iconCenter: false,
};

export default Button;
