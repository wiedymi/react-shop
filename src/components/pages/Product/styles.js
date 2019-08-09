import styled from 'styled-components'

import StyleSize from '@/components/styled/vars/StyleSize'
import StyleColors from '@/components/styled/vars/StyleColors'

const { msize, mmargin } = StyleSize
const { bgimg, black, primaryoff, white } = StyleColors

const StyledProduct = styled.div`
  overflow: hidden;
  .recommendation {
    margin: 4rem 0;
    padding-right: 1rem;
    .label {
      width: 100%;
      h4 {
        margin: 0 auto;
        width: 200px;
        text-align: center;
        text-transform: uppercase;
        border: 1px solid #ccc;
        padding: 0.6rem;
        margin-bottom: 2rem;
      }
    }
  }

  img {
    max-height: 360px;
    min-height: 360px;

    margin: 1rem;
    @media (min-width: 360px) {
      max-height: 420px;
      min-height: 420px;
    }
    @media (min-width: 560px) {
      max-height: 320px;
      min-height: 320px;
      margin: 1rem;
      width: 40%;
    }
    @media (min-width: 1200px) {
      max-height: 420px;
      min-height: 420px;
    }
    border: 4px solid #eee;
  }
  .recommendation .card {
    :last-child {
      display: none;
    }
    width: 50% !important;
    padding: 0 1rem;
    margin-bottom: 0.6rem;
    padding-right: 0rem;
    @media (min-width: 560px) {
      width: 24.99% !important;
    }
    @media (min-width: 1200px) {
      width: 20% !important;
      padding: 0 0.7rem;
      :last-child {
        display: inline-block;
      }
    }
    display: inline-block;

    a {
      font-size: 1.2rem;
      transition: 0.2s all;
      color: black;
      &:hover {
        color: rgb(0, 123, 255);
      }
      h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 1.3rem;
        width: 100%;
      }
    }
    h4 {
      color: #ee7601;
    }
    img {
      max-height: 220px;
      min-height: 220px;
      width: 100%;
      margin: 0;
      @media (min-width: 320px) {
        max-height: 180px !important;
        min-height: 180px !important;
        width: 100%;
      }
      @media (min-width: 560px) {
        max-height: 160px !important;
        min-height: 160px !important;
        width: 100%;
      }
      @media (min-width: 620px) {
        max-height: 180px !important;
        min-height: 180px !important;
        width: 100%;
      }
      @media (min-width: 1200px) {
        max-height: 280px !important;
        min-height: 280px !important;
      }
      border: 4px solid #eee;
    }
  }
  .product {
    display: flex;
    flex-direction: column;
    @media (min-width: 560px) {
      flex-direction: row;
    }
    @media (min-width: 1200px) {
      flex-direction: row;
    }
    @media (min-width: 310px) {
      .counter {
        display: none;
      }
    }
    margin-top: 4rem;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 0;
      width: 100%;
      padding-right: 1rem;
      .star-ratings {
        float: left;
        margin-top: 8.19px;
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
      @media (min-width: 560px) {
        > .size {
          display: none;
        }
        > .color {
          display: none;
        }
        .counter {
          display: none;
        }
      }
      @media (min-width: 1200px) {
        > .size {
          display: inline-block;
        }
        > .color {
          display: inline-block;
        }
        .counter {
          display: inline-block;
        }
      }

      h4 {
        display: inline-block;
        margin: 1rem 0;

        @media (min-width: 560px) {
          margin: 0.3rem 0 0 0;
          font-size: 1.6rem;
        }
        @media (min-width: 1200px) {
          margin: 1rem 0;
        }
      }
      .info-title-rating a {
        color: black;
        font-size: 2rem;
        transition: 0.2s all;
        h3 {
          height: 2.4rem;
        }

        @media (min-width: 1200px) {
          h3 {
            font-size: 3rem;
          }
        }
        &:hover {
          color: rgb(0, 123, 255);
        }
      }
      .purchase {
        display: flex !important;
        .counter {
          display: flex !important;
        }
      }
      .text-break-and-justify {
        display: inline-block !important;
      }
      .star-ratings {
        width: 100%;

        display: inline-block !important;
      }
    }
    > div {
      margin-left: 1rem;
      margin-top: 0;
      padding-right: 1rem;

      @media (min-width: 560px) {
        margin: 1.4rem 0 0 0;
      }
      @media (min-width: 1200px) {
        padding-top: 1.6rem;
        margin-left: 0;
        margin-top: 0;
        padding-right: 1rem;
      }
    }
  }
`

export default StyledProduct
