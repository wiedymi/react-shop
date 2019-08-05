import styled from 'styled-components'
import StyleSize from '@/components/styled/vars/StyleSize'
import StyleColors from '@/components/styled/vars/StyleColors'
import { lighten } from 'polished'

const { msize, mmargin } = StyleSize
const { bgimg, black, primaryoff, white } = StyleColors

const StyledCard = styled.div`
  .desktop {
    display: none;
  }
  .card {
    display: flex;
    margin-bottom: 0.6rem;
    overflow: hidden;
  }
  .text-break-and-justify {
    text-align: justify;
    text-justify: inter-word;
    word-break: break-word;
  }
  .card .info {
    margin-left: 0.6rem;
    flex: 1;
    min-width: 0;
  }

  .card img {
    height: 10rem;
    min-width: 110px;
    max-width: 110px;
    border: 1px solid ${bgimg};
  }

  .card h3 {
    color: ${black};
    font-size: 2rem;
    transition: 0.3s all;
  }

  .card a:hover {
    color: ${lighten(0.3, black)};
  }

  .star-ratings {
    float: left;
  }
  .info-title-rating {
    width: 100%;
  }
  .info h3 {
    padding: 0.2rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info div {
    float: left;
  }

  .readMoreText {
    color: ${primaryoff};
    margin-left: 0.2rem;
  }

  .start-tags {
    position: relative;
  }

  .color {
    width: 100%;
    margin-top: 0.2rem;
  }
  .color .button {
    display: inline-block;
    width: ${msize};
    height: ${msize};
    cursor: pointer;
    border: 1px solid ${bgimg};
    margin-right: ${mmargin};
  }
  .size .button {
    display: inline-block;
    width: ${msize};
    height: ${msize};
    cursor: pointer;
    border: 1px solid ${bgimg};
    background: ${white};
    margin-right: ${mmargin};
  }
  .color .button:focus {
    outline: 0;
  }

  .color label {
    width: 100%;
    float: left;
  }

  .size {
    width: 100%;
    margin-top: 0.2rem;
  }

  .button.selected {
    border: 1px solid ${bgimg};
    border-color: ${black};
  }
  .size .button:focus {
    outline: 0;
  }
  .size p {
    margin-bottom: 0.4rem;
  }

  .color p {
    margin-bottom: 0.4rem;
  }
  .purchase {
    width: 100%;
    float: left;
  }

  .cards .card:first-child {
    margin-top: 0px;
  }

  .cards .card:last-child {
    margin-bottom: 0px;
  }
  .size.desktop label {
    display: none;
  }

  @media (min-width: 540px) {
    .size.desktop {
      display: inline-block;
    }
    .card img {
      height: 11.3rem;
      min-width: 130px;
      max-width: 130px;
    }
  }
  @media (min-width: 724px) {
    .card img {
      height: 11.15rem;
      min-width: 130px;
      max-width: 130px;
    }
    .no-padding.relative {
      padding: 0;
    }
    .fixed {
      width: 30.9%;
    }
    .info > .size > div.grid-12 {
      padding: 0;
    }
    .size.desktop label {
      display: inline-block;
    }
    .size.desktop button {
      margin-top: 0;
    }
  }
  @media (min-width: 1024px) {
    .card img {
      height: 15.3rem;
      min-width: 180px;
      max-width: 180px;
    }
    .fixed {
      width: 31.6%;
    }
    .info > .size > div.grid-12 {
      padding: 0;
    }
    .card .info h3 {
      font-size: 2.4rem;
    }
    .size.desktop label {
      display: inline-block;
    }
    .size.desktop button {
      margin-top: 0;
    }
    .color.desktop {
      display: inline-block;
    }
  }

  @media (min-width: 1200px) {
    .card .info h3 {
      font-size: 3rem;
    }
    .card img {
      height: 21.3rem;
      min-width: 230px;
      max-width: 230px;
    }
    .text-break-and-justify.desktop {
      display: inline-block;
    }
  }
`

export default StyledCard
