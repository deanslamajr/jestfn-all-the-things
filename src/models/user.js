function someRelativelyLongRunningServiceCall () {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 5000)
  })
}

function getHashedPasswordFromDB (username) {
  return someRelativelyLongRunningServiceCall()
}

module.exports = {
  getHashedPasswordFromDB
}