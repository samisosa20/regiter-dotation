// Packages
import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledTypography } from "./Typography.styles";

/**
 * Primary UI component for user interaction
 */
const Typography = ({
  children,
  variant,
  as,
  className,
  onClick,
  ...props
}) => {
  return (
    <StyledTypography
      variant={variant}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

Typography.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "default",
    "xl",
    "2xl",
  ]),
};

Typography.defaultProps = {
  className: "StyledTypography",
  variant: "p",
  children: null,
};

export default Typography;
