import { calculateResult } from '../../Calculator'

describe(calculateResult, () => {
  test('addition', () => {
    expect(calculateResult(5, 6, '+')).toEqual(11)
  })

  test('subtraction', () => {
    expect(calculateResult(5, 6, '-')).toEqual(-1)
  })

  test('division', () => {
    expect(calculateResult(125, 5, '/')).toEqual(25)
  })

  test('multiplication', () => {
    expect(calculateResult(4, 8.4, '*')).toEqual(33.6)
  })

  test('it returns false if operator is invalid', () => {
    expect(calculateResult(4, 8.4, undefined)).toEqual(false)
  })
})
