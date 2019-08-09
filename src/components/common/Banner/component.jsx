import React from 'react'
import BannerWrapper from './styles'

const component = () => {
  return (
    <BannerWrapper>
      <div className="banner">
        <div className="blur">
          <div className="container">
            <div className="info">
              <h2>
                Sign up and get <span>27%</span> off
              </h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  )
}

export default component
