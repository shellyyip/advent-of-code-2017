const assert = require('assert')
const day02 = require('../day02.js')

describe('Day 02, part 1', function() {
  it('formats the "spreadsheet" into an array of arrays', function() {
    const testInput =
    `5 1 9  5
     7 5    3
     2 4 6 8`
    const result = day02.formatSpreadsheet(testInput)
    const expectedResult = [
      [5, 1, 9, 5],
      [7, 5, 3],
      [2, 4, 6, 8]
    ]
    assert.deepEqual(result, expectedResult)
  })

  it('returns the correct checksum for the matrix', function() {
    const testInput = [
      [5, 1, 9, 5],
      [7, 5, 3],
      [2, 4, 6, 8]
    ]
    const result = day02.calculateChecksumPartOne(testInput)
    const expectedResult = 18 
    assert.equal(result, expectedResult)
  })
})

describe('Day 02, 2017, part 2', function() {
  let testInput 
  beforeEach(function() {
    testInput = [
      [5, 9, 2, 8],
      [9, 4, 7, 3],
      [3, 8, 6, 5],
    ] 
  })

  it('correctly finds the two numbers in an array that divide evenly', function() {
    const expectedResult = [4, 3, 2]
    const result = testInput.map((array) => (day02.findEvenDivisors(array)))

    assert.deepEqual(result, expectedResult)
  })

  it('returns the correct checksum for the matrix', function() {
    const expectedResult = 9
    const result = day02.calculateChecksumPartTwo(testInput)

    assert.equal(result, expectedResult)
  })
})