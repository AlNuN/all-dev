import styled from 'styled-components'

const Main = styled.div`
  padding: 32px 16px 32px 16px;
  background: ${({ theme }) => theme.colors.darkBlue};

  @media (min-width: 922px){
    padding: 32px 32px 32px 32px;
  }
`
export default Main;