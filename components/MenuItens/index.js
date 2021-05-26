import styled from "styled-components"
import Link from 'next/link'
import { useRouter } from 'next/router'

const Li = styled.li`
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    color: #919ca9;
    text-decoration: none;
  }

  svg {
    width: 48px;
    height: 48px;
  }

  span {
    margin-left: 15px;
  }

  path { fill: #919ca9; }

  rect { fill: ${({ theme }) => theme.colors.btnOutlinedHover}; }

  &:hover a { color: #d7dff0; }

  &:hover path { fill: #d7d7d7; }

  &:hover rect { fill: #355DB6; }

  &:active a, &.active a { color: ${({ theme }) => theme.colors.white}; }

  &:active path, &.active path { fill: ${({ theme }) => theme.colors.white}; }

  &:active rect, &.active rect { fill: ${({ theme }) => theme.colors.blue300}; }
`

export default function MenuItens (props) {
  const router = useRouter()

  const content = [
    {
      a: '/',
      svg:() => (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="16" />
            <path d="M22.7157 31.9832L20.8096 31.4301C20.6096 31.3739 20.4971 31.1645 20.5534 30.9645L24.8187 16.2719C24.8749 16.0719 25.0843 15.9594 25.2843 16.0157L27.1904 16.5688C27.3904 16.625 27.5029 16.8344 27.4466 17.0344L23.1813 31.727C23.1219 31.9269 22.9157 32.0426 22.7157 31.9832ZM19.1535 28.4772L20.5128 27.0273C20.6565 26.8742 20.6471 26.6305 20.4878 26.4899L17.6567 23.9994L20.4878 21.509C20.6471 21.3684 20.6596 21.1247 20.5128 20.9715L19.1535 19.5217C19.0129 19.3717 18.7754 19.3623 18.6223 19.506L14.1195 23.7245C13.9602 23.8713 13.9602 24.1244 14.1195 24.2713L18.6223 28.4928C18.7754 28.6366 19.0129 28.6303 19.1535 28.4772ZM29.3777 28.496L33.8805 24.2744C34.0398 24.1275 34.0398 23.8744 33.8805 23.7276L29.3777 19.5029C29.2277 19.3623 28.9902 19.3685 28.8465 19.5185L27.4872 20.9684C27.3435 21.1215 27.3529 21.3653 27.5122 21.5059L30.3433 23.9994L27.5122 26.4899C27.3529 26.6305 27.3404 26.8742 27.4872 27.0273L28.8465 28.4772C28.9871 28.6303 29.2246 28.6366 29.3777 28.496Z" />
          </svg>
      ),
      span: 'Editor de código',
    },
    {
      a: '/comunidade',
      svg:() => (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="16" />
            <path d="M17 23C18.1031 23 19 22.1031 19 21C19 19.8969 18.1031 19 17 19C15.8969 19 15 19.8969 15 21C15 22.1031 15.8969 23 17 23ZM31 23C32.1031 23 33 22.1031 33 21C33 19.8969 32.1031 19 31 19C29.8969 19 29 19.8969 29 21C29 22.1031 29.8969 23 31 23ZM32 24H30C29.45 24 28.9531 24.2219 28.5906 24.5813C29.85 25.2719 30.7437 26.5188 30.9375 28H33C33.5531 28 34 27.5531 34 27V26C34 24.8969 33.1031 24 32 24ZM24 24C25.9344 24 27.5 22.4344 27.5 20.5C27.5 18.5656 25.9344 17 24 17C22.0656 17 20.5 18.5656 20.5 20.5C20.5 22.4344 22.0656 24 24 24ZM26.4 25H26.1406C25.4906 25.3125 24.7688 25.5 24 25.5C23.2312 25.5 22.5125 25.3125 21.8594 25H21.6C19.6125 25 18 26.6125 18 28.6V29.5C18 30.3281 18.6719 31 19.5 31H28.5C29.3281 31 30 30.3281 30 29.5V28.6C30 26.6125 28.3875 25 26.4 25ZM19.4094 24.5813C19.0469 24.2219 18.55 24 18 24H16C14.8969 24 14 24.8969 14 26V27C14 27.5531 14.4469 28 15 28H17.0594C17.2563 26.5188 18.15 25.2719 19.4094 24.5813Z"/>
          </svg>
      ),
      span: 'Comunidade',
    }
  ]

  return (
    <ul>
      {content.map((c) => 
        <Li key={c.span} className={router.pathname == c.a ? 'active' : ''}>
          <Link href={c.a}>
            <a>
              {c.svg()}
              <span>{c.span}</span>
            </a>
          </Link>
        </Li>
      )}
    </ul>
  )
}
