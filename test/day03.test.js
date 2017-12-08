const assert = require('assert')
const day03 = require('../day03')

describe('Day 03, part 1', function() {
  const testInputs = [1, 12, 23, 1024]
  const expectedResults = [0, 3, 2, 31]

  testInputs.forEach(function(testInput, index) {
    it(`generates the correct steps for ${testInput}`, function() {
      const expectedResult = expectedResults[index]  
      const result = day03.findManhattanSteps(testInput)

      assert.equal(result, expectedResult)
    })
  }) 
})