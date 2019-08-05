import styled from 'styled-components'
import { darken } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { primary, black, danger, white } = StyleColors
const { lgsize, msize } = StyleSize

const StyledHeader = styled.div`
  height: ${lgsize};
  background: ${primary};
  border-bottom: 2px solid ${darken(0.1, primary)};
  a {
    float: left;
  }

  z-index: 7678;
  position: fixed;
  width: 100%;
`
const StyledHeaderH1 = styled.h1`
  color: ${black};
  font-size: ${msize};
  text-align: left;
  padding: 0;
  @media (min-width: 320px) {
    margin-left: 5px;
  }
  @media (min-width: 720px) {
    margin-left: 20px;
  }
`
const StyledLogo = styled.div.attrs({
  className: 'grid-d-10 grid-t-9 grid-tl-9 grid-m-9',
})``

const StyledCart = styled.div.attrs({
  className: 'grid-d-2 grid-t-3 grid-tl-3 grid-m-3',
})``

const StyledCartIcon = styled.div.attrs({})`
  color: ${black};
  line-height: 1.6rem;
  position: relative;
  cursor: pointer;
  float: right;
  :focus {
    outline: 0;
  }
  &[data-count]:after {
    position: absolute;
    right: -30%;
    top: -20%;
    content: attr(data-count);
    font-size: 0.5rem;
    padding: 0.6em;
    border-radius: 50%;
    line-height: 0.75em;
    color: ${white};
    background: ${danger};
    text-align: center;
    min-width: 2em;
    font-weight: bold;
  }
  @media (min-width: 320px) {
    margin-right: 10px;
  }
  @media (min-width: 720px) {
    margin-right: 30px;
  }

  @media (min-width: 1024px) {
    float: right;
  }
`

export { StyledHeader, StyledHeaderH1, StyledLogo, StyledCart, StyledCartIcon }
