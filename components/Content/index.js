import { useContext, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import { ButtonOut } from "../Buttons"
import EditorCodigo from "../EditorCodigo"
import MenuDireito from "../MenuDireito"
import Nav from '../Nav'
import router from 'next/router'


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

export default function Content(props) {
  const [code, handleCode] = useState(`
    const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

    const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

    const unfold = (f, seed) => {
      const go = (f, seed, acc) => {
        const res = f(seed)
        return res ? go(f, res[1], acc.concat([res[0]])) : acc
      }
      return go(f, seed, [])
    }
  `)
  const [nome, handleNome] = useState('')
  const [descricao, handleDescricao] = useState('')
  const [bgColor, handleBgColor] = useState('#6bd1ff')
  const [high, handleHigh] = useState(false)
  const [lang, handleLang] = useState('javascript')
  const changeColor = (e) => { handleBgColor(e.target.value) }
  const changeLang = (e) => { handleLang(e.target.value) }
  const changeCode = (e) => { handleCode(e.target.value) }
  const changeNome = (e) => { handleNome(e.target.value) }
  const changeDescricao = (e) => { handleDescricao(e.target.value) }

  let projeto = {
    nome,
    descricao,
    linguagem: lang,
    cor: bgColor,
    codigo: code,
  }

  const submit = async (e) => {
    const db = (await import('../../controlers/DB.js')).db

    db.open().then(function(){
      db.projetos.add(projeto)
      console.log(db.verno)
    })

    router.push('/comunidade')
  }

  return (
    <Cont>
      <Nav />
      <Main>
        <EditorCodigo 
          bgColor={bgColor}
          hasHighlight={high}
          lang={lang}
          code={code}
          changeCode={changeCode}
        />
        <ButtonOut onMouseUp={() => handleHigh(!high)}>
          Visualizar com o highlight
        </ButtonOut>
      </Main>
      <MenuDireito 
        lang={lang}
        changeLang={changeLang}
        bgColor={bgColor}
        changeColor={changeColor}
        submit={submit}
        nome={nome}
        changeNome={changeNome}
        descricao={descricao}
        changeDescricao={changeDescricao}
      />
    </Cont>
  )
}
