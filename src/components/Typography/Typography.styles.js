// Packages
import styled from "styled-components"
import tw from "tailwind.macro"

export const StyledTypography = styled.p.attrs((props) => ({
  //className: `${props.className}`,
}))`
  // Variant
  ${(props) => {
    switch (props.variant) {
      case "2xl":
        return tw`text-4xl `
      case "xl":
        return tw`text-3xl `
      case "h2x":
        return tw`text-xl `
      case "h1":
        return tw`text-2xl `
      case "h2":
        return tw`text-lg `
      case "h3":
        return tw` text-sm `
      case "h4":
        return tw`text-xs `
      case "h5":
        return tw`text-xs `
      case "h6":
        return tw`text-xs `
      case "p":
        return tw`text-tiny `
      case "default":
        return tw`text-base `
      default:
        return tw`text-base `
    }
  }}
`
