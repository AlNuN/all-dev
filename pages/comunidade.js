import Header from '../components/Header'
import Comunidade from '../components/Comunidade'
import Main from '../components/Main'
import { useEffect, useState } from 'react'
import regexScape from '../controlers/regexScape'
import router from 'next/router'

export default function ComunidadePage() {
  const [hValue, handleHValue] = useState('')
  const changeHValue = (e) => {
    let value = regexScape(e.target.value)
    handleHValue(value)
  }
  useEffect(() => {
    router.query.nome && handleHValue(router.query.nome)
  }, [])
  return (
    <Main>
      <Header hValue={hValue} changeHValue={changeHValue}></Header>
      <Comunidade search={hValue}></Comunidade>
    </Main>
  )
}
