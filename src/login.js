const bcrypt = require('bcrypt')

const { getHashedPasswordFromDB } = require('./models/user')

function verifyPassword (hashedPW, password) {
  // username does not exist in DB
  if (!hashedPW) {
    return Promise.reject(new Error('INVALID_CREDENTIALS'))
  }

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPW, (error, result) => {
      if (error) {
        reject(error)
      }
      resolve(result)
    })
  })
}

/**
 * Verifies a given set of user credentials
 * @param {string} username - the username associated with a user account
 * @param {string} password - the password associated with a user account
 * @returns {Promise} - rejects on error/incorrect credentials
 */
function authenticateUser (username, password) {
  return getHashedPasswordFromDB(username)
    .then(hashedPW => verifyPassword(hashedPW, password))
}

module.exports = {
  authenticateUser
}