import { summing, formatNumber } from '../func'

describe('summing', () => {
  it('integers only', () => {
    const arr = [1, 2, 3]
    expect(summing(arr)).toEqual(6)
  })
})

describe('formatNumber', () => {
  it('big number', () => {
    const value = 123456789123456789
    expect(formatNumber(value)).toEqual('number too big')
  })

  it('example 1', () => {
    const value = 1234567
    expect(formatNumber(value)).toEqual('1.23M')
  })

  it('example 2', () => {
    const value = 123456
    expect(formatNumber(value)).toEqual('123K')
  })

  it('small number', () => {
    const value = 123
    expect(formatNumber(value)).toEqual('123')
  })
})

describe('formatNumber returns 3 digt number', () => {
  const digitsPattern = (str) => str.match(/\d+/g)
  const countDigits = (arr) => arr.reduce((sum, ele) => sum + ele.length, 0)

  it('example 1', () => {
    const value = 1234567
    const formatted = digitsPattern(formatNumber(value))
    expect(formatted).toBeTruthy()
    expect(formatted.length).toBeGreaterThanOrEqual(1)
    expect(formatted.length).toBeLessThanOrEqual(2)
    expect(countDigits(formatted)).toBe(3)
  })

  it('example 2', () => {
    const value = 123456
    const formatted = digitsPattern(formatNumber(value))
    expect(formatted).toBeTruthy()
    expect(formatted.length).toBeGreaterThanOrEqual(1)
    expect(formatted.length).toBeLessThanOrEqual(2)
    expect(countDigits(formatted)).toBe(3)
  })

  it('example 3', () => {
    const value = 123456789
    const formatted = digitsPattern(formatNumber(value))
    expect(formatted).toBeTruthy()
    expect(formatted.length).toBeGreaterThanOrEqual(1)
    expect(formatted.length).toBeLessThanOrEqual(2)
    expect(countDigits(formatted)).toBe(3)
  })
});
