import { useState } from "react"
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
  const [bgColor, handleBgColor] = useState('#6bd1ff')
  const changeColor = (e) => {
    handleBgColor(e.target.value)
  }
  return (
    <Cont>
      <Nav />
      <Main>
        <EditorCodigo 
          bgColor={bgColor}
        />
        <ButtonOut>Visualizar com o highlight</ButtonOut>
      </Main>
      <MenuDireito 
        bgColor={bgColor}
        changeColor={changeColor}
      />
    </Cont>
  )
}