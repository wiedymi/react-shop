import styled from 'styled-components'

const HeaderWrapper = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.black};

  line-height: 60px;
  z-index: 7678;
  position: fixed;
  width: 100%;
  top: 0;
`

export default HeaderWrapper
