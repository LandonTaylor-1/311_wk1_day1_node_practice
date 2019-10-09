const isEven = (num) => {
  if (num % 2 === 0) {
    return true
  } else return false
}

const sum = (arr) => {
  let newNum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  })
  return newNum
}

const comboSum = (arr, sum) => {
  let newNum = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
      if (i !== j) {
        newNum = arr[i]+arr[j]
      }
      if (newNum === sum) {
        return true
      } else return false
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}