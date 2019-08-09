import styled from 'styled-components'

const CartIconWrapper = styled.div.attrs({
  className: 'grid-d-1 grid-t-1 grid-tl-1 grid-m-2',
})`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CartIcon = styled.div`
  color: ${props => props.theme.colors.white};
  line-height: ${props => props.theme.size.medium};
  position: relative;
  cursor: pointer;

  :focus {
    outline: 0;
  }
  &[data-count]:after {
    position: absolute;
    right: -60%;
    top: -10%;
    content: attr(data-count);
    font-size: 0.8rem;

    border-radius: 50%;
    line-height: 1.2rem;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.danger};
    text-align: center;
    min-width: 1.2rem;
    min-height: 1.2rem;
    font-weight: bold;
  }
`

export { CartIconWrapper, CartIcon }
