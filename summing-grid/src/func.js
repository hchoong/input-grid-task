export const summing = (arr) => arr.reduce((sum, ele) => sum + Number.parseFloat(ele || 0), 0)
