import { useState } from "react"
import styled from "styled-components"
import EditorCodigo from "../EditorCodigo"
import Nav from '../Nav'

const Cont = styled.section`
  display: grid;
  margin-top: 48px;
  grid-template-areas: 'cd';

  @media (min-width: 922px){
    grid-template-columns: repeat(15, 1fr);
    grid-template-areas: 'nav nav nav . cd cd cd cd cd cd cd cd cd cd cd';
  }
`

const Main = styled.main`
  grid-area: cd;
  button {
    margin-top: 32px;
  }
`

export default function Comunidade() {
  const [bgColor, handleBgColor] = useState('#6bd1ff')
  const [high, handleHigh] = useState(false)
  const [lang, handleLang] = useState('javascript')
  const changeColor = (e) => {
    handleBgColor(e.target.value)
  }
  const changeLang = (e) => {
    handleLang(e.target.value)
  }
  return (
    <Cont>
      <Nav />
      <Main>
        <EditorCodigo 
          bgColor={bgColor}
          hasHighlight={high}
          lang={lang}
        />
      </Main>
    </Cont>
  )
}