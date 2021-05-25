import styled from 'styled-components'
import Button from '../components/Button'
import Header from '../components/Header'

const Main = styled.div`
  padding: 32px 16px 0 16px;
  background: ${({ theme }) => theme.colors.darkBlue};

@media (min-width: 922px){
  padding: 32px 32px 0 32px;
}
`

export default function Home() {
  return (
    <Main>
      <Header></Header>
    </Main>
  )
}
