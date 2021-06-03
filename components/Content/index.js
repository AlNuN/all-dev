import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { ButtonOut, ButtonFill } from "../Buttons"
import EditorCodigo from "../EditorCodigo"
import MenuDireito from "../MenuDireito"
import Nav from '../Nav'
import router from 'next/router'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import Select from '../Select'

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

const Export = styled.div` 
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &>button, &>div {
    margin-top: 10px;
    width: 49%;
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
  const [format, handleFormat] = useState('toPng')
  const [id, handleId] = useState(null)
  const changeColor = (e) => { handleBgColor(e.target.value) }
  const changeLang = (e) => { handleLang(e.target.value) }
  const changeCode = (e) => { handleCode(e.target.value) }
  const changeNome = (e) => { handleNome(e.target.value) }
  const changeDescricao = (e) => { handleDescricao(e.target.value) }
  const changeFormat = (e) => { handleFormat(e.target.value) }
  const ref = useRef(null)
  const extensions = { 'javascript': 'js', 'html': 'html', 'css': 'css' }

  const submit = async (e) => {
    const db = (await import('../../controlers/DB.js')).db

    let projeto = {
      nome,
      descricao,
      linguagem: lang,
      cor: bgColor,
      codigo: code,
    }

    if (id) {
      db.open().then(function(){
        db.projetos.update(id, projeto)
        console.log(id)
      })
    } else {
      db.open().then(function(){
        db.projetos.add(projeto)
        console.log(id)
      })
    }

    router.push('/comunidade')
  }

  const exportAs = (e) => {
    if (format === 'txt') {
      let blob = new Blob([code], {type: "text/plain;charset=utf-8"})
      saveAs(blob, `code.${extensions[lang]}`)
    } else {
      domtoimage[format](ref.current)
        .then((dataUrl) => {
          saveAs(dataUrl, 'code')
        })
    }
  }

  useEffect(async() => {
    const idd = parseInt(router.query.id)
    handleId(idd);
    if (idd) {
      const db = (await import('../../controlers/DB.js')).db
      db.open().then(function(){
        db.projetos.get(idd).then((p) => {
          handleNome(p.nome)
          handleDescricao(p.descricao)
          handleBgColor(p.cor)
          handleCode(p.codigo)
          handleLang(p.linguagem)
        })
      })
    }
  }, [])

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
          refe={ref}
        />
        <ButtonOut onMouseUp={() => handleHigh(!high)}>
          {high
            ? 'Editar'
            : 'Visualizar com o highlight'
          }
        </ButtonOut>
        {high
          && 
          <Export>
            <ButtonFill onClick={exportAs}>Exportar</ButtonFill>
            <Select value={format} changeValue={changeFormat}>
              <option value="toPng">PNG</option>
              <option value="toSvg">SVG</option>
              <option value="toJpeg">JPG</option>
              <option value="txt">{extensions[lang].toUpperCase()}</option>
            </Select>
          </Export>
        }
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
