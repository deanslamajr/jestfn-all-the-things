const { authenticateUser } = require('./login')

const { getHashedPasswordFromDB } = require('./models/user')

jest.mock('./models/user')

describe('login.js', () => {
  describe('#authenticateUser', () => {
    describe('if an error occurs', () => {
      it('should return a promise that rejects with the error', () => {
        expect.hasAssertions()

        const expectedError = new Error('Something broke')
        getHashedPasswordFromDB.mockImplementationOnce(() => Promise.reject(expectedError))

        return authenticateUser()
          .catch(error => {
            expect(error).toBe(expectedError)
          })
      })
    })  
  })
})