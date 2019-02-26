export const summing = (arr) => arr.reduce((sum, ele) => sum + Number.parseFloat(ele || 0), 0)

export const formatNumber = (number) => {
  if (isNaN(number)) {
    return number
  }

  if (number < 1.0e+3) {
    return number.toString()
  } else if (number < 1.0e+4) {
    return (number / 1.0e+3).toFixed(2) + 'K'
  } else if (number < 1.0e+5) {
    return (number / 1.0e+3).toFixed(1) + 'K'
  } else if (number < 1.0e+6) {
    return (number / 1.0e+3).toFixed(0) + 'K'

  } else if (number < 1.0e+7) {
    return (number / 1.0e+6).toFixed(2) + 'M'
  } else if (number < 1.0e+8) {
    return (number / 1.0e+6).toFixed(1) + 'M'
  } else if (number < 1.0e+9) {
    return (number / 1.0e+6).toFixed(0) + 'M'

  } else if (number < 1.0e+10) {
    return (number / 1.0e+9).toFixed(2) + 'B'
  } else if (number < 1.0e+11) {
    return (number / 1.0e+9).toFixed(1) + 'B'
  } else if (number < 1.0e+12) {
    return (number / 1.0e+9).toFixed(0) + 'B'

  } else if (number < 1.0e+13) {
    return (number / 1.0e+12).toFixed(2) + 'T'
  } else if (number < 1.0e+14) {
    return (number / 1.0e+12).toFixed(1) + 'T'
  } else if (number < 1.0e+15) {
    return (number / 1.0e+12).toFixed(0) + 'T'

  } else {
    return 'number too big'
  }
}

export const isAllNumbers = (arr) => {
  var bol = true
  for (let v of arr) {
    if (isNaN(v)) {
      return false
    }
  }
  return bol
}