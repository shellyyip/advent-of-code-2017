const assert = require('assert')
const day02 = require('../day02.js')

describe('Day 02, 2017', function() {
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
    const result = day02.calculateChecksum(testInput)
    const expectedResult = 18 
    assert.equal(result, expectedResult)
  })
})