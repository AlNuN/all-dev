import { useEffect, useState } from "react"
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
  const [codes, setCodes] = useState(null)
  
  useEffect(async () => {
    const db = (await import('../../controlers/DB.js')).db

    db.open().then(function(){
      db.table('projetos').toArray().then((projeto) => { setCodes(projeto)})
      console.log(db.verno)
    })

    db.transaction('w', db.projetos, (projetos) => {
      const array = projetos.toArray()
      console.log(array)
    })
  }, [])

  return (
    <Cont>
      <Nav />
      <Main>
        <ul>
          {codes !== null && codes.map((code) => (
            <li>
              <EditorCodigo 
                code={code.codigo}
                bgColor={code.cor}
                hasHighlight={false}
                lang={code.linguagem}
              />
            </li>
          ))}
        </ul>
      </Main>
    </Cont>
  )
}
