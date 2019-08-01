import styled from 'styled-components'
import StyleSize from '@/components/styled/vars/StyleSize'

const { msize, mdsize } = StyleSize

const StyledModal = styled.div`
  div.mobile {
    display: inline-block;
  }

  .cart-modal-purchase .price {
    padding: 0.7rem 1rem;
    margin-top: 0.7rem;
    font-size: 1.1rem;
  }
  .cart-modal-purchase > * {
    float: left;
  }

  .cart-modal h3 {
    font-size: ${msize};
  }

  .cart-modal .cart-list-product {
    margin: ${mdsize} 0;
  }

  @media (min-width: 1080px) {
    div.content.desktop {
      display: inline-block;
    }
    div.mobile {
      display: none;
    }
  }
`

export default StyledModal
