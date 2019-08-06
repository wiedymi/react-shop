import styled from 'styled-components'
import StyleColors from '@/components/styled/vars/StyleColors'

const { primaryoff } = StyleColors

const StyledNavbar = styled.div`
  .navbar {
    width: 100%;
    height: 6rem;
    line-height: 5.5rem;
    padding-top: 3.5rem;
  }
  ul {
    line-height: 6rem;
    height: 6rem;
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
      color: ${primaryoff};
    }
  }
  .banner {
    height: 16rem;
    float: left;
    background: url('./img/banner.png');
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    line-height: 15rem;
    .blur {
      position: absolute;
      top: 0;
      left: 0;
      background: #000000b3;
      width: 100%;
      height: 100%;
      .info {
        height: 100%;
        line-height: 13rem;
      }
    }
    h2 {
      font-size: 3rem;
      height: 3rem;
      color: #fff;
      padding: 0;
      text-transform: uppercase;
      > span {
        color: ${primaryoff};
      }
    }
    p {
      font-size: 1.6rem;
      color: #fff;
    }
  }
`

export default StyledNavbar
