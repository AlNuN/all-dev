import styled from 'styled-components';
import { Button } from '../Buttons';

const Input = styled(Button).attrs(props => ({ 
  as: props.as || 'input'
  }))`
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.insideInput};
  color: ${({ theme }) => theme.colors.placeholder};
  &:hover{
  background: ${({ theme }) => theme.colors.insideInputHover};
  }
`

export default Input;
