import styled from "styled-components"
import SVGButton from '../SVGButton'

const SocialButton = styled(SVGButton)`
  background: transparent;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0 10px;
  & span {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover{
    background: #192f4b;
  }
  &:active {
    background: #2d415a;
  }
`

export default SocialButton;