import styled from "styled-components"
import { ButtonFill } from "../Buttons"
import H2 from "../H2"
import Input from '../Input'
import setaBaixo from '../../assets/seta-baixo.svg';

const Md = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: md;
  margin: 40px 0 40px 0;
  min-width: 190px;

  h2 {
    color: ${({ theme }) => theme.colors.white};
  }

  h2:nth-child(4) {
    margin-top: 40px;
  }

  input, textarea{
    margin-top: 16px;
  } 

  textarea {
    padding: 10px 0 0 10px;
    height: 70px;
  }

  select{
    appearance: none; 
    -webkit-appearance: none;
    width: 100%;
  } 

  .select-wrapper {
    position: relative;
    margin-top: 16px;
  }

  .select-wrapper::after {
    content: url(${setaBaixo});
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    top: 18px;
    right: 15px;
    width: 9px;
    height: 4.5px;
    position: absolute;
  }

  #color-picker {
    border: ${({ theme }) => theme.colors.white} 1px solid;
    background: transparent;
    width: 100%;
    padding: 8px;
  }

  #color-picker::-webkit-color-swatch, #color-picker::-moz-color-swatch {
    border-radius: 5px;
  } 

  button {
    margin-top: 40px;
  }

  @media (min-width: 576px) and (max-width: 921.9px){
    .personalizacao {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    #color-picker {
      width: 49%
    }

    .select-wrapper {
      width: 49%
    }
  }

  @media (min-width: 922px){
    margin: 0 0 0 0;
  }
`

export default function MenuDireito ({
  bgColor,
  changeColor,
  lang,
  changeLang,
}) {
  return (
    <Md>
      <H2>
        Seu projeto
      </H2>
      <Input type="text" name="nome" placeholder="Nome do seu projeto" />
      <Input as="textarea" name="descricao" 
        placeholder="Descrição do seu projeto"></Input>

      <H2>
        Personalização
      </H2>
      <div className="personalizacao">
        <div className="select-wrapper">
          <Input as="select" name="linguagem" id="linguagem" 
            value={lang} onChange={changeLang}>
            <option value="javascript">JavaScript</option>
            <option value="html">Html</option>
            <option value="css">Css</option>
          </Input>
        </div>

        <Input type="color" name="color-picker" id="color-picker"
          value={bgColor} onChange={changeColor}/>
      </div>

      <ButtonFill>Salvar projeto</ButtonFill>
    </Md>
  )
}