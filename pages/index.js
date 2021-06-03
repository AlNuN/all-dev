import Header from '../components/Header'
import Content from '../components/Content'
import Main from '../components/Main'
import router from 'next/router'
import regexScape from '../controlers/regexScape'

export default function Home() {
  const chng = (e) => {
    let value = regexScape(e.target.value)
    value && router.push(`/comunidade?nome=${value}`)
  }
  return (
    <Main>
      <Header changeHValue={chng}></Header>
      <Content></Content>
    </Main>
  )
}
