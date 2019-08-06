import styled from 'styled-components'
import { darken } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { primaryoff, white } = StyleColors
const { mdsize } = StyleSize

const StyledButton = styled.div`
  font-size: ${mdsize};
  display: inline-block;
  background: ${primaryoff};
  color: ${white};
  padding: 0.7rem 1rem;
  border-radius: 5rem;
  font-weight: 600;
  transition: 0.3s all;
  cursor: pointer;
  @media (min-width: 320px) {
    margin-top: 1rem;
  }
  @media (min-width: 550px) {
    margin-top: 0.6rem;
  }

  @media (min-width: 1200px) {
    margin-top: 0.6rem;
  }
  :hover {
    background: ${darken(0.1, primaryoff)};
  }
`

export default StyledButton
