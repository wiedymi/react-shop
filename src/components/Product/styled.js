import styled from 'styled-components'

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
    max-height: 420px;
    min-height: 420px;
    margin: 1rem;

    @media (min-width: 620px) {
      max-height: 320px;
      min-height: 320px;
      margin: 1rem;
      width: 40%;
    }
    @media (min-width: 1200px) {
      margin: 0rem;
      max-height: 420px;
      min-height: 420px;
      margin: 1rem;
    }
    border: 4px solid #eee;
  }
  .recommendation .card {
    width: 50% !important;
    padding: 0 1rem;
    margin-bottom: 0.6rem;
    padding-right: 0rem;
    @media (min-width: 620px) {
      width: 24.99% !important;
    }
    @media (min-width: 1200px) {
      width: 20% !important;
      padding: 0 0.7rem;
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
      @media (min-width: 1200px) {
        max-height: 280px;
        min-height: 280px;
      }
      border: 4px solid #eee;
    }
  }
  .product {
    display: flex;
    flex-direction: column;
    @media (min-width: 620px) {
      flex-direction: row;
    }
    @media (min-width: 1200px) {
      flex-direction: row;
    }
    margin-top: 4rem;
    .info {
      padding-top: 0;
      width: 100%;
      padding-right: 1rem;

      @media (min-width: 620px) {
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

        @media (min-width: 620px) {
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
            height: 4rem;
          }
        }
        &:hover {
          color: rgb(0, 123, 255);
        }
      }
      .purchase {
        display: inline-block !important;
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

      @media (min-width: 620px) {
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
