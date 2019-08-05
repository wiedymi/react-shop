import styled from 'styled-components'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { primaryoff, white } = StyleColors
const { msize, mmargin } = StyleSize

export const StyledTags = styled.div`
  margin-top: 0.6rem;
  left: 10rem;
  top: 0.6rem;
  width: 100%;

  @media (min-width: 440px) {
    margin-left: 10px;
    width: unset;
  }

  @media (min-width: 1080px) {
    position: absolute;
    margin-top: 0;
    width: unset;
  }

  @media (min-width: 1200px) {
    margin-left: 0;
    width: 300px;
  }
`

export const StyledSpan = styled.span`
  border: 1px solid ${primaryoff};
  margin-right: 5px;
  padding: ${mmargin} 0.8rem;
  border-radius: ${msize};
  color: ${primaryoff};
  background: ${white};
  cursor: pointer;
  .selected {
    border: 1px solid ${primaryoff};
    color: ${white};
    background: ${primaryoff};
  }
`
