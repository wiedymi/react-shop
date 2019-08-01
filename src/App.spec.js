import React from 'react'
import { shallow } from 'enzyme'
import App from '@/App'

describe('Test App component', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})
