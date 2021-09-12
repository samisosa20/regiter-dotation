// Packages
import styled from "styled-components";
import tw from "twin.macro";

// Components
import typography from "../../Typography";

export const StyledLabel = styled(typography).attrs({
  className: "StyledLabel",
  variant: "h3",
})`
  ${tw` block text-gray-600 mb-1`}
`;

export const StyledErrors = styled.div.attrs({
  className: "StyledErrors text-red-500 text-xs",
})``;

export const StyledSelectWarpper = styled.div.attrs({
  className: "StyledSelectWarpper",
})`
  ${tw`relative`}
  .react-select {
    &__control {
      ${tw` bg-transparent relative`}

      &--is-focused {
        box-shadow: none;
        border: 1px solid #b3b3b3;
      }
      &--menu {
        &-is {
          &-open {
            box-shadow: none;
            border: 1px solid #b3b3b3;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 0;
            border-color: #b3b3b3;
          }
        }
      }
    }
    &__indicator-separator {
      ${tw` hidden`}
    }
    &__placeholder {
      ${tw` text-xs w-full text-left px-3 m-0 left-0 uppercase`}
    }
    &__single-value {
      ${tw`text-gray-700 text-xs w-full text-left px-3 m-0 left-0`}
      max-width: 100%;
      padding: 0.375rem;
    }
    &__menu {
      ${tw`  mt-0`}
    }
  }
  .selectnoform {
    .react-select {
      &__control {
        ${tw` bg-transparent w-10 relative`}
        width: 2.85rem;
        &--is-focused {
          box-shadow: none;
          border: 1px solid #fff;
        }
        &--menu {
          &-is {
            &-open {
              box-shadow: none;
              border: 1px solid #fff;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
              border-bottom: 0;
              border-color: #fff;
              color: black;
            }
          }
        }
      }
      &__indicators {
        ${tw` hidden`}
      }
      &__placeholder {
        ${tw`text-white text-xs w-full text-center m-0 left-0`}
      }
      &__single-value {
        ${tw`text-white text-xs w-full text-center m-0 left-0`}
        max-width: 100%;
      }
      &__menu {
        ${tw` w-10 mt-0`}
        width: 2.85rem;
      }
    }
  }
`;
