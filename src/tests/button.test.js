import React from 'react'
import Button from '../shared/Button'

describe('Button', () => {
  it('should render correctly', () => {
    const btn = shallow(<Button />)
    expect(btn).toMatchSnapshot()
  })

  it('should render the child text', () => {
    const btn = shallow(<Button>testing 123</Button>)
    expect(btn.prop('children')).toEqual('testing 123')
  })

  it('defaults to "click"', () => {
    const btn = shallow(<Button />)
    expect(btn.prop('children')).toEqual('click')
  })

  it('invokes the handleClick callback passed via props', () => {
    const handleClick = jest.fn()
    const btn = shallow(<Button handleClick={handleClick} />)
    btn.simulate('click', {})
    expect(handleClick).toBeCalledWith({})
  })
})
