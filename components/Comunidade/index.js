import { useEffect, useState } from "react"
import styled from "styled-components"
import EditorCodigo from "../EditorCodigo"
import Nav from '../Nav'
import SocialButton from "../SocialButton"
import Comentario from "../SVG/Comentario"
import Curtida from "../SVG/Curtida"
import Usuario from '../Usuario'
import Link from 'next/link'

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
  @media (min-width: 922px){
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 15px;
    }
    li {
      margin-bottom: 0;
    }
  }
`

const Li = styled.li`
  margin-bottom: 32px;
  border-radius: 10px;
  background: #041832;

  & h3 {
    color: ${({ theme }) => theme.colors.white};
    line-height: 31px;
    font-weight: bold;
    font-size: 21px;
    margin-top: 24px;
  }

  & a {
    text-decoration: none;
  }

  & article section {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    margin-top: 8px;
    padding-bottom: 24px;
  }

  & article section, & h3 {
    padding-left: 24px;
  }

  & .social, .social div {
    display: flex;
    flex-direction: row;
  }

  & .social {
    justify-content: space-between;
    margin: 0 10px 10px 10px;
  }

  @media (min-width: 922px){
    .social{
      display: none;
    }
    &:hover .social{
      display: flex;
    }
  }
`

export default function Comunidade() {
  const [codes, setCodes] = useState(null)
  
  useEffect(async () => {
    const db = (await import('../../controlers/DB.js')).db

    db.open().then(function(){
      db.table('projetos').toArray().then((projeto) => { setCodes(projeto) })
    })

  }, [])

  return (
    <Cont>
      <Nav />
      <Main>
        <ul>
          {codes !== null && codes.map((code) => (
            <Li key={code.id}>
              <Link href={{ pathname: '/', query: { id: code.id } }}>
                <a>
                  <EditorCodigo
                    code={code.codigo}
                    bgColor={code.cor}
                    hasHighlight={true}
                    lang={code.linguagem}
                  />
                </a>
              </Link>
              <article>
                <h3>{code.nome}</h3>
                <section>{code.descricao}</section>
                <div className="social">
                  <div>
                    <SocialButton><Comentario /><span>9</span></SocialButton>
                    <SocialButton><Curtida /><span>105</span></SocialButton>
                  </div>
                  <Usuario />
                </div>
              </article>
            </Li>
          ))}
        </ul>
      </Main>
    </Cont>
  )
}
