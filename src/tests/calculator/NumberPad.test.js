import React from 'react'
import NumberPad from '../../NumberPad'

describe(NumberPad, () => {
  it('mounts properly', () => {
    const pad = shallow(<NumberPad />)
    expect(pad).toMatchSnapshot()
  })

  it('handles a number click ', () => {
    const fn = jest.fn()
    const pad = mount(<NumberPad handleNumber={fn} />)
    pad.find('.calcBtn').first().simulate('click')
    expect(fn).toHaveBeenCalled()
  })
})
