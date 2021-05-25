import styled from 'styled-components';
import Button from '../Button'

const Input = styled.input`
  background: ${({ theme }) => theme.colors.insideInput};
  color: ${({ theme }) => theme.colors.placeholder};
  &:hover{
  background: ${({ theme }) => theme.colors.insideInputHover};
  }
`
export default Input;
