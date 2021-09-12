// Packages
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContentInput = styled.div.attrs({
  className: "StyledContentInput",
})`
  ${tw` relative bg-no-repeat`}

${(props) => {
    return !props.icon && `background-image:none;`;
  }}
`;

export const StyledContentwarpperInput = styled.div.attrs({
  className: "StyledContentwarpperInput",
})`
  ${tw` relative bg-no-repeat`}

${(props) => {
    return !props.icon && `background-image:none;`;
  }}
`;

export const StyledInput = styled.input.attrs({
  className: "StyledInput",
})`
  ${tw` border-2 py-2 relative bg-white focus:outline-none bg-no-repeat px-6 text-black w-11/12`}
  ::placeholder {
    text-transform: uppercase;
  }
  :-webkit-autofill {
    -webkit-text-fill-color: black !important;
  }
`;

export const StyledLabel = styled.label.attrs({
  className: "StyledLabel",
})`
${tw` uppercase font-bold pl-6`}
`;

export const StyledButtonSearch = styled.div.attrs({
  className: "StyledButtonSearch",
})`
  ${tw` absolute bottom-0 right-0 mb-3 mr-1`}
`;

export const StyledImage = styled.img.attrs({
  className: "StyledImage",
})`
  ${tw` `}
`;
