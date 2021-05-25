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

  &:hover, &:active {
    background: ${({ theme }) => theme.colors.btnOutlinedHover} !important;
  }

  &:active {
    border: 4px solid #173569;
  }

  &:focus {
    background: #173569;
  }
`

const ButtonFill = styled(Button)`
  background: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.darkBlue};

  &:hover, &:active {
    background: ${({ theme }) => theme.colors.blue200} !important;
  }

  &:active {
    border: 4px solid ${({ theme }) => theme.colors.blue300};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.blue100};
  }
`

export {
  Button,
  ButtonOut,
  ButtonFill,
}
