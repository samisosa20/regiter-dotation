// Packages
import styled from "styled-components";

import tw from "tailwind.macro";

export const StyledButton = styled.button.attrs({
  className: "StyledButton",
})`
  ${tw` px-5 py-2 text-xs focus:outline-none uppercase`}

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return tw` bg-primary-500 text-primary-contrast`;
      case "secondary":
        return tw` bg-black-500 text-primary-contrast`;
      case "border":
        return tw` bg-white border border-primary-500 `;
      case "default":
        return tw` bg-gray-200 `;
      case "danger":
        return tw` bg-red-600 `;
      case "outline":
        return tw` bg-transparent shadow-none underline text-primary-500 `;
      case "outline-red":
        return tw` bg-transparent shadow-none underline text-red-600`;
      case "label":
        return tw` bg-transparent shadow-none text-black`;
      default:
        return tw` bg-transparent text-gray-800 border-none shadow-none`;
    }
  }}
  .StyledText {
    ${(props) => {
      switch (props.variant) {
        case "primary":
          return tw` text-primary-contrast font-bold`;
        case "secondary":
          return tw` text-white`;
        case "border":
          return tw`text-primary-500 `;
        case "default":
          return tw` text-gray-400`;
        case "danger":
          return tw`text-white `;
        case "outline":
          return tw` text-primary-500 `;
        case "outline-red":
          return tw` text-red-600`;
        default:
          return tw` text-gray-800 `;
      }
    }}

    ${(props) => {
      switch (props.size) {
        case "small":
          return tw` text-xs`;
        case "medium":
          return tw`text-sm `;
        case "big":
          return tw` text-lg`;
        case "2xl":
          return tw`text-xl `;
        default:
          return tw` `;
      }
    }}

    ${(props) => {
      return props.disabled && tw`text-white`;
    }}
  }

  ${(props) => {
    return props.icon && tw`flex justify-center items-center`;
  }}
  ${(props) => {
    return props.iconImg && tw`flex justify-center items-center`;
  }}
  ${(props) => {
    return props.fullWidth && tw` w-full`;
  }}

  ${(props) => {
    return props.disabled && tw`bg-gray-300`;
  }}

  ${(props) => {
    return props.rounded === false && tw` rounded-none`;
  }}

  svg{
    ${(props) => {
      return props.iconCenter === true && `
      position:absolute;
      right:0;
      top: 50%;
      transform: translate(0, -50%);
      margin-right: 10%;`;
    }}
  }
 img {
  ${tw` w-5 h-auto`}
 }
  

`;

export const StyledButtonIcon = styled.span.attrs({
  className: "StyledButtonIcon flex-shrink-0",
})`
  ${tw` mr-2`}
`;
