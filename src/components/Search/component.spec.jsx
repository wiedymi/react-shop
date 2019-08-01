import React from 'react'
import { shallow } from 'enzyme'
import Search from '@/components/Search/component'

describe('Test Search component', () => {
  it('renders without crashing', () => {
    shallow(<Search searchByText={jest.fn()} />)
  })
})
