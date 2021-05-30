import styled from 'styled-components'
import Logo from '../SVG/Logo'
import Lupa from '../SVG/Lupa'
import Hamburger from '../SVG/Hamburguer'
import SVGButton from '../SVGButton'
import Input from '../Input'
import Usuario from '../Usuario'
import Link from 'next/link'
import { useState } from 'react'
import MenuItens from '../MenuItens'
import Close from '../SVG/Close'


const SHeader = styled.header`
  height: 56px;
  display: grid;
  grid-template-areas: 'lg . . lupa hamburguer' ;
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
  display: none;
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
  display: flex;
  align-items: flex-start;
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
  const [hasDrop, handleDrop] = useState(false);

  return (
    <SHeader>
      <Wrapper>
        <Link href="/">
          <a><Logo /></a>
        </Link>
      </Wrapper>
      <Busca placeholder="Busque por algo"/>
      <SVGLupa><Lupa /></SVGLupa>
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
