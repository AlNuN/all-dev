import styled from "styled-components"
import { Button } from '../Buttons'

const SVGButton = styled(Button)`
  background: transparent;
  &:hover{
    background: ${({ theme }) => theme.colors.outlined};
  }
  &:active {
    background: ${({ theme }) => theme.colors.btnOutlinedHover};
  }
`

export default SVGButton;
