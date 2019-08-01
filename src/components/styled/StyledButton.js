import styled from 'styled-components'
import { darken } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { primaryoff, white } = StyleColors
const { mpadding, mdsize } = StyleSize

const StyledButton = styled.div`
  font-size: ${mdsize};
  display: inline-block;
  background: ${primaryoff};
  color: ${white};
  padding: ${mpadding};
  border-radius: 4px;
  margin-top: 0.6rem;
  transition: 0.3s all;
  cursor: pointer;

  :hover {
    background: ${darken(0.1, primaryoff)};
  }
`

export default StyledButton
