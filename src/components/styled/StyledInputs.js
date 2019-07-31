import styled from 'styled-components'
import { darken } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { bg, white } = StyleColors
const { msize, mmargin, mdsize } = StyleSize

const StyledField = styled.div`
  width: 100%;
`
const StyledInput = styled.input`
  width: 100%;
  padding: 0.4rem;
  outline: 0;
  border: 1px solid ${darken(0.05, white)};
  background: ${darken(0.1, white)};
  margin-top: ${mmargin};
  font-size: ${mdsize};
  border-radius: 3px;
  :focus {
    border: 1px solid ${bg};
  }
`

const StyledLabel = styled.label`
  font-size: ${msize};
  text-transform: capitalize;
`
export { StyledField, StyledInput, StyledLabel }
