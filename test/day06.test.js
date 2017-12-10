const assert = require('assert')
const Day06 = require('../day06')
const puzzleInput = require('../inputs/day06.input')

describe('Day 06', function() {
  let day06 
  beforeEach(function() {
    day06 = new Day06
  })

  it('parses a string list of memory banks into an array of banks', function() {
    const testInput = puzzleInput
    const expectedResult = [14, 0, 15, 12, 11, 11, 3, 5, 1, 6, 8, 4, 9, 1, 8, 4]
    const result = day06.parseList(testInput)

    assert.deepStrictEqual(result, expectedResult)
  })

  describe('Finding the memory bank with the most blocks', function() {
    it('finds the value of the memory bank with the most blocks', function() {
      const testInput = [0, 2, 7, 0]
      const expectedResult = 7
      const result = day06.findLargestBank(testInput)

      assert.equal(result, expectedResult)
    })

    it('finds the index of the memory bank with the most blocks', function() {
      const testInput = [0, 2, 7, 0]
      const expectedResult = 2
      const result = day06.findIndexOfLargestBank(testInput)

      assert.equal(result, expectedResult)
    })

    it('breaks ties in favor of the lower index', function() {
      const testInput = [1, 1, 1]
      const expectedResult = 0
      const result = day06.findIndexOfLargestBank(testInput)

      assert.equal(result, expectedResult)
    })
  })

  describe('Checking configurations', function() {
    const testMatrix = [
      [1, 1, 1, 1],
      [4, 2, 1, 5],
      [11, 22, 33, 44]
    ]
    const validTestInputs = [
      [4, 2, 1, 5],
      [11, 22, 33, 44]
    ]

    validTestInputs.forEach(function(validTestInput) {
      it(`can detect that ${validTestInput} exists in the matrix`, function() {
        const result = day06.hasConfigBeenSeen(testMatrix, validTestInput)

        assert.equal(true, result)
      })
    })

    const invalidTestInput = [0, 0, 0, 0]
    it(`can detect that ${invalidTestInput} does not exist in the matrix`, function() {
      const result = day06.hasConfigBeenSeen(testMatrix, invalidTestInput)
      
      assert.equal(false, result)
    })
  })

  describe('Redistribution', function() {
    it('redistributes blocks from the largest memory bank to all others', function() {
      const testInput = [0, 2, 7, 0]
      const expectedResult = [2, 4, 1, 2]
      const result = day06.redistributeBlocks(testInput)

      assert.deepEqual(result, expectedResult)
    })

    it('can detect when it has a configuration previously seen and return number of cycles', function() {
      const testInput = [0, 2, 7, 0]
      const expectedResult = 5
      const result = day06.runRedistributionCycles(testInput)

      assert.equal(result, expectedResult)
    })
  })
})