numeric_inputs = process.argv.slice(2)

console.log(numeric_inputs.reduce (function(sum, val) {
  return Number(sum) + Number(val)
}, 0))
