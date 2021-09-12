// Packages
import styled from "styled-components";

import tw from "tailwind.macro";

export const StyledHome = styled.div.attrs({
  className: "StyledHome",
})`
  ${tw`px-4 pt-8`}
  .blue-circle{
		animation-delay: 0.1s;
	}
	.green-circle{
		animation-delay: 0.2s;
	}
	.red-circle{
		animation-delay: 0.3s;
	}
`;

export const ContainerInputs = styled.div.attrs({
  className: "ContainerInputs space-y-3 flex lg:grid grid-cols-3",
})`
  ${tw` flex-col my-6 px-4`}
`;

export const Message = styled.div.attrs({
  className: "Message w-max bottom-2",
})`
  ${tw` py-2 px-4 absolute left-0 right-0 mx-auto rounded-lg font-semibold`}
  ${(props) => {
    return props.status === 0 && tw`hidden`;
  }}
`;

export const Loader = styled.div.attrs({
  className: "Loader",
})`
  ${tw`absolute inset-0`}
  background: #716e6e80;
  ${(props) => {
    return !props.show && tw`hidden`;
  }}
`;