import { useState } from "react"
import styled from "styled-components"
import MacButtons from '../SVG/MacButtons'

const Code = styled.textarea`
  outline: none;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 90%;
  height: auto;
  padding: 15px;
  border: none;
  resize: none;
  margin: auto;
  font-size: 14px;
`
const Inner = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 5px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  svg {
    margin: 16px 0 24px 16px;
  }
`

const Outer = styled.section`
  background-color: ${(props) => props.color};;
  border-radius: 10px;
  padding: 32px;
`

export default function EditorCodigo({bgColor}) {
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
  const changeCode = (e) => {
    handleCode(e.target.value);
  }

  return (
      <Outer color={bgColor}>
        <Inner>
          <MacButtons />
          <Code name="codigo" contenteditable="true" rows="16"
            onChange={changeCode}
            value={code} />
        </Inner>
      </Outer>
  )
}