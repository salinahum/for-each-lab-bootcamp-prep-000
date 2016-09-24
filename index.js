function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ["Thai by Thai", "Shake Shack", "The Halal Guys"]

  array.forEach(callback)

  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
