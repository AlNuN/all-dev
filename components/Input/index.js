import styled from 'styled-components';
import { Button } from '../Buttons';

const Input = styled(Button).attrs(props => ({ 
  as: props.as || 'input'
  }))`
  background: ${({ theme }) => theme.colors.insideInput};
  color: ${({ theme }) => theme.colors.placeholder};
  width: calc(100% - 10px);
  &:hover{
  background: ${({ theme }) => theme.colors.insideInputHover};
  }
`

export default Input;
