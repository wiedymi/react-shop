import styled from 'styled-components'
import StyleSize from '@/components/styled/vars/StyleSize'
import StyleColors from '@/components/styled/vars/StyleColors'
import { lighten } from 'polished'

const { msize, mmargin } = StyleSize
const { bgimg, black, primaryoff, white } = StyleColors

const StyledCard = styled.div`
  float: left;
  margin: 1.6rem 0;
  margin-top: 0.6rem;
  width: 100%;
  @media (min-width: 1200px) {
    width: 100%;
  }

  .desktop {
    display: none;
  }
  .card {
    display: flex;
    padding: 0 !important;
    flex-direction: column;
    margin-bottom: 0.6rem;
    overflow: hidden;

    @media (min-width: 1200px) {
      flex-direction: row;
    }
  }
  .cards {
    padding: 1rem;
    text-align: center;
    @media (min-width: 1200px) {
      text-align: left;
      padding: 0;
    }
  }
  .text-break-and-justify {
    text-align: justify;
    text-justify: inter-word;
    word-break: break-word;
    margin-top: 0.4rem;
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }
  }
  .card .info {
    flex: 1;
    min-width: 0;
    width: 100%;
    overflow: hidden;
    @media (min-width: 1200px) {
      margin-left: 0.6rem;
      width: 100%;
    }

    h3 {
      &:hover {
        color: rgb(0, 123, 255);
      }
      transition: 0.2s all;
    }
  }

  .card img {
    @media (min-width: 1200px) {
      height: 10rem;
      min-width: 110px;
      max-width: 110px;
    }
    height: 14rem;
    min-width: 160px;
    max-width: 160px;

    border: 3px solid ${bgimg};
  }

  .card h3 {
    color: ${black};
    text-align: left;
    font-size: 1.3rem;
    height: 1.5rem;
    @media (min-width: 1200px) {
      font-size: 2rem;
      height: 2.6rem;
      margin-bottom: 0.4rem;
    }

    transition: 0.3s all;
  }
  .info h4 {
    font-size: 1.3rem;
    text-align: left;
    @media (min-width: 1200px) {
      font-size: 1.6rem;
    }
    color: ${primaryoff};
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
    float: left;

    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-word;

    overflow: hidden;

    @media (min-width: 1200px) {
      height: 2.3rem;
      width: 70%;
      white-space: nowrap;
      white-space: normal;
      padding-top: 0.4rem;
    }
  }

  .info div {
    float: left;

    .star-ratings .star-container {
      float: left;
    }
    .star-ratings {
      float: right;
      display: none !important;
      @media (min-width: 1200px) {
        display: inline-block !important;
        display: block;
      }
    }
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
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }
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
      font-size: 2rem;
    }
    .card img {
      height: 12.5rem;
      min-width: 150px;
      max-width: 150px;
    }
    .text-break-and-justify.desktop {
      display: inline-block;
    }
  }
`

export default StyledCard
