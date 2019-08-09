import styled from 'styled-components'
import { lighten } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { black, white } = StyleColors
const { mdsize } = StyleSize

const CounterWrapper = styled.div`
  .counter div {
    padding: 0.7rem 1rem;
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
      font-size: 1.1rem;
      max-width: 40px;
      height: 40px;
      min-width: 40px;
      padding: 10px;
      text-align: center;
    }

    .counter.mobile {
      display: none;
    }
  }
`

export default CounterWrapper
