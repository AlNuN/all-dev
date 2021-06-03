import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding-left: 10px;
  height: 56px;
  width: 100%;
`
const ButtonOut = styled(Button)`
  background: ${({ theme }) => theme.colors.outlined};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.btnOutlinedHover};
  }

  &:focus {
    background: #173569;
  }

  &:active {
    border: 4px solid #173569;
    background: ${({ theme }) => theme.colors.btnOutlinedHover};
  }

`

const ButtonFill = styled(Button)`
  background: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.darkBlue};

  &:hover{
    background: ${({ theme }) => theme.colors.blue200};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.blue100};
  }

  &:active {
    border: 4px solid ${({ theme }) => theme.colors.blue300};
    background: ${({ theme }) => theme.colors.blue200};
  }
`

export {
  Button,
  ButtonOut,
  ButtonFill,
}
