import styled from "styled-components"
import H2 from '../H2'
import MenuItens from '../MenuItens'

const N = styled.nav`
  display: none;
  color: ${({ theme }) => theme.colors.white};
  grid-area: nav;

  @media (min-width: 922px){
    display: block;
  }
`

export default function Nav (){
  return (
    <N>
      <H2>
        Menu
      </H2>
      <MenuItens />
    </N>
  )
}