import styled from 'styled-components'
import StyleColors from '@/components/styled/vars/StyleColors'

const { primaryoff } = StyleColors

const StyledNavbar = styled.div`
  .navbar {
    width: 100%;
    height: 6rem;
    line-height: 6rem;
    padding-top: 4rem;
    @media (min-width: 1200px) {
      height: 6rem;
      line-height: 6rem;
      padding-top: 3.5rem;
    }
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
      color: ${primaryoff};
    }
  }
  .banner {
    float: left;
    background: url('/img/banner.png');
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    line-height: 15rem;
    height: 10rem;
    @media (min-width: 1200px) {
      height: 16rem;
    }
    .blur {
      position: absolute;
      top: 0;
      left: 0;
      background: #000000b3;
      width: 100%;
      height: 100%;
      .info {
        height: 100%;
        line-height: 8rem;

        @media (min-width: 1200px) {
          line-height: 13.5rem;
        }
      }
    }
    h2 {
      font-size: 1.6rem;
      height: 1.6rem;
      text-align: center;
      color: #fff;
      padding: 0;
      text-transform: uppercase;
      @media (min-width: 1200px) {
        text-align: left;
        font-size: 3rem;
        height: 3rem;
      }

      > span {
        color: ${primaryoff};
      }
    }
    p {
      font-size: 1rem;
      height: 1rem;
      text-align: center;
      color: #fff;
      line-height: 1rem;
      margin-top: 3.5rem;

      @media (min-width: 1200px) {
        font-size: 1.6rem;
        height: 1.6rem;
        margin-top: 6rem;
        text-align: left;
      }
    }
  }
`

export default StyledNavbar
