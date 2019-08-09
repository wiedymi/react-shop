import styled from 'styled-components'
import StyleColors from '@/components/styled/vars/StyleColors'
const { primaryoff } = StyleColors

const Filter = styled.div`
  margin-top: 4.74rem;
  display: none;
  @media (min-width: 1200px) {
    display: inline-block;
  }
  .filter-field {
    h3 {
      border: 1px solid #ccc;
      padding: 0.6rem;
      text-transform: uppercase;
      font-weight: 500;
    }
    .size-field {
      border: 1px solid #ccc;
      border-top: 0;
      margin-bottom: 1.4rem;
      .size {
        width: 20%;
        padding: 0.6rem;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        border-right: 1px solid #ccc;
        &:last-child {
          border-right: 0;
        }
        &.active {
          color: ${primaryoff};
        }
      }
      .categories {
        width: 100%;
        padding: 0.6rem;
        text-align: left;
        display: inline-block;
        cursor: pointer;
        border-bottom: 1px solid #ccc;
        &:last-child {
          border-bottom: 0;
        }
        &.active {
          color: ${primaryoff};
        }
      }
    }

    .colors {
      border: 1px solid #ccc;
      border-top: 0;
      text-align: left;
      span {
        text-align: center;
        width: 100%;
        height: 100%;
        padding: 0.4rem;
        line-height: 1.4rem;
        cursor: pointer;
        font-size: 1.2rem;
        border-top: 1px solid #ccc;
        display: ${props => (props.showColor ? 'none' : 'inline-block')};
      }
      .color {
        display: inline-block;
        width: 20%;
        padding: 0.6rem;
        text-align: center;
        &:focus {
          outline: 0;
        }
        .block {
          border: 2px solid #eee;
          width: 1.8rem;
          height: 1.8rem;
          text-align: center;
          margin: 0 auto;
          &.active {
            border-color: #000;
          }
        }
        &:last-child {
          border-right: 0;
        }
        cursor: pointer;
      }
    }
  }
`
export default Filter
