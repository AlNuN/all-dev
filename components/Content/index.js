import styled from "styled-components"
import { ButtonOut } from "../Buttons"
import EditorCodigo from "../EditorCodigo"
import MenuDireito from "../MenuDireito"
import Nav from '../Nav'

const Cont = styled.section`
  display: grid;
  margin-top: 48px;
  grid-template-areas: 'code' 'md';

  @media (min-width: 922px){
    grid-template-columns: repeat(15, 1fr);
    grid-template-areas: 'nav nav nav . code code code code code code code . md md md';
  }
`

const Main = styled.main`
  grid-area: code;
  button {
    margin-top: 32px;
  }
`

export default function Content() {
  return (
    <Cont>
      <Nav />
      <Main>
        <EditorCodigo />
        <ButtonOut>Visualizar com o highlight</ButtonOut>
      </Main>
      <MenuDireito />
    </Cont>
  )
}