import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0;
  width: 100%;

  :after,
  :before {
    display: table;
    clear: both;
    content: ' ';
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1180px;
    margin: 0 auto;
  }
`

export default StyledContainer
