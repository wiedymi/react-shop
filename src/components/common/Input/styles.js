import styled from 'styled-components'
import { lighten } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { white } = StyleColors
const { msize, mdsize } = StyleSize

const InputWrapper = styled.div`
  width: 100%;
  label {
    font-size: ${msize};
    text-transform: capitalize;
  }
  input {
    width: 100%;
    padding: 0.4rem;
    outline: 0;
    border: 1px solid #383838;
    background: ${lighten(0.1, '#383838')};
    margin-top: 0.4rem;
    font-size: ${mdsize};
    border-radius: 3px;
    color: ${white};
  }
`

export default InputWrapper
