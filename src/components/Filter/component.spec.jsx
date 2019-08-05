import React from 'react'
import { shallow } from 'enzyme'
import Filter from '@/components/Filter/component'

describe('Test Filter component', () => {
  it('renders without crashing', () => {
    shallow(<Filter setFilterBy={jest.fn()} colors={['red']}
      size={['xl']} tags={['polo']} />)
  })
})
