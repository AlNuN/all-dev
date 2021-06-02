import { useState } from "react"
import styled from "styled-components"
import SVGButton from '../SVGButton'
import Com from "../SVG/Comentario"
import Cur from "../SVG/Curtida"

const Social = styled(SVGButton)`
  background: transparent;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0 10px;
  & span {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.white};
  }
  & path {
    fill: ${({ clicked, theme }) => clicked ? '#f65151' : theme.colors.white };
  }
  &:hover{
    background: #192f4b;
  }
  &:active {
    background: #2d415a;
  }
`

export function Curtida(props) {
  const [clicked, handleClicked] = useState(false)
  return (
    <Social clicked={clicked} onClick={() => handleClicked(!clicked)} >
      <Cur />
      {props.children}
    </Social>
  )
};

export function Comentario(props) {
  return (
    <Social >
      <Com />
      {props.children}
    </Social>
  )
};