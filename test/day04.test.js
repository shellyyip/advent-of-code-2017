const assert = require('assert')
const day04 = require('../day04')

describe.only('Day 04', function() {
  describe('Passphrase verification', function() {
    const validTestInputs = [
      'aa bb cc dd ee',
      'aa bb cc dd aaa',
    ]
    validTestInputs.forEach(function(validTestInput) {
      it(`evaluates ${validTestInput} as valid passphrase`, function() {
        const expectedResult = true
        const result = day04.isValidPassphrase(validTestInput) 
        assert.equal(result, expectedResult)
      })
    })

    const invalidTestInput = 'aa bb cc dd aa'
    it(`evaluates ${invalidTestInput} as an invalid passphrase`, function() {
      const expectedResult = false 
      const result = day04.isValidPassphrase(invalidTestInput)
      assert.equal(result, expectedResult)
    })
  })

  describe('Passphrase list parsing', function() {
    it('breaks up a list of passphrases separated by newlines into array of passphrases', function() {
      const testInput = 
       `aa bb cc dd ee
        ff gg hh iiii jjj
        kk ll mm nn o pp
       `
      const expectedResult = [
        'aa bb cc dd ee',
        'ff gg hh iiii jjj',
        'kk ll mm nn o pp',
      ]
      const result = day04.parsePassphraseList(testInput)
      
      assert.deepEqual(result, expectedResult)
    })
  })

  describe('Valid passphrase counting', function() {
    it('returns the correct number of valid passphrases when given an array of passphrases', function(){
      const testInput = [
        'aa bb cc dd ee',
        'aa bb cc dd aa',
        'aa bb cc dd aaa',
      ]
      const expectedResult = 2
      const result = day04.countValidPassphrases(testInput)

      assert.equal(result, expectedResult)
    })
  })
})