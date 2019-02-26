export const summing = arr =>
  arr.reduce((sum, ele) => sum + Number.parseFloat(ele || 0), 0);

export const formatNumber = number => {
  if (isNaN(number)) {
    return number;
  }

  if (number < 1.0e3) {
    return number.toString();
  } else if (number < 1.0e4) {
    return (number / 1.0e3).toFixed(2) + 'K';
  } else if (number < 1.0e5) {
    return (number / 1.0e3).toFixed(1) + 'K';
  } else if (number < 1.0e6) {
    return (number / 1.0e3).toFixed(0) + 'K';
  } else if (number < 1.0e7) {
    return (number / 1.0e6).toFixed(2) + 'M';
  } else if (number < 1.0e8) {
    return (number / 1.0e6).toFixed(1) + 'M';
  } else if (number < 1.0e9) {
    return (number / 1.0e6).toFixed(0) + 'M';
  } else if (number < 1.0e10) {
    return (number / 1.0e9).toFixed(2) + 'B';
  } else if (number < 1.0e11) {
    return (number / 1.0e9).toFixed(1) + 'B';
  } else if (number < 1.0e12) {
    return (number / 1.0e9).toFixed(0) + 'B';
  } else if (number < 1.0e13) {
    return (number / 1.0e12).toFixed(2) + 'T';
  } else if (number < 1.0e14) {
    return (number / 1.0e12).toFixed(1) + 'T';
  } else if (number < 1.0e15) {
    return (number / 1.0e12).toFixed(0) + 'T';
  } else {
    return 'number too big';
  }
};

export const isAllNumbers = arr => {
  var bol = true;
  for (let v of arr) {
    if (isNaN(v)) {
      return false;
    }
  }
  return bol;
};
