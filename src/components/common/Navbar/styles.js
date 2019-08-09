import styled from 'styled-components'

const NavbarWrapper = styled.div`
  h1 {
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.size.large};
    text-align: center;
    @media (min-width: 1200px) {
      padding: 0;
    }

    > span {
      color: ${props => props.theme.colors.primary};
    }
  }
  .navbar {
    width: 100%;
    display: flex;
    margin-top: 60px;
    height: 100px;
  }
  .navbar .container {
    justify-content: space-between;
    align-items: center;
  }
  .navbar .menu {
    flex-grow: 2;
  }
  .navbar .logo {
    flex-grow: 1;
  }
  ul {
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }

    text-align: right;
  }
  ul li {
    display: inline;
    margin-left: 1.6rem;
  }
  ul li a {
    font-size: 1.6rem;
    color: #000;
    transition: 0.3s all;
    :hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`
export default NavbarWrapper
