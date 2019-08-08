import styled from 'styled-components'
import { lighten } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { white } = StyleColors
const { msize, mdsize } = StyleSize

const StyledField = styled.div`
  width: 100%;
`
const StyledInput = styled.input`
  width: 100%;
  padding: 0.4rem;
  outline: 0;
  border: 1px solid #383838;
  background: ${lighten(0.1, '#383838')};
  margin-top: 0.4rem;
  font-size: ${mdsize};
  border-radius: 3px;
  color: ${white};
`

const StyledLabel = styled.label`
  font-size: ${msize};
  text-transform: capitalize;
`
export { StyledField, StyledInput, StyledLabel }
