import React from 'react'
import PropTypes from 'prop-types'
import StyledContainer from '@/components/styled/StyledContainer'

const Container = ({ children = '' }) => {
  return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Container
