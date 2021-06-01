import styled from 'styled-components'
import setaBaixo from '../../assets/seta-baixo.svg';
import Input from '../Input'

const Wrapper = styled.div`
  position: relative;
  margin-top: 16px;
  &:after {
    content: url(${setaBaixo});
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    top: 18px;
    right: 15px;
    width: 9px;
    height: 4.5px;
    position: absolute;
  }

  select{
    appearance: none; 
    -webkit-appearance: none;
    width: 100%;
  } 
  @media (min-width: 576px) and (max-width: 921.9px){
      width: 49%
  }
`

export default function Select(props) {
  return (
    <Wrapper>
      <Input as="select" name="linguagem" id="linguagem" 
        value={props.value} onChange={props.changeValue}>
          {props.children}
      </Input>
    </Wrapper>
  )
}