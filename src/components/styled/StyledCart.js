import styled from 'styled-components'
import { darken } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'

const { danger, white } = StyleColors

const StyledCart = styled.div`
  .cart-item,
  .cart-item-counter {
    display: flex;
    justify-content: space-between;
    line-height: 20px;
  }

  margin: 10px 0px;

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
  .cart-item-counter input {
    border: 1px solid ${darken(0.1, white)};
    width: 40px;
    padding: 3px;
    margin-right: 5px;
  }
  .cart-item-counter input:focus {
    outline: 0;
    border: 1px solid #006270;
  }
  .cart-item-counter {
    margin: 0px 5px;
  }
  .cart-item-close {
    cursor: pointer;
    transition: 0.2s all;
  }

  .cart-item-close:hover {
    cursor: pointer;
    color: ${danger};
  }
`

export default StyledCart
