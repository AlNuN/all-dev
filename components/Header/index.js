import styled from 'styled-components'
import Logo from '../SVG/Logo'
import Lupa from '../SVG/Lupa'
import Hamburger from '../SVG/Hamburguer'
import SVGButton from '../SVGButton'
import Input from '../Input'
import Usuario from '../Usuario'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import MenuItens from '../MenuItens'
import Close from '../SVG/Close'
import router from 'next/router'


const SHeader = styled.header`
  height: 56px;
  display: grid;
  grid-template-areas: ${(props) => props.srch ? '"bs bs bs lupa hamburguer"' : '"lg . . lupa hamburguer"'};
  align-items: center;
  float: none;

  @media (min-width: 576px) and (max-width: 921.9px){
    grid-template-areas: 'lg bs bs hamburguer' ;
  }

  @media (min-width: 922px){
    grid-template-columns: repeat(15, 1fr);
    grid-template-areas: 'lg lg lg . bs bs bs bs bs bs bs . usr usr usr' ;
  }
`

const SVGLupa = styled(SVGButton)`
  grid-area: lupa;
  @media (min-width: 576px) and (max-width: 921.9px){
    display: none;
  }
  @media (min-width: 922px){
    display: none;
  }
`

const SVGHamburguer = styled(SVGButton)`
  grid-area: hamburguer;
  @media (min-width: 922px){
    display: none;
  }
`

const Busca = styled(Input)`
  display: ${(props) => props.srch ? 'inline-block' : 'none'};
  grid-area: bs;
  @media (min-width: 576px) and (max-width: 921.9px){
    display: inline-block;
  }
  @media (min-width: 922px){
    display: inline-block;
  }
`

const Wrapper = styled.div`
  grid-area: lg;
  width: 100%;
  display: ${(props) => props.srch ? 'none' : 'flex'};
  align-items: flex-start;
  @media (min-width: 576px) and (max-width: 921.9px){
    display: flex;
  }
  @media (min-width: 922px){
    display: flex;
  }
`

const Dropdown = styled.div`
  width: 254px;
  float: right;
  z-index: 9999;
  background: #2d415b;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  position: absolute;
  top: 120px;
  right: 16px;
  height: 100%;
  & ul{
    margin-bottom: 24px;
  }
  &>hr {
    margin-bottom: 36px;
  }
  &>div {
    display: block;
  }
  @media (min-width: 922px){
    display: none;
  }
`

export default function Header (props) {
  const [hasDrop, handleDrop] = useState(false)
  const [hasSrch, handleSrch] = useState(false)

  const changeSrch = (e) => {
    handleSrch(!hasSrch)
  } 

  useEffect(() => {
    router.query.nome && handleSrch(true)
  }, [])

  return (
    <SHeader srch={hasSrch}>
      <Wrapper srch={hasSrch}>
        <Link href="/">
          <a><Logo /></a>
        </Link>
      </Wrapper>
      <Busca srch={hasSrch} 
        value={props.hValue} 
        onChange={props.changeHValue}
        placeholder="Busque por algo"
        autoFocus
        />
      <SVGLupa onClick={changeSrch}>
        {hasSrch
          ? <Close />
          : <Lupa />
        }
      </SVGLupa>
      <SVGHamburguer onClick={()=> handleDrop(!hasDrop)}>
        {hasDrop
          ? <Close />
          : <Hamburger />
        }
      </SVGHamburguer>
      <Usuario/>
      {hasDrop &&
        <Dropdown>
          <MenuItens></MenuItens>
          <hr></hr>
          <Usuario />
        </Dropdown>
      }
    </SHeader>
  )
}
