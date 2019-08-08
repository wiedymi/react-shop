import styled from 'styled-components'
import { lighten } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { black, white } = StyleColors
const { mdsize } = StyleSize

const StyledCounter = styled.div`
  .counter div {
    padding: 0.7rem 1rem;
    @media (min-width: 1200px) {
      padding: 0.7rem 0.4rem;
    }
    margin-top: 1rem;
    font-size: ${mdsize};
  }
  .counter {
    margin-left: 0.7rem;
  }
  .price span {
    display: none;
  }
  .purchase a.button {
    float: left;
  }
  .counter .decrement,
  .increment {
    color: ${white};
    cursor: pointer;
  }
  .counter .decrement {
    background: ${lighten(0.2, black)};
  }
  .counter .increment {
    background: ${black};
  }
  @media (min-width: 640px) {
    .price span {
      display: inline-block;
    }
  }
  @media (min-width: 1024px) {
    .counter div {
      padding: 0.7rem 1rem;

      font-size: ${mdsize};
    }
  }

  @media (min-width: 1200px) {
    .counter.desktop {
      display: inline-block;
    }
    .counter div {
      margin-top: 0.6rem;
    }

    .counter.mobile {
      display: none;
    }
  }
`

export default StyledCounter
