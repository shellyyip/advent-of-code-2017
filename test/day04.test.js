const assert = require('assert')
const day04 = require('../day04')

describe.only('Day 04', function() {
  describe('Passphrase verification', function() {
    describe('Passphrase duplicate words check', function() {
      const validTestInputs = [
        'aa bb cc dd ee',
        'aa bb cc dd aaa',
      ]
      const invalidTestInput = 'aa bb cc dd aa'

      validTestInputs.forEach(function(validTestInput) {
        it(`evaluates ${validTestInput} as valid because it contains no duplicates`, function() {
          const expectedResult = true
          const result = day04.containsNoDuplicates(validTestInput) 
          assert.equal(result, expectedResult)
        })
      })

      it(`evaluates ${invalidTestInput} as invalid because it contains duplicates`, function() {
        const expectedResult = false 
        const result = day04.containsNoDuplicates(invalidTestInput)
        assert.equal(result, expectedResult)
      })
    })

    describe('Passphrase anagrams check', function() {
      const validTestInputs = [
        'abcde fghij',
        'a ab abc abd abf abj',
        'iiii oiii ooii oooi oooo',
      ]
      const invalidTestInputs = [
        'abcde xyz ecdab',
        'oiii ioii iioi iiio',
      ]

      validTestInputs.forEach(function(validTestInput) {
        it(`evaluates ${validTestInput} as valid because it contains no anagrams`, function() {
          const expectedResult = true
          const result = day04.containsNoAnagrams(validTestInput)
          assert.equal(result, expectedResult)
        })
      })

      invalidTestInputs.forEach(function(invalidTestInput) {
        it(`evaluates ${invalidTestInput} as invalid because it contains anagrams`, function() {
          const expectedResult = false 
          const result = day04.containsNoAnagrams(invalidTestInput)
          assert.equal(result, expectedResult)
        })
      })
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
    it('returns the correct number of passphrases with no duplicates when given an array of passphrases', function(){
      const testInput = [
        'aa bb cc dd ee',
        'aa bb cc dd aa',
        'aa bb cc dd aaa',
      ]
      const expectedResult = 2
      const result = day04.countValidPassphrases(testInput)

      assert.equal(result, expectedResult)
    })

    it('returns the correct number of passphrases that has no anagrams when given an array of passphrases', function() {

    })
  })
})