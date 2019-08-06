import styled from 'styled-components'

import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { black, white } = StyleColors
const { lgsize } = StyleSize

const StyledHeader = styled.div`
  height: 3.5rem;
  background: ${black};

  a {
    float: left;
  }
  line-height: 3.5rem;
  z-index: 7678;
  position: fixed;
  width: 100%;
`
const StyledHeaderH1 = styled.h1`
  color: ${black};
  font-size: ${lgsize};
  text-align: left;
  padding: 0;
  > span {
    color: #ee7501;
  }
`
const StyledLogo = styled.div.attrs({
  className: 'grid-d-6 grid-t-4 grid-tl-4 grid-m-12',
})``

const StyledCart = styled.div.attrs({
  className: 'grid-d-1 grid-t-1 grid-tl-1 grid-m-1 right',
})``

const StyledCartIcon = styled.div.attrs({})`
  color: ${white};
  line-height: 2.3rem;
  position: relative;
  cursor: pointer;
  float: right;
  :focus {
    outline: 0;
  }
  &[data-count]:after {
    position: absolute;
    right: -60%;
    top: -10%;
    content: attr(data-count);
    font-size: 0.8rem;

    border-radius: 50%;
    line-height: 1.2rem;
    color: white;
    background: #e6401b;
    text-align: center;
    min-width: 1.2rem;
    min-height: 1.2rem;
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
