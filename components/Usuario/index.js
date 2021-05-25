import styled from "styled-components"
import Image from "next/image"
import { Button } from "../Buttons"

const Container = styled.div`
  grid-area: usr;
  justify-content: flex-end;
  display: none;
  @media (min-width: 922px){
    display: flex;
  }
  & aside {
    margin-left: 5px;
  }
`

const UserBtn = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  width: max-content;
  &:hover {
  background-color: #192f4b;
  }
`

const UserImg = styled(Image)`
  border-radius: 50%;
`

export default function Usuario() {
  return (
    <Container>
      <UserBtn >
        <UserImg src="/profile.jpeg" alt="Imagem do usuário" height={32} width={32} />
        <aside>Harry</aside>
      </UserBtn>
    </Container>
  )
}
