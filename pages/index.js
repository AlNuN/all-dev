import styled from 'styled-components'
import Header from '../components/Header'
import Content from '../components/Content'

const Main = styled.div`
  padding: 32px 16px 32px 16px;
  background: ${({ theme }) => theme.colors.darkBlue};

  @media (min-width: 922px){
    padding: 32px 32px 32px 32px;
  }
`

export default function Home() {
  return (
    <Main>
      <Header></Header>
      <Content></Content>
    </Main>
  )
}
