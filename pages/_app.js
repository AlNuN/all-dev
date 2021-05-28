import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import 'highlight.js/styles/gradient-dark.css'

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font-family: 'Inter', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body {
  background: #051D3B;
}
`

const theme = {
  colors: {
    primary: '#0070f3',
    white: '#fff',
    black: 'black',
    darkBlue: '#051D3B',
    insideInput: '#2d415a',
    insideInputHover: '#41536a',
    btnOutlinedHover: '#112d5a',
    placeholder: '#a2acb7',
    blue100: '#96B9FD',
    blue200: '#7BA4FC',
    blue300: '#5081FB',
    outlined: '#0b254a',
    desktopMainWidth: '752px',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" /> 
        <link rel="icon" href="/logo-plataforma.svg" ></link>
        <title>AllDev</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
